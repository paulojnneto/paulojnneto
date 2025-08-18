import { Container, Heading, Stack } from '@chakra-ui/react'
import type { ReactNode } from 'react';

type Props = { id?: string; title?: string; children: ReactNode }

export default function Section({ id, title, children }: Props) {
  return (
    <Container id={id} maxW="6xl" py={{ base: 12, md: 20 }}>
      <Stack gap={8}>
        {title && <Heading size="lg">{title}</Heading>}
        {children}
      </Stack>
    </Container>
  )
}
