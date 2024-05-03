import {FunctionComponent} from 'react'

import {slugify} from '../../utils/slugify'
import {UserGuideNodeBuilder} from '../nodeBuilder'
import {UserGuideBaseNode, UserGuideError} from '../structure'

export type BasePage = UserGuideBaseNode & {
  slug: string
  title: string
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
  constructor() {
    super({_type: 'jsxPage'})
  }

  slug(slug: string): PageBuilder {
    this.node.slug = slug
    return this
  }

  title(title: string): PageBuilder {
    this.node.title = title
    return this.node.slug ? this : this.slug(slugify(title))
  }

  markdown(markdown: string): PageBuilder {
    this.node = {...this.node, _type: 'markdownPage', markdown}
    return this
  }

  component(component: FunctionComponent): PageBuilder {
    this.node = {...this.node, _type: 'jsxPage', component}
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

  build(parentSlug?: string): UserGuidePage {
    const {_type, slug, title} = this.node
    const helpUrl =
      'https://github.com/Q42/sanity-plugin-user-guide/tree/main?tab=readme-ov-file#page'

    if (!title || !title.trim()) {
      throw new UserGuideError(`'Page' must have a valid title`, helpUrl)
    }

    if (!slug) {
      throw new UserGuideError(`'Page' must have a slug`, helpUrl)
    }

    if (_type === 'jsxPage') {
      const component = this.node.component
      if (component) {
        return {...this.node, slug, title, component, parentSlug}
      }
    }

    if (_type === 'markdownPage') {
      const markdown = this.node.markdown
      if (markdown) {
        return {...this.node, slug, title, markdown, parentSlug}
      }
    }

    throw new UserGuideError(`'Page' must have a markdown or page component`, helpUrl)
  }
}
