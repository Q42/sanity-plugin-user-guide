import {FunctionComponent} from 'react'

import {slugify} from '../../utils/slugify'
import {UserGuideNodeBuilder} from '../nodeBuilder'
import {PageBuilder} from './page'

export type MultiPage = {
  _type: 'multiPage'
  pages: PageBuilder[]
  slug: string
  name: string
  icon?: FunctionComponent
}

export class MultiPageBuilder extends UserGuideNodeBuilder<MultiPage> {
  constructor(name: string, pages: PageBuilder[]) {
    const slug = slugify(name)
    pages.forEach((page) => (page.node.parentSlug = slug))
    super({_type: 'multiPage', name, slug, pages})
  }

  slug(slug: string): MultiPageBuilder {
    this.node.slug = slug
    this.node.pages.forEach((page) => (page.node.parentSlug = slug))
    return this
  }

  icon(icon: FunctionComponent): MultiPageBuilder {
    this.node.icon = icon
    return this
  }
}
