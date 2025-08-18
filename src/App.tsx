import { Stack, Separator } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Home from "@/pages/Home"
import Projects from "@/pages/Projects"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

export default function App() {
  return (
    <Stack
      minH="100dvh"
      separator={<Separator opacity="0.2" />} // substitui o antigo divider={<StackDivider />}
    >
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Stack>
  )
}
