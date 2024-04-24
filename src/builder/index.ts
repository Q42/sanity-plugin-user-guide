import {FunctionComponent} from 'react'

import {DividerBuilder} from './nodes/divider'
import {MultiPageBuilder} from './nodes/multiPage'
import {PageBuilder} from './nodes/page'

export * from './structure'

export const divider: () => DividerBuilder = () => new DividerBuilder()
export const page: (name: string, content: string | FunctionComponent) => PageBuilder = (
  name,
  content,
) => new PageBuilder(name, content)
export const multiPage: (name: string, pages: PageBuilder[]) => MultiPageBuilder = (name, pages) =>
  new MultiPageBuilder(name, pages)
