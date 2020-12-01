import React, { useState, useEffect } from "react";

import projectsFetch from '../services/projectsApi';

function ProjectsList() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        projectsFetch.get('').then(response => {
            setProjects(response.data);
        })
    }, [])

    return (<><ul>
        {projects.map((project) => (
            <a key={project.title} href={project.url}><li key={project.title}>{project.title}</li></a>
        )
        )
        }
    </ul>
    </>)
}

export default ProjectsList