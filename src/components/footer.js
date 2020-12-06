import React from "react";
import '../styles/footer.css';
import discordIcon from "../assets/discord.svg";
// import githubIcon from "../assets/github.svg";
// import instagramIcon from "../assets/instagram.svg";
// import linkedinIcon from "../assets/linkedin.svg";
export default function Footer(props) {
    const copyrightText = props.copyrightText

    const [socialData, setSocialData] = useState({})

    useEffect(() => {
        savilFetch.get('social').then(response => {
            setProjects(response.data);
        })
    }, [])
    
    return (
        <footer>
            <div className="socialIcons">
                <ul>
                    <li><a><img srcSet={}></img></a></li>
                </ul>
            </div>
            <h1>{copyrightText}
            </h1>
        </footer>
    )
}