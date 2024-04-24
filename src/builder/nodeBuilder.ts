import {UserGuideNode} from './index'
export abstract class UserGuideNodeBuilder<Node extends UserGuideNode = UserGuideNode> {
  node: Node

  constructor(initialValue: Node) {
    this.node = initialValue
  }
}
