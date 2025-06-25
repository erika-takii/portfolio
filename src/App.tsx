import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <ThemeToggle/>
      <Nav />
      <Header />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
