<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

function getActiveSidebarItem(): HTMLElement | null {
    const items = Array.from(
        document.querySelectorAll<HTMLElement>(
            '.VPSidebar .VPSidebarItem.is-active'
        )
    )
    if ( !items.length ) return null

    // Берем самый вложенный активный пункт
    const activeItem = items[ items.length - 1 ]
    // Лучше скроллить не весь блок, а его видимую строку
    return activeItem.querySelector<HTMLElement>( ':scope > .item' ) ?? activeItem
}

function isElementHidden( el: HTMLElement ): boolean {
    return el.getClientRects().length === 0
}

function expandCollapsedAncestors( el: HTMLElement ) {
    let parent = el.parentElement
    while ( parent ) {
        const collapsed = parent.closest( '.VPSidebarItem.collapsed' )
        if ( !collapsed ) break

        const caret = collapsed.querySelector<HTMLElement>(
            ':scope > .item > .caret'
        )
        if ( !caret ) break

        // Эмулируем клик по стрелке, чтобы VitePress раскрыл секцию
        caret.click()
        parent = collapsed.parentElement
    }
}

function collapseAllSidebarItems() {
    // Находим все раскрытые элементы сайдбара
    const expandedItems = document.querySelectorAll<HTMLElement>(
        '.VPSidebar .VPSidebarItem:not(.collapsed)'
    )
    
    expandedItems.forEach( item => {
        const caret = item.querySelector<HTMLElement>( ':scope > .item > .caret' )
        if ( caret ) {
            // Кликом сворачиваем их
            caret.click()
        }
    } )
}

function isHomePage(): boolean {
    const path = route.path
    // Проверяем основные варианты пути для главной страницы
    return path === '/allods-lua-api-docs/' 
        || path === '/allods-lua-api-docs/index.html' 
        || path === '/allods-lua-api-docs/index.md' 
        || path === '/allods-lua-api-docs/index'
}

function scrollSidebarToActive() {
    nextTick( () => {
        // Если мы на главной странице, сворачиваем всё и выходим
        if ( isHomePage() ) {
            collapseAllSidebarItems()
            return
        }

        const el = getActiveSidebarItem()
        if ( !el ) return

        // Если активный пункт внутри свернутой секции, сначала раскрываем
        if ( isElementHidden( el ) ) {
            expandCollapsedAncestors( el )
            // Даём время на раскрытие
            setTimeout( () => {
                scrollToCenter( el )
            }, 50 )
        } else {
            scrollToCenter( el )
        }
    } )
}

function scrollToCenter( el: HTMLElement ) {
    // Находим скроллируемый контейнер сайдбара
    const sidebar = el.closest( '.VPSidebar' )
    if ( !sidebar ) return

    const sidebarHeight = sidebar.clientHeight
    const elementTop = el.offsetTop
    const elementHeight = el.offsetHeight

    // Желаемая позиция для центрирования
    const desiredScrollTop = elementTop - ( sidebarHeight / 2 ) + ( elementHeight / 2 )
    
    // Проверяем, можно ли скроллить
    const maxScrollTop = sidebar.scrollHeight - sidebar.clientHeight

    // Если контент помещается целиком, не скроллим
    if ( maxScrollTop <= 0 ) return

    // Ограничиваем scrollTop допустимым диапазоном
    const finalScrollTop = Math.max( 0, Math.min( desiredScrollTop, maxScrollTop ) )
    
    // Применяем скролл
    sidebar.scrollTo( { top: finalScrollTop, behavior: 'smooth' } )
}

onMounted( () => {
    scrollSidebarToActive()
} )

watch(
    () => route.path,
    () => { scrollSidebarToActive() }
)
</script>

<template>
    <span style="display: none" aria-hidden="true" />
</template>