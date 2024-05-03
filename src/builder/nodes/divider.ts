import {UserGuideNodeBuilder} from '../nodeBuilder'
import {UserGuideBaseNode} from '../structure'

export type Divider = UserGuideBaseNode & {_type: 'divider'}

export class DividerBuilder extends UserGuideNodeBuilder<Divider> {
  constructor() {
    super({_type: 'divider'})
  }

  build(): Divider {
    return this.node
  }
}
