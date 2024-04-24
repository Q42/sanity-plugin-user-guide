import {HelpCircleIcon} from '@sanity/icons'
import {createElement} from 'react'
import {defineDocumentInspector} from 'sanity'

import {UserGuidePage} from './builder/nodes/page'
import {Inspector} from './components/Inspector'

export const documentInspector = (pages: UserGuidePage[]) =>
  defineDocumentInspector({
    name: 'userGuide',
    useMenuItem: ({documentId, documentType}) => ({
      icon: HelpCircleIcon,
      title: 'User Guide',
      hidden: !getDocumentPage(documentId, documentType, pages),
      hotkeys: ['ctrl+shift+h'],
    }),
    component: (props) => createElement(Inspector, {pages, ...props}),
  })

export function getDocumentPage(
  documentId: string,
  documentType: string,
  pages: UserGuidePage[],
): UserGuidePage | undefined {
  return pages.find((page) => {
    if (page.documentId === documentId) {
      return true
    }

    if (Array.isArray(page.documentId) && page.documentId.some((id) => id === documentId)) {
      return true
    }

    if (page.documentType === documentType) {
      return true
    }

    if (
      Array.isArray(page.documentType) &&
      page.documentType.some((type) => type === documentType)
    ) {
      return true
    }

    return false
  })
}
