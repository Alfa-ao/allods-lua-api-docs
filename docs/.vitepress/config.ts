import { defineConfig } from 'vitepress'

export default defineConfig( {
    title: "Allods Online Lua API",
    description: "Современная документация по Lua API для игры Аллоды Онлайн",
    lang: 'ru-RU',
    
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
                    { text: 'Обзор API', link: '/api/overview' },
                    { text: 'События (Events)', link: '/api/events' },
                    { text: 'Классы и Объекты', link: '/api/classes' },
                    { text: 'UI и Интерфейс', link: '/api/ui' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Alfa-ao/allods-lua-api-docs' }
        ],

        search: {
            provider: 'local' // Встроенный поиск по документации
        }
    }
} )