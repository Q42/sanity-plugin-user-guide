import {UserGuideNodeBuilder} from './nodeBuilder'
import {Divider} from './nodes/divider'
import {MultiPage} from './nodes/multiPage'
import {UserGuidePage} from './nodes/page'

export type UserGuideNode = Divider | UserGuidePage | MultiPage
export type UserGuideStructure = UserGuideNodeBuilder[]

export function defineUserGuide(structure: UserGuideStructure): UserGuideStructure {
  return structure
}
