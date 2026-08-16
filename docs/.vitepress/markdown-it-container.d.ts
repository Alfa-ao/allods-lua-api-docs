declare module 'markdown-it-container' {
    import type { MarkdownRenderer } from 'vitepress'

    interface ContainerOptions {
        render?: (tokens: any[], idx: number) => string
        marker?: string
        validate?: (params: string) => boolean
    }

    function container(
        md: MarkdownRenderer,
        name: string,
        options?: ContainerOptions
    ): void

    export default container
}