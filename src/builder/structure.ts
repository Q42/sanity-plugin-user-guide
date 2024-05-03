import {UserGuideNodeBuilder} from './nodeBuilder'
import {Divider} from './nodes/divider'
import {MultiPage} from './nodes/multiPage'
import {UserGuidePage} from './nodes/page'

export class UserGuideError extends Error {
  url?: string

  constructor(msg: string, url?: string) {
    super(msg)
    this.url = url
  }
}

export type UserGuideBaseNode = {_type: string; _key: string}
export type UserGuideNode = Divider | UserGuidePage | MultiPage
export type UserGuideStructure = UserGuideNode[] | UserGuideError
export type UserGuideStructureBuilder = UserGuideNodeBuilder[]

export function defineUserGuide(structure: UserGuideStructureBuilder): UserGuideStructure {
  try {
    return structure.map((builder) => builder.build())
  } catch (error) {
    if (error instanceof Error) {
      return error
    }

    return new Error('An unknown error occurred')
  }
}
