import Section from '../components/Section'
import { Button, Input, Stack, Textarea } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Stack as="form" gap={4} maxW="lg" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="you@email.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Tell me about your project..." />
        </FormControl>
        <Button type="submit" colorScheme="brand">Send</Button>
      </Stack>
    </Section>
  )
}
