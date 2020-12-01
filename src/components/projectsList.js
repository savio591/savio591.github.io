import React, { useState, useEffect } from "react";

import projectsFetch from '../services/projectsApi';

import '../styles/projects.css'

function ProjectsList() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        projectsFetch.get('').then(response => {
            setProjects(response.data);
        })
    }, [])

    return (<><ul className="projectList">
        {projects.map((project) => (
            <div className="projectCard">
                <a key={project.title} href={project.url}>
                    <li className="projectTitle" key={project.title}>
                        {project.title}</li>
                </a>
            </div>)
        )
        }
    </ul>
    </>)
}

export default ProjectsList