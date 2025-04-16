import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import './styles/global.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <div className="main-container">
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
      </div>
        </>
      )}
      </div>
  )
}

export default App
