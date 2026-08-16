<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRouter, withBase } from 'vitepress'

const SEARCH_EVENT = 'vp-search-page:navigate'

const { site } = useData()
const router = useRouter()

const value = ref('')

const isCleanUrls = computed( () =>
    Boolean( ( site.value as { cleanUrls?: boolean } ).cleanUrls )
)

const searchHref = computed( () =>
    withBase( isCleanUrls.value ? '/search' : '/search.html' )
)

function submit(): void
{
    const q = value.value.trim()
    const url = `${searchHref.value}?q=${encodeURIComponent( q )}`

    if ( typeof window === 'undefined' )
    {
        return
    }

    const currentPath = window.location.pathname.replace( /\/$/, '' )
    const targetPath = new URL(
        searchHref.value,
        window.location.origin
    ).pathname.replace( /\/$/, '' )

    if ( currentPath === targetPath )
    {
        window.history.pushState( null, '', url )
        window.dispatchEvent( new CustomEvent<string>( SEARCH_EVENT, { detail: q } ) )
    } else {
        router.go( url )
        window.dispatchEvent( new CustomEvent<string>( SEARCH_EVENT, { detail: q } ) )
    }
}
</script>

<template>
    <form class="SearchBox" role="search" @submit.prevent="submit">
        <input
            v-model="value"
            type="search"
            placeholder="Поиск..."
            aria-label="Поиск"
        />
    </form>
</template>

<style scoped>
.SearchBox {
    margin-left: 8px;
}

.SearchBox input {
    width: 220px;
    padding: 5px 10px;
    border: 1px solid var( --vp-c-divider );
    border-radius: 8px;
    background: var( --vp-c-bg-soft );
    color: var( --vp-c-text-1 );
}

@media ( max-width: 768px ) {
    .SearchBox input {
        width: 140px;
    }
}
</style>