import { defineConfig } from 'vitepress'

const base = '/allods-lua-api-docs/'

export default defineConfig( {
    base,
    title: "Allods Online Lua API",
    description: "Современная документация по Lua API для игры Аллоды Онлайн",
    lang: 'ru-RU',
    
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: `${base}/favicon.ico` }]
    ],
    themeConfig: {
        logo: '/logo.png', // docs/public/logo.png
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Руководства', link: '/guides/introduction' },
            { text: 'API Справочник', link: '/api/' }
        ],

        sidebar: [
            {
                text: 'Начало работы',
                items: [
                    { text: 'Введение', link: '/guides/introduction' },
                    { text: 'Установка аддонов', link: '/guides/installation' }
                ]
            },
            {
                text: 'Lua API',
                items: [
                    /* { text: 'Обзор API', link: '/api/overview' },
                    { text: 'События (Events)', link: '/api/events' },
                    { text: 'Классы и Объекты', link: '/api/classes' },
                    { text: 'UI и Интерфейс', link: '/api/ui' }, */
                    { text: 'Category', collapsed: true, items: [
                        { text: 'WString', collapsed: true, items: [
                            { text: 'Compare',   link: '/api/category/WString/WString.Compare' },
                            { text: 'IsContain', link: '/api/category/WString/WString.IsContain' },
                            { text: 'IsEmpty',   link: '/api/category/WString/WString.IsEmpty' },
                            { text: 'ToAbbr',    link: '/api/category/WString/WString.ToAbbr' },
                            { text: 'ToInt',     link: '/api/category/WString/WString.ToInt' },
                            { text: 'ToLower',   link: '/api/category/WString/WString.ToLower' },
                            { text: 'ToUpper',   link: '/api/category/WString/WString.ToUpper' },
                            { text: 'Truncate',  link: '/api/category/WString/WString.Truncate' },
                        ] },
                        { text: 'userMods', link: '/api/category/userMods', collapsed: true, items: [
                            { text: 'FromValuedText',          link: '/api/category/userMods/function.userMods.FromValuedText' },
                            { text: 'FromWString',             link: '/api/category/userMods/function.userMods.FromWString' },
                            { text: 'ToWString',               link: '/api/category/userMods/function.userMods.ToWString' },
                            { text: 'SetAvatarConfigSection',  link: '/api/category/userMods/function.userMods.SetAvatarConfigSection' },
                            { text: 'GetAvatarConfigSection',  link: '/api/category/userMods/function.userMods.GetAvatarConfigSection' },
                            { text: 'SetGlobalConfigSection',  link: '/api/category/userMods/function.userMods.SetGlobalConfigSection' },
                            { text: 'GetGlobalConfigSection',  link: '/api/category/userMods/function.userMods.GetGlobalConfigSection' },
                            { text: 'GetAccountUniqueId',      link: '/api/category/userMods/function.userMods.GetAccountUniqueId' },
                            { text: 'GetResourcePersistentId', link: '/api/category/userMods/function.userMods.GetResourcePersistentId' },
                            { text: 'GetCallStack',            link: '/api/category/userMods/function.userMods.GetCallStack' },
                            { text: 'SendSelfChatMessage',     link: '/api/category/userMods/function.userMods.SendSelfChatMessage' },
                            
                        ] },
                    ] },
                ]
            }
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