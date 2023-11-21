
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero }  from './components/Hero'
import { Project } from './components/Project'
import { Service } from './components/Service'
import { Skills } from './components/Skills'

function App() {

  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Contact />
    </main>
    
  )
}

export default App
