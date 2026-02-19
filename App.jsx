import React, { Suspense } from 'react'
import './style.css'

const Title = React.lazy(() => import('./components/Title'))
const AboutMe = React.lazy(() => import('./sections/AboutMe'))
const Skills = React.lazy(() => import('./sections/Skills'))
const Contact = React.lazy(() => import('./sections/Contact'))

function App() {
  return (
    <div className="page">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Title />
        <div className="cards-row">
          <AboutMe />
          <Skills />
          <Contact />
        </div>
      </Suspense>
    </div>
  )
}

export default App
