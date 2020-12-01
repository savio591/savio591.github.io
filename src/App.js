import React from "react";

import Header from './components/header'
import ProjectsList from './components/projectsList'

import './styles/main.css'
// Text Fonts: Alfa Slab e Buenard

function App() {
  return(
  <>
  <Header name="SAVIR" />
  <ProjectsList />
  </>
  )
}

export default App