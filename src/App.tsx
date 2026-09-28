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
    <div className="persona-app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

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