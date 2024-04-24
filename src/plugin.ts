import {definePlugin} from 'sanity'

import {UserGuideStructure} from './builder'
import {Tool} from './components/Tool'
import {documentInspector} from './documentInspector'
import {router} from './router'
import {getContentPages} from './utils/structureUtils'

export type UserGuideOptions = {
  userGuideStructure: UserGuideStructure
}
export const userGuidePlugin = definePlugin<UserGuideOptions>((options) => {
  return {
    name: 'sanity-plugin-user-guide',
    tools: [
      {
        title: 'Guide',
        name: 'guide',
        component: () => Tool(options),
        router,
      },
    ],
    document: {
      inspectors: (prev) => [
        ...prev,
        documentInspector(getContentPages(options.userGuideStructure)),
      ],
    },
  }
})
