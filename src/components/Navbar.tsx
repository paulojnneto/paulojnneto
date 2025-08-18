import { Box, Container, Flex, HStack, Link, Button, Text } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

export default function Navbar() {
  return (
    <Box as="header" position="sticky" top="0" zIndex="100" backdropFilter="saturate(180%) blur(6px)">
      <Container maxW="6xl" py={3}>
        <Flex align="center" justify="space-between">
          <Text fontWeight="800" fontSize="lg">Paulo José Neves Neto</Text>
          <HStack gap="6">
            <Link href="#projects">Projects</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
            <ColorModeButton />
            <Button asChild size="sm" colorPalette="brand">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
