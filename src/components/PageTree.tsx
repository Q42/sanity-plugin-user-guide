import {Card, Stack} from '@sanity/ui'
import {FunctionComponent} from 'react'

import type {UserGuideStructure} from '../builder'
import {PageLink} from './PageLink'

type PageTreeProps = {
  structure: UserGuideStructure
  basePage?: string
  activeSlug?: string
}

export const PageTree: FunctionComponent<PageTreeProps> = ({structure, basePage, activeSlug}) => (
  <Stack as="ul" space={1}>
    {structure.map(({node}, index) => {
      switch (node._type) {
        case 'jsxPage':
        case 'markdownPage':
        case 'multiPage':
          return (
            <PageLink
              key={node.slug}
              page={basePage ?? node.slug}
              subPage={basePage ? node.slug : undefined}
              title={node.name}
              selected={node.slug === activeSlug}
              icon={node.icon}
            />
          )
        case 'divider':
          return <Card key={index} borderBottom />
        default:
          return <></>
      }
    })}
  </Stack>
)
