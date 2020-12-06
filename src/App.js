import React from "react";
import './styles/reset.css'
import './styles/main.css';
import Header from './components/header'
import ProjectsList from './components/projectsList'
import Footer from './components/footer'

// Text Fonts: Alfa Slab e Buenard

function App() {
  return (
    <>
      <Header name="Savil Experiments" />
      <ProjectsList name="=Front-End=" />
      <Footer copyrightText="© Savio castelo, 2020" />
    </>
  )
}

export default App