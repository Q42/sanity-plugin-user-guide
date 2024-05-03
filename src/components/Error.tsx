import {Card, Container, Flex, Stack, Text} from '@sanity/ui'
import {FunctionComponent} from 'react'

import {UserGuideError} from '../builder'

type ErrorProps = {
  error: UserGuideError
}

export const Error: FunctionComponent<ErrorProps> = ({error}) => (
  <Card height="fill" tone="critical" padding={4}>
    <Flex height="fill" align="center">
      <Container height="fill" width={2}>
        <Text size={4} weight="bold">
          Encountered an error while reading the user guide structure
        </Text>
        <Card marginTop={4} padding={[3, 3, 4]} tone="critical" radius={2} shadow={2}>
          <Stack space={5}>
            <Stack space={3}>
              <Text size={2}>Error:</Text>
              <Text size={2} style={{color: 'var(--card-badge-critical-fg-color)'}}>
                {error.message}
              </Text>
            </Stack>
            {error.url && (
              <a href={error.url}>
                <Text size={2} weight="bold" style={{color: 'var(--card-link-color)'}}>
                  View documentation
                </Text>
              </a>
            )}
          </Stack>
        </Card>
      </Container>
    </Flex>
  </Card>
)
