import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Dashboards from './components/Dashboards'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        <Hero />
        <Skills />
        <Projects />
        <Dashboards />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App