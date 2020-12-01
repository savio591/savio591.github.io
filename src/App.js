import React, { useState, useEffect } from "react";
import projectsGet from './services/projectsApi'
// Text Fonts: Alfa Slab e Buenard

function App() {

  const [projects, setProjects] = useState([])
  
    useEffect(() => {
      projectsGet.get('').then(response => {
        setProjects(response.data);
      })
    }, [])
  //const projects = [{ "test": "apo" }, { "test": "apods" }, { "test": "apodssa" }]

  return (<><ul>
    {projects.map((project) => (<li>{project.title}</li>))
    }
  </ul>
  </>)

}

export default App