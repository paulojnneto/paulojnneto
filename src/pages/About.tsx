import Section from '../components/Section'
import { Text, Stack } from '@chakra-ui/react'

export default function About() {
  return (
    <Section id="about" title="About">
      <Stack gap={3} maxW="3xl">
        <Text>
          Software engineer with 5+ years building web apps. Comfortable with React,
          Node.js, TypeScript, Docker and PostgreSQL. Experienced in QSR products,
          dashboards, and performance optimization.
        </Text>
      </Stack>
    </Section>
  )
}
