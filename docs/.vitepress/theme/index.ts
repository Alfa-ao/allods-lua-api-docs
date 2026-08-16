import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SidebarAutoScroll from './SidebarAutoScroll.vue'
import '/.vitepress/theme/custom.css'

export default {
    extends: DefaultTheme,

    Layout: () =>
        h( DefaultTheme.Layout, null, {
            'layout-bottom': () => h( SidebarAutoScroll )
        } )
}