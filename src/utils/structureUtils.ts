import {UserGuideStructure} from '../builder'
import {MultiPage} from '../builder/nodes/multiPage'
import {UserGuidePage} from '../builder/nodes/page'

export function getRootPages(structure: UserGuideStructure): (UserGuidePage | MultiPage)[] {
  if (!Array.isArray(structure)) {
    return []
  }

  return structure.reduce<(UserGuidePage | MultiPage)[]>((acc, node) => {
    if (node._type === 'jsxPage' || node._type === 'markdownPage' || node._type === 'multiPage') {
      return [...acc, node]
    }

    return acc
  }, [])
}

export function getContentPages(structure: UserGuideStructure): UserGuidePage[] {
  if (!Array.isArray(structure)) {
    return []
  }

  return structure.reduce<UserGuidePage[]>((acc, node) => {
    if (node._type === 'jsxPage' || node._type === 'markdownPage') {
      return [...acc, node]
    }

    if (node._type === 'multiPage') {
      return [...acc, ...node.pages]
    }

    return acc
  }, [])
}

export function getHref(node: UserGuidePage | MultiPage): string {
  return 'parentSlug' in node ? `/guide/${node.parentSlug}/${node.slug}` : `/guide/${node.slug}`
}
