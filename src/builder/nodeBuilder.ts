import {uuid} from '@sanity/uuid'

import {UserGuideNode} from './index'

export type PartialNodeWithType<Node extends UserGuideNode> = Partial<Node> & {_type: Node['_type']}
export type PartialNodeWithTypeAndKey<Node extends UserGuideNode> = Partial<Node> & {
  _type: Node['_type']
  _key: string
}

export abstract class UserGuideNodeBuilder<Node extends UserGuideNode = UserGuideNode> {
  protected node: PartialNodeWithTypeAndKey<Node>

  constructor(node: PartialNodeWithType<Node>) {
    this.node = {...node, _key: uuid()}
  }

  abstract build(): Node
}
