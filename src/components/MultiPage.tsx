import {ChevronLeftIcon, ChevronRightIcon} from '@sanity/icons'
import {Button, Card, Flex} from '@sanity/ui'
import {FunctionComponent} from 'react'
import {StateLink} from 'sanity/router'

import {UserGuidePage} from '../builder/nodes/page'
import {Page} from './Page'

export type MultiPageProps = {
  slug: string
  currentPage: UserGuidePage
  previousPage?: UserGuidePage
  nextPage?: UserGuidePage
}
export const MultiPage: FunctionComponent<MultiPageProps> = ({
  slug,
  currentPage,
  previousPage,
  nextPage,
}) => {
  return (
    <>
      <Page page={currentPage} />
      <Flex paddingY={4} justify="space-between" wrap="wrap-reverse" gap={4}>
        {previousPage ? (
          <StateLink
            state={{
              page: slug,
              subPage: previousPage.slug,
            }}
          >
            <Button
              text={previousPage.name}
              fontSize={2}
              paddingY={3}
              paddingX={5}
              mode="ghost"
              icon={ChevronLeftIcon}
              style={{cursor: 'pointer'}}
            />
          </StateLink>
        ) : (
          <Card />
        )}
        {nextPage && (
          <StateLink
            state={{
              page: slug,
              subPage: nextPage.slug,
            }}
          >
            <Button
              text={nextPage.name}
              fontSize={2}
              paddingY={3}
              paddingX={5}
              iconRight={ChevronRightIcon}
              style={{cursor: 'pointer'}}
            />
          </StateLink>
        )}
      </Flex>
    </>
  )
}
