export interface SearchPage {
    id: string
    url: string
    title: string
    text: string
    code: string
}

export interface SearchResultItem {
    url: string
    title: string
    excerpt: string
    codeExcerpt?: string
    terms?: string[]
}