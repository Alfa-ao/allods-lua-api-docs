import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import sidebar from './../../sidebar.config'
import type { MarkdownRenderer } from 'vitepress'
import container from 'markdown-it-container'

const base = '/allods-lua-api-docs/'

export default defineConfig( {
    sitemap: {
        hostname: `https://alfa-ao.github.io${base}`,
        lastmodDateOnly: false
    },
    markdown: {
        /* container: {
            // @ts-expect-error - customContainers поддерживается VitePress, но отсутствует
            customContainers: {
                success: 'УСПЕШНО'
            }
        } */
        config: (md: MarkdownRenderer) => {
            md.use(container, 'success', {
                render(tokens: any[], idx: number) {
                    const token = tokens[idx]
                    const info = token.info.trim().slice('success'.length).trim()
                    if (token.nesting === 1) {
                        const title = md.renderInline(info || 'УСПЕШНО')
                        return `<div class="success custom-block"><p class="custom-block-title">${title}</p>\n`
                    }
                    return '</div>\n'
                }
            })
        }
    },
    vite: {
        resolve: {
            alias: { // vitepress генераторы Markdown не робят с этим:
                '@': resolve(__dirname, '../../'),
                '@api': resolve(__dirname, '../api/'),
                '@category': resolve(__dirname, '../api/category/'),
            }
        }
    },
    base,
    title: "Allods Online Lua API",
    description: "Современная документация по Lua API для игры Аллоды Онлайн",
    lang: 'ru-RU',
    
    head: [
        ['meta', { name: 'yandex-verification', content: '21833890508c0856' }],
        ['meta', { name: 'google-site-verification', content: 'g3L7ZeF4Q12uQLXbVaYlDeSTpaLpW0bgbPAjm-0_N4I' }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` }],
    ],
    themeConfig: {
        logo: '/logo.png', // docs/public/logo.png
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Сообщить об неточности', link: 'https://github.com/Alfa-ao/allods-lua-api-docs/issues/new' },
            //{ text: 'Руководства', link: '/guides/introduction' },
            //{ text: 'API Справочник', link: '/api/' }
        ],
        
        //sidebar,
        sidebar: [
            {
                text: 'Начало работы',
                items: [
                    { text: 'Введение', link: '/guides/introduction' },
                    { text: 'Установка аддонов', link: '/guides/installation' },
                    { text: 'Alternative Search', link: '/search.md' },
                    { text: 'CHANGELOG', collapsed: true, items: [
                        { text: '18.0.0', link: '/changelog/18.0.0' },
                        { text: '17.0.0', link: '/changelog/17.0.0' },
                        { text: '16.0.0', link: '/changelog/16.0.0' },
                        { text: '15.0.0', link: '/changelog/15.0.0' },
                    ] },
                ]
            },
            ...sidebar
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Alfa-ao/allods-lua-api-docs' }
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск'
                            },
                            modal: {
                                displayDetails: 'Показать подробный список',
                                resetButtonTitle: 'Сбросить поиск',
                                backButtonTitle: 'Закрыть поиск',
                                noResultsText: 'Нет результатов',
                                footer: {
                                    selectText: 'Выбрать',
                                    selectKeyAriaLabel: 'Enter',
                                    navigateText: 'Навигация',
                                    navigateUpKeyAriaLabel: 'Стрелка вверх',
                                    navigateDownKeyAriaLabel: 'Стрелка вниз',
                                    closeText: 'Закрыть',
                                    closeKeyAriaLabel: 'Esc'
                                }
                            }
                        }
                    }
                }
            }
        },
        
        editLink: {
            pattern: 'https://github.com/Alfa-ao/allods-lua-api-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub' 
        },
        
        // Блок "Последнее обновление"
        lastUpdated: {
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'medium'
            }
        },
    }
} )