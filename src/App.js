import React, { useState } from 'react'
import "./App.css"
import About from './components/container/About/About'
import Contact from './components/container/Contact/Contact'
import Footer from './components/container/Footer/Footer'
import Home from './components/container/Home/Home'
import Portfolio from './components/container/Portfolio/Portfolio'
import Skills from './components/container/Skills/Skills'
import Navbar from './components/Navbar/Navbar'
import { useGlobalStates } from './components/utils/global.context'

const App = () => {
  const {state}=useGlobalStates()

  return (
      <div className={state.dark ? 'bgWhite' : 'bgDark'}>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
