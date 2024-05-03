import {Box, Card, Container, Flex, Text} from '@sanity/ui'
import {FunctionComponent, useMemo} from 'react'
import {useRouterState} from 'sanity/router'

import {UserGuideStructure} from '../builder'
import type {UserGuideState} from '../router'
import {getRootPages} from '../utils/structureUtils'
import {Error} from './Error'
import {MultiPage} from './MultiPage'
import {Page} from './Page'
import {PageTree} from './PageTree'

type ToolRootProps = {
  userGuideStructure: UserGuideStructure
}

export const Tool: FunctionComponent<ToolRootProps> = ({userGuideStructure}) => {
  const pages = useMemo(() => getRootPages(userGuideStructure), [userGuideStructure])
  const {page, subPage} = useRouterState<UserGuideState>((state) => state as UserGuideState)
  const currentPage = useMemo(() => pages.find((p) => p.slug === page), [page, pages])
  const currentSubPageIndex = useMemo(
    () =>
      currentPage && 'pages' in currentPage
        ? currentPage.pages.findIndex((p) => p.slug === subPage)
        : -1,
    [currentPage, subPage],
  )

  if (!Array.isArray(userGuideStructure)) {
    return <Error error={userGuideStructure} />
  }

  return (
    <Flex height="fill" align="flex-start">
      {/* Page tree pane */}
      <Container height="fill" width={0} overflow="auto">
        <Card height="fill" paddingX={3} borderRight>
          <Box padding={2} paddingTop={5} marginBottom={2}>
            <Text size={1} weight="bold" muted>
              Guide
            </Text>
          </Box>
          <PageTree structure={userGuideStructure} activeSlug={page} />
        </Card>
      </Container>

      {/* Sub pages pane */}
      {currentPage && currentPage._type === 'multiPage' && (
        <Container height="fill" width={0} overflow="auto">
          <Card height="fill" paddingX={3} borderRight>
            <Box padding={2} paddingTop={5} marginBottom={2}>
              <Text size={1} weight="bold" muted>
                {currentPage.title}
              </Text>
            </Box>
            <PageTree structure={currentPage.pages} basePage={page} activeSlug={subPage} />
          </Card>
        </Container>
      )}

      {/* Content pane */}
      <Container height="fill" width={20} overflow="auto">
        <Flex padding={4} direction="column" align="center">
          <Container width={2}>
            {currentPage && currentPage._type !== 'multiPage' && <Page page={currentPage} />}
            {currentPage && currentPage._type === 'multiPage' && currentSubPageIndex >= 0 && (
              <MultiPage
                slug={currentPage.slug}
                currentPage={currentPage.pages[currentSubPageIndex]}
                previousPage={currentPage.pages[currentSubPageIndex - 1]}
                nextPage={currentPage.pages[currentSubPageIndex + 1]}
              />
            )}
          </Container>
        </Flex>
      </Container>
    </Flex>
  )
}
