import {DividerBuilder} from './nodes/divider'
import {MultiPageBuilder} from './nodes/multiPage'
import {PageBuilder} from './nodes/page'

export * from './structure'

export const divider: () => DividerBuilder = () => new DividerBuilder()
export const page: () => PageBuilder = () => new PageBuilder()
export const multiPage: () => MultiPageBuilder = () => new MultiPageBuilder()
