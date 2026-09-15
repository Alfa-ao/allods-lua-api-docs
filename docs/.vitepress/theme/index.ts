import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SidebarAutoScroll from './SidebarAutoScroll.vue'
import './custom.css'
import type { EnhanceAppContext } from 'vitepress'

export default {
    extends: DefaultTheme,
    Layout: () => h( DefaultTheme.Layout, null, {
        'layout-bottom': () => h( SidebarAutoScroll )
    } ),
    enhanceApp({ app }: EnhanceAppContext) {
        if (typeof window !== 'undefined') {
            if (!(window as any).__vpSearchSelectionFix) {
                (window as any).__vpSearchSelectionFix = true;

                const patchSearchInputs = () => {
                    const inputs = document.querySelectorAll<HTMLInputElement>(
                        '.VPLocalSearchBox .search-input, .DocSearch-Input, input[type="search"]'
                    );
                    
                    inputs.forEach(input => {
                        if ((input as any).__vpPatchApplied) return;
                        (input as any).__vpPatchApplied = true;
                        
                        const originalSelect = input.select.bind(input);
                        let hasBeenSelected = false;

                        
                        input.select = () => {
                            if (!hasBeenSelected) {
                                hasBeenSelected = true;
                                originalSelect();
                            }
                        };
                        
                        input.addEventListener('blur', () => {
                            hasBeenSelected = false;
                        });
                    });
                };

                patchSearchInputs();

                const observer = new MutationObserver(patchSearchInputs);
                if (document.body) {
                    observer.observe(document.body, { childList: true, subtree: true });
                } else {
                    document.addEventListener('DOMContentLoaded', () => {
                        observer.observe(document.body!, { childList: true, subtree: true });
                    });
                }
            }
        }
    }
};
