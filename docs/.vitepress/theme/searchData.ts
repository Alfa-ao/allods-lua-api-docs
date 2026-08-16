import type { SearchPage } from './types/search'

// @ts-ignore
// VitePress data loader module is resolved by VitePress/Vite, not plain TS import.
import { data } from './searchIndex.data'

export const searchPages = data as SearchPage[]