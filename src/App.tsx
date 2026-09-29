import Navbar from './components/Navbar'

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
        <Identity />
        <Systems />
        <Built />
        <Stack />
        <Playground />
        <Contact />
      </main>
    </div>
  )
}

export default App