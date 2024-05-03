import {FunctionComponent} from 'react'

import {slugify} from '../../utils/slugify'
import {UserGuideNodeBuilder} from '../nodeBuilder'
import {UserGuideBaseNode, UserGuideError} from '../structure'
import {PageBuilder, UserGuidePage} from './page'

export type MultiPage = UserGuideBaseNode & {
  _type: 'multiPage'
  pages: UserGuidePage[]
  slug: string
  title: string
  icon?: FunctionComponent
}

export class MultiPageBuilder extends UserGuideNodeBuilder<MultiPage> {
  private pageBuilders: PageBuilder[] = []

  constructor() {
    super({_type: 'multiPage'})
  }

  title(title: string): MultiPageBuilder {
    this.node.title = title
    return this.node.slug ? this : this.slug(slugify(title))
  }

  pages(pages: PageBuilder[]): MultiPageBuilder {
    this.pageBuilders = pages
    return this
  }

  slug(slug: string): MultiPageBuilder {
    this.node.slug = slug
    return this
  }

  icon(icon: FunctionComponent): MultiPageBuilder {
    this.node.icon = icon
    return this
  }

  build(): MultiPage {
    const {slug, title} = this.node
    const helpUrl =
      'https://github.com/Q42/sanity-plugin-user-guide/tree/main?tab=readme-ov-file#multi-page'

    if (!this.pageBuilders || !this.pageBuilders.length) {
      throw new UserGuideError(`'MultiPage' must have at least one page`, helpUrl)
    }

    if (!title || !title.trim()) {
      throw new UserGuideError(`'MultiPage' must have a valid title`, helpUrl)
    }

    if (!slug) {
      throw new UserGuideError(`'MultiPage' must have a slug`, helpUrl)
    }

    const pages = this.pageBuilders.map((pageBuilder) => pageBuilder.build())

    return {
      ...this.node,
      pages,
      slug,
      title,
    }
  }
}
