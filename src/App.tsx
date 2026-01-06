import { Navbar, Welcome, Dock } from '#components/index'
import { Draggable } from 'gsap/all'
import { Terminal } from '#windows/index'
import gsap from 'gsap'


gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </>
  )
}

export default App
