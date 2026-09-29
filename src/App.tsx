import Navbar from './components/Navbar'

import ScrollReveal from './sections/ScrollReveal'

import Hero from './sections/Hero'
import Identity from './sections/Identity'
import Systems from './sections/Systems'
import Built from './sections/Built'
import Stack from './sections/Stack'
import Playground from './sections/Playground'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal direction="up">
          <Identity />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Systems />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Built />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Stack />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Playground />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  )
}

export default App