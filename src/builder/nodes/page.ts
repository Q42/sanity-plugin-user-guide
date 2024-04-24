import {FunctionComponent} from 'react'

import {slugify} from '../../utils/slugify'
import {UserGuideNodeBuilder} from '../nodeBuilder'

export type BasePage = {
  slug: string
  name: string
  documentType?: string | string[]
  documentId?: string | string[]
  parentSlug?: string
  icon?: FunctionComponent
}

export type JsxPage = BasePage & {
  _type: 'jsxPage'
  component: FunctionComponent
}

export type MarkdownPage = BasePage & {
  _type: 'markdownPage'
  markdown: string
}

export type UserGuidePage = JsxPage | MarkdownPage

export class PageBuilder extends UserGuideNodeBuilder<JsxPage | MarkdownPage> {
  constructor(name: string, page: string | FunctionComponent) {
    const slug = slugify(name)
    if (typeof page === 'string') {
      super({_type: 'markdownPage', name, slug, markdown: page})
    } else {
      super({_type: 'jsxPage', name, slug, component: page})
    }
  }

  slug(slug: string): PageBuilder {
    this.node.slug = slug
    return this
  }

  icon(icon: FunctionComponent): PageBuilder {
    this.node.icon = icon
    return this
  }
  documentType(documentType: string | string[]): PageBuilder {
    this.node.documentType = documentType
    return this
  }

  documentId(documentId: string | string[]): PageBuilder {
    this.node.documentId = documentId
    return this
  }
}
