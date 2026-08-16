<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import MiniSearch from 'minisearch'

import { searchPages } from './searchData'
import type { SearchPage, SearchResultItem } from './types/search'

const SEARCH_EVENT = 'vp-search-page:navigate'
const SEARCH_DEBOUNCE = 120
const URL_DEBOUNCE = 350
const ZERO_WIDTH = /[\u200B\u200C\u200D\uFEFF]/g

const { site } = useData()

const q = ref('')
const searched = ref(false)
const results = ref<SearchResultItem[]>([])

const isCleanUrls = computed(() =>
    Boolean((site.value as { cleanUrls?: boolean }).cleanUrls)
)

const searchHref = computed(() =>
    withBase(isCleanUrls.value ? '/search' : '/search.html')
)

let mini: MiniSearch<SearchPage> | null = null
let pageById: Map<string, SearchPage> | null = null
let searchTimer: ReturnType<typeof setTimeout> | null = null
let urlTimer: ReturnType<typeof setTimeout> | null = null

type StoredResult = {
    id: string
    url?: string
    title?: string
    match?: Record<string, string[]>
}

function getQuery(): string {
    return q.value.replace(ZERO_WIDTH, '').trim()
}

function getQueryTerms(query: string = getQuery()): string[] {
    const terms = query
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)

    return Array.from(new Set(terms)).sort((a, b) => b.length - a.length)
}

function getHighlightTerms(
    query: string,
    match?: Record<string, string[]>
): string[] {
    const terms = new Set<string>(getQueryTerms(query))

    if (match) {
        for (const term of Object.keys(match)) {
            const cleanTerm = term.replace(ZERO_WIDTH, '').trim().toLowerCase()

            if (cleanTerm) {
                terms.add(cleanTerm)
            }
        }
    }

    return Array.from(terms).sort((a, b) => b.length - a.length)
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlightText(
    text: string,
    terms: string[] = [],
    preserveWhitespace = false
): string {
    const base = (text || '').replace(ZERO_WIDTH, '')

    const cleanText = preserveWhitespace
        ? base.replace(/\r/g, '').trim()
        : base.replace(/\s+/g, ' ').trim()

    if (!cleanText) {
        return ''
    }

    const safeTerms = Array.from(
        new Set(
            terms
                .map((term) => term.replace(ZERO_WIDTH, '').trim().toLowerCase())
                .filter(Boolean)
        )
    ).sort((a, b) => b.length - a.length)

    if (!safeTerms.length) {
        return escapeHtml(cleanText)
    }

    const regexp = new RegExp(
        `(${safeTerms.map(escapeRegExp).join('|')})`,
        'gi'
    )

    let html = ''
    let lastIndex = 0

    for (const match of cleanText.matchAll(regexp)) {
        const index = match.index ?? 0
        const matchedText = match[0]

        if (index > lastIndex) {
            html += escapeHtml(cleanText.slice(lastIndex, index))
        }

        html += `<mark>${escapeHtml(matchedText)}</mark>`
        lastIndex = index + matchedText.length
    }

    if (lastIndex < cleanText.length) {
        html += escapeHtml(cleanText.slice(lastIndex))
    }

    return html
}

function makeExcerpt(
    text = '',
    query = '',
    maxLength = 180,
    terms: string[] = []
): string {
    const cleanText = text
        .replace(ZERO_WIDTH, '')
        .replace(/\s+/g, ' ')
        .trim()

    if (!cleanText) {
        return ''
    }

    const allTerms = terms.length ? terms : getQueryTerms(query)
    const lower = cleanText.toLowerCase()

    let index = -1
    let termLength = 0

    for (const term of allTerms) {
        const termLower = term.toLowerCase()
        const position = lower.indexOf(termLower)

        if (position >= 0) {
            index = position
            termLength = term.length
            break
        }
    }

    if (index < 0) {
        return cleanText.slice(0, maxLength) + (cleanText.length > maxLength ? '…' : '')
    }

    const start = Math.max(0, index - 60)
    const end = Math.min(cleanText.length, index + termLength + 120)

    return (
        (start > 0 ? '…' : '') +
        cleanText.slice(start, end) +
        (end < cleanText.length ? '…' : '')
    )
}

function makeCodeExcerpt(
    code = '',
    terms: string[] = [],
    maxLines = 6
): string {
    const cleanCode = (code || '')
        .replace(ZERO_WIDTH, '')
        .replace(/\r/g, '')
        .trim()

    if (!cleanCode) {
        return ''
    }

    const lines = cleanCode.split('\n')
    let matchLine = -1

    for (const term of terms) {
        const lowerTerm = term.toLowerCase()

        matchLine = lines.findIndex((line) =>
            line.toLowerCase().includes(lowerTerm)
        )

        if (matchLine >= 0) {
            break
        }
    }

    if (matchLine < 0) {
        return (
            lines.slice(0, maxLines).join('\n') +
            (lines.length > maxLines ? '\n…' : '')
        )
    }

    const start = Math.max(0, matchLine - 2)
    const end = Math.min(lines.length, matchLine + 3)

    const snippet = lines.slice(start, end).join('\n')

    return (
        (start > 0 ? '…\n' : '') +
        snippet +
        (end < lines.length ? '\n…' : '')
    )
}

function normalizeUrl(url: string): string {
    const base = site.value?.base ?? '/'

    if (!url) {
        return url
    }

    if (base === '/') {
        return url
    }

    return url.startsWith(base) ? url : withBase(url)
}

function initIndex(): void {
    if (mini) {
        return
    }

    pageById = new Map<string, SearchPage>(
        searchPages.map((item) => [item.id, item])
    )

    mini = new MiniSearch<SearchPage>({
        idField: 'id',
        fields: ['title', 'text', 'code'],
        storeFields: ['title', 'url'],
        searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            combineWith: 'OR',
        },
    })

    mini.addAll(searchPages)
}

function runSearch(): void {
    const query = getQuery()

    if (!query) {
        results.value = []
        return
    }

    searched.value = true

    if (!mini) {
        initIndex()
    }

    const client = mini

    if (!client) {
        return
    }

    const queryTerms = getQueryTerms(query)
    let found: StoredResult[] = []

    try {
        found = client.search(query) as StoredResult[]
    } catch {
        found = []
    }

    if (found.length > 0) {
        results.value = found.slice(0, 50).map((item) => {
            const page = pageById?.get(item.id)
            const terms = getHighlightTerms(query, item.match)

            const pageCode = (page?.code || '').toLowerCase()
            const hasCodeMatch = Boolean(
                pageCode && terms.some((term) => pageCode.includes(term))
            )

            return {
                url: item.url || page?.url || item.id,
                title: item.title || page?.title || item.id,
                excerpt: makeExcerpt(page?.text || '', query, 180, terms),
                codeExcerpt: hasCodeMatch
                    ? makeCodeExcerpt(page?.code || '', terms)
                    : undefined,
                terms,
            }
        })

        return
    }

    const fallback = searchPages.filter((page) => {
        const haystack = `${page.title} ${page.text} ${page.code}`.toLowerCase()
        return queryTerms.some((term) => haystack.includes(term))
    })

    results.value = fallback.slice(0, 50).map((page) => {
        const pageCode = (page.code || '').toLowerCase()
        const hasCodeMatch = queryTerms.some((term) =>
            pageCode.includes(term)
        )

        return {
            url: page.url,
            title: page.title || page.url,
            excerpt: makeExcerpt(page.text || '', query, 180, queryTerms),
            codeExcerpt: hasCodeMatch
                ? makeCodeExcerpt(page.code || '', queryTerms)
                : undefined,
            terms: queryTerms,
        }
    })
}

function scheduleSearch(delay = SEARCH_DEBOUNCE): void {
    if (searchTimer) {
        clearTimeout(searchTimer)
    }

    const query = getQuery()

    if (!query) {
        results.value = []
        return
    }

    searched.value = true

    if (delay <= 0) {
        runSearch()
        return
    }

    searchTimer = setTimeout(() => {
        runSearch()
    }, delay)
}

function updateUrl(): void {
    if (typeof window === 'undefined') {
        return
    }

    const query = getQuery()

    const url = query
        ? `${searchHref.value}?q=${encodeURIComponent(query)}`
        : searchHref.value

    window.history.replaceState(window.history.state, '', url)
}

function scheduleUrlUpdate(): void {
    if (typeof window === 'undefined') {
        return
    }

    if (urlTimer) {
        clearTimeout(urlTimer)
    }

    urlTimer = setTimeout(() => {
        updateUrl()
    }, URL_DEBOUNCE)
}

function onInput(): void {
    searched.value = true
    scheduleSearch()
    scheduleUrlUpdate()
}

function syncFromLocation(): void {
    if (typeof window === 'undefined') {
        return
    }

    const next = new URLSearchParams(window.location.search).get('q') ?? ''

    if (next !== q.value) {
        q.value = next
    }

    if (getQuery()) {
        searched.value = true
        scheduleSearch(0)
    } else {
        results.value = []
        searched.value = false
    }
}

function onNavigate(event: Event): void {
    const detail = (event as CustomEvent<string>).detail
    const next = typeof detail === 'string' ? detail : ''

    if (next !== q.value) {
        q.value = next
    }

    if (getQuery()) {
        searched.value = true
        scheduleSearch(0)
    } else {
        results.value = []
        searched.value = false
    }
}

function submit(): void {
    if (typeof window === 'undefined') {
        return
    }

    if (searchTimer) {
        clearTimeout(searchTimer)
    }

    if (urlTimer) {
        clearTimeout(urlTimer)
    }

    updateUrl()
    searched.value = true
    scheduleSearch(0)
}

onMounted(() => {
    syncFromLocation()

    window.addEventListener('popstate', syncFromLocation)
    window.addEventListener(SEARCH_EVENT, onNavigate)
})

onBeforeUnmount(() => {
    window.removeEventListener('popstate', syncFromLocation)
    window.removeEventListener(SEARCH_EVENT, onNavigate)

    if (searchTimer) {
        clearTimeout(searchTimer)
    }

    if (urlTimer) {
        clearTimeout(urlTimer)
    }
})
</script>

<template>
    <div class="SearchResultsPage">
        <form class="search-form" role="search" @submit.prevent="submit">
            <input
                v-model="q"
                type="search"
                placeholder="Поиск..."
                aria-label="Поиск"
                @input="onInput"
            />
        </form>
        
        <template v-if="searched">
            <p v-if="!getQuery()">Введите запрос.</p>

            <p v-else-if="results.length === 0">
                По запросу «{{ getQuery() }}» ничего не найдено.
            </p>

            <ul v-else class="search-results">
                <li
                    v-for="item in results"
                    :key="normalizeUrl(item.url)"
                    class="result"
                    tabindex="0"
                >
                    <a
                        class="result-link"
                        :href="normalizeUrl(item.url)"
                    >
                        <span
                            class="result-title"
                            v-html="highlightText(item.title, item.terms ?? [])"
                        ></span>
                    </a>

                    <p
                        v-if="item.excerpt"
                        class="result-content"
                        v-html="highlightText(item.excerpt, item.terms ?? [])"
                    ></p>

                    <pre v-if="item.codeExcerpt" class="result-code">
                        <code
                            v-html="highlightText(item.codeExcerpt, item.terms ?? [], true)"
                        ></code>
                    </pre>
                </li>
            </ul>
        </template>
    </div>
</template>

<style scoped>
.SearchResultsPage {
    max-width: 860px;
    margin: 0 auto;
    padding: 32px 24px;
}

.search-form {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.search-form input {
    flex: 1;
    padding: 9px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    outline: none;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.search-form input:focus-visible {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.search-results {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
}

.result {
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    padding: 14px 16px;
    background: var(--vp-c-bg-soft);
    transition:
        border-color 0.18s ease,
        background-color 0.18s ease,
        box-shadow 0.18s ease,
        transform 0.12s ease;
}

.result:hover,
.result:focus-visible,
.result:focus-within {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-mute);
    box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.result-link {
    display: inline-block;
    text-decoration: none;
}

.result-title {
    font-weight: 650;
    font-size: 15px;
    line-height: 1.4;
    color: var(--vp-c-brand-1);
}

.result-content {
    margin: 7px 0 0;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.55;
}

.result-code {
    margin: 10px 0 0;
    padding: 11px 12px;
    border-radius: 10px;
    background: var(--vp-code-block-bg, var(--vp-c-bg-mute));
    overflow-x: auto;
    font-size: 13px;
    line-height: 1.45;
}

.result-code code {
    display: block;
    white-space: pre-wrap;
    font-family: var(
        --vp-font-family-mono,
        ui-monospace,
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        monospace
    );
    color: var(--vp-code-block-color, var(--vp-c-text-1));
}

.search-results :deep(mark) {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    font-weight: 650;
    padding: 0 3px;
    border-radius: 4px;
}

.dark .search-results :deep(mark) {
    background: color-mix(in srgb, var(--vp-c-brand-1) 24%, transparent);
    color: var(--vp-c-brand-1);
}
</style>