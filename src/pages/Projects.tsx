import { SimpleGrid } from '@chakra-ui/react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Kiosk Management Dashboard',
    description: 'Real-time metrics and device management for QSR kiosks.',
    tags: ['React', 'TypeScript', 'Chakra UI', 'WebSocket'],
    repo: 'https://github.com/...',
  },
  {
    title: 'Orders API',
    description: 'Node.js + Prisma API handling high-traffic order flows.',
    tags: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'],
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.map(p => (<ProjectCard key={p.title} {...p} />))}
      </SimpleGrid>
    </Section>
  )
}
