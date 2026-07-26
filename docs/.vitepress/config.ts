import { defineConfig } from 'vitepress'
import sidebar from './../../sidebar.config'

const base = '/allods-lua-api-docs/'

export default defineConfig( {
    base,
    title: "Allods Online Lua API",
    description: "Современная документация по Lua API для игры Аллоды Онлайн",
    lang: 'ru-RU',
    
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` }],
        // ['style', {}, `
        //     :root {
        //         --vp-sidebar-width: 320px; /* Увеличиваем ширину сайдбара */
        //     }
        //     .VPSidebar {
        //         padding-left: 32px !important;
        //         padding-right: 32px !important;
        //     }`
        // ]
    ],
    themeConfig: {
        logo: '/logo.png', // docs/public/logo.png
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Руководства', link: '/guides/introduction' },
            { text: 'API Справочник', link: '/api/' }
        ],
        
        //sidebar,
        sidebar: [
            {
                text: 'Начало работы',
                items: [
                    { text: 'Введение', link: '/guides/introduction' },
                    { text: 'Установка аддонов', link: '/guides/installation' }
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