import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <Box as="footer" py="8">
      <Container maxW="6xl">
        <Flex align="center" justify="space-between">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Paulo J. N. Neto. All rights reserved.
          </Text>

          <HStack gap="4">
            <Link
              href="https://github.com/paulojnneto"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/paulojnneto"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
