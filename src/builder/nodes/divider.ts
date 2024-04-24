import {UserGuideNodeBuilder} from '../nodeBuilder'

export type Divider = {_type: 'divider'}

export class DividerBuilder extends UserGuideNodeBuilder<Divider> {
  constructor() {
    super({_type: 'divider'})
  }
}
