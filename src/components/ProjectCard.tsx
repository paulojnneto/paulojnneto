import { Card, Heading, HStack, Link, Stack, Badge } from "@chakra-ui/react"

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
}

export default function ProjectCard(p: Project) {
  return (
    <Card.Root _hover={{ transform: "translateY(-4px)" }} transition="150ms ease">
      <Card.Body>
        <Stack gap="3">
          <Heading size="md">
            {p.href ? (
              <Link href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </Link>
            ) : (
              p.title
            )}
          </Heading>

          <p>{p.description}</p>

          <HStack gap="2" flexWrap="wrap">
            {p.tags.map((t) => (
              <Badge key={t} size="sm" variant="subtle">{t}</Badge>
            ))}
          </HStack>

          {p.repo && (
            <Link href={p.repo} target="_blank" rel="noreferrer" fontWeight="semibold">
              View repository →
            </Link>
          )}
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}
