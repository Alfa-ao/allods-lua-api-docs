import { defineConfig } from 'vitepress'

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

        sidebar: [
            /* {
                text: 'Начало работы',
                items: [
                    { text: 'Введение', link: '/guides/introduction' },
                    { text: 'Установка аддонов', link: '/guides/installation' }
                ]
            }, */
            {
                text: 'Lua API',
                items: [
                    /* { text: 'Обзор API', link: '/api/overview' },
                    { text: 'События (Events)', link: '/api/events' },
                    { text: 'Классы и Объекты', link: '/api/classes' },
                    { text: 'UI и Интерфейс', link: '/api/ui' }, */
                    { text: 'Category', collapsed: false, items: [
                        { text: 'Auction', collapsed: true, items: [
                            { text: 'Константы (Const)',       link: '/api/category/auction/constants.auction' },
                            { text: 'Перечисления (Enums)',    link: '/api/category/auction/enums.auction' },
                            { text: 'События (Event)',         link: '/api/category/auction/events.auction' },
                            { text: 'Bid',                     link: '/api/category/auction/function.auction.Bid' },
                            { text: 'Buyout',                  link: '/api/category/auction/function.auction.Buyout' },
                            { text: 'CanCreateForItem',        link: '/api/category/auction/function.auction.CanCreateForItem' },
                            { text: 'CreateForItem',           link: '/api/category/auction/function.auction.CreateForItem' },
                            { text: 'Discard',                 link: '/api/category/auction/function.auction.Discard' },
                            { text: 'GetAuctionInfo',          link: '/api/category/auction/function.auction.GetAuctionInfo' },
                            { text: 'GetAuctions',             link: '/api/category/auction/function.auction.GetAuctions' },
                            { text: 'GetAuctionsCount',        link: '/api/category/auction/function.auction.GetAuctionsCount' },
                            { text: 'GetAuctionsPage',         link: '/api/category/auction/function.auction.GetAuctionsPage' },
                            { text: 'GetAuctionsPageCount',    link: '/api/category/auction/function.auction.GetAuctionsPageCount' },
                            { text: 'GetAuctionState',         link: '/api/category/auction/function.auction.GetAuctionState' },
                            { text: 'GetItemForegroundLevel',  link: '/api/category/auction/function.auction.GetItemForegroundLevel' },
                            { text: 'GetProperties',           link: '/api/category/auction/function.auction.GetProperties' },
                            { text: 'IsCreationInProgress',    link: '/api/category/auction/function.auction.IsCreationInProgress' },
                            { text: 'IsSearchInProgress',      link: '/api/category/auction/function.auction.IsSearchInProgress' },
                            { text: 'IsSearchNameValid',       link: '/api/category/auction/function.auction.IsSearchNameValid' },
                            { text: 'Search',                  link: '/api/category/auction/function.auction.Search' },
                        ] },
                        { text: 'UserMods', link: '/api/category/userMods', collapsed: true, items: [
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