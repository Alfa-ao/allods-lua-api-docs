import { createContentLoader } from 'vitepress'
import he from 'he'
import type { SearchPage } from './types/search'

const EXCLUDED_URL = /\/(search|404)(\.html)?$/

function decodeEntitiesCore(text: string): string {
    let decoded = text

    try {
        decoded = he.decode(decoded, { strict: false })
    } catch {
        decoded = decoded
            .replace(/&nbsp;/gi, ' ')
            .replace(/&amp;/gi, '&')
            .replace(/&lt;/gi, '<')
            .replace(/&gt;/gi, '>')
            .replace(/&quot;/gi, '"')
            .replace(/&#39;/gi, "'")
    }

    return decoded
        .replace(/&ZeroWidthSpace;/gi, '')
        .replace(/[\u200B\u200C\u200D\uFEFF]/g, '')
        .replace(/\u00A0/g, ' ')
}

function decodeText(text: string): string {
    return decodeEntitiesCore(text).trim()
}

function decodeCodeText(text: string): string {
    return decodeEntitiesCore(text).replace(/\r/g, '')
}

function stripHtml(html = ''): string {
    const cleaned = html
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')

    return decodeText(cleaned)
        .replace(/\s+/g, ' ')
        .trim()
}

function cleanCodeFragment(fragment: string): string {
    const text = fragment
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<[^>]+>/g, '')

    return decodeCodeText(text)
        .replace(/\t/g, '  ')
        .replace(/\n{3,}/g, '\n\n')
        .trim()
}

function extractCode(html = ''): string {
    const blocks: string[] = []
    const codeRegex = /<code[^>]*>([\s\S]*?)<\/code>/gi
    let match: RegExpExecArray | null

    while ((match = codeRegex.exec(html)) !== null) {
        const code = cleanCodeFragment(match[1])

        if (code) {
            blocks.push(code)
        }
    }

    return blocks.join('\n\n').slice(0, 50000)
}

function getTitle(page: {
    frontmatter?: Record<string, any>
    html?: string
    url: string
}): string {
    if (page.frontmatter?.title) {
        return decodeText(String(page.frontmatter.title))
    }

    const html = page.html ?? ''

    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
    if (h1) {
        return stripHtml(h1[1])
    }

    const h2 = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)
    if (h2) {
        return stripHtml(h2[1])
    }

    return page.url
}

export default createContentLoader(
    ['**/*.md', '!**/node_modules/**', '!**/.vitepress/**'],
    {
        render: true,
        transform: (pages): SearchPage[] => {
            return pages
                .filter((page) => {
                    if (page.frontmatter?.search === false) {
                        return false
                    }

                    return !EXCLUDED_URL.test(page.url)
                })
                .map((page) => {
                    const html = page.html ?? ''
                    const text = stripHtml(html).slice(0, 200000)
                    const code = extractCode(html)

                    return {
                        id: page.url,
                        url: page.url,
                        title: getTitle(page),
                        text,
                        code,
                    }
                })
                .filter((page) => Boolean(page.title || page.text || page.code))
        },
    }
)