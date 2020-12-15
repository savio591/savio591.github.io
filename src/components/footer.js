import React, { useState, useEffect } from "react";

import savilFetch from '../services/savilApi'

import '../styles/footer.css';

export default function Footer(props) {
    const copyrightText = props.copyrightText;

    const [social, setSocial] = useState([])

    useEffect(() => {
        savilFetch.get('social_media').then(response => {
            setSocial(response.data);
        })
    }, [])

    return (
        <>
        <footer>
            <div className="socialIcons">
                <ul>
                {social.map(social => (
                    <li key={social.title}><a href={social.url}><img srcSet={social.icon}></img></a></li>
                ))}
                    
                </ul>
            </div>
            <h1>{copyrightText}
            </h1>
        </footer>
        </>
    )
}