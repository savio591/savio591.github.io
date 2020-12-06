import React, { useState, useEffect } from "react";

import social from '../assets/social_media.json'

// import savilFetch from '../services/savilApi'

import '../styles/footer.css';

export default function Footer(props) {
    const copyrightText = props.copyrightText


    return (
        <footer>
            <div className="socialIcons">
                <ul>
                    <li><a href={social.instagram.url}><img srcSet={social.instagram.icon}></img></a></li>
                </ul>
            </div>
            <h1>{copyrightText}
            </h1>
        </footer>
    )
}