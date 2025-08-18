import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as="section" pt={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Stack gap={6} maxW="3xl">
          <Heading size="2xl">Hi, I’m Paulo — Full-Stack Engineer</Heading>
          <Text fontSize="lg" opacity={0.9}>
            I build fast, reliable web apps with React, Node.js and TypeScript.
            Here you can find my work, experience and how to reach me.
          </Text>
          <Stack direction="row">
            <Button asChild size="lg" colorScheme="brand">
              <a href="#projects">See projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact me</a>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
