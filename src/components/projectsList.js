import React, { useState, useEffect } from "react";

import savilFetch from '../services/savilApi';

import '../styles/projects.css'

function ProjectsList(props) {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        savilFetch.get('projects').then(response => {
            setProjects(response.data);
        })
    }, [])

    const name = props.name;
    return (
        <section className="containerProjects">
            <h1 className="projectsTitle">{name}</h1>
            <ul className="projectList">
                {projects.map((project) => (
                    <a className="projectCard" key={project.title} href={project.url}>
                        <li className="projectTitle" key={project.title}>
                            {project.title}
                        </li>
                    </a>
                ))}
            </ul>
        </section>)
}

export default ProjectsList