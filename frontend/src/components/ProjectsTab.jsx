import { useState} from "react"
import { ProjectCard } from "./ProjectCard"
import shackleBreakerImage from '../assets/shackle-breaker.jpg';
import authenticatorImage from '../assets/authenticator.png';
import reviveImage from '../assets/revive-logo.png';

export function ProjectsTab(props){
    const {projectsRef} = props;
    const [projects, setProjects] = useState(
        [
            {
                title: 'Authenticator App',
                link: 'https://authenticator-app-frontend.onrender.com/',
                description: 'A MERN stack application that allows for login, and authentication, using JWT and a custom API.',
                tumbnailURL: authenticatorImage,
            },
            {
                title: 'Revive Church Website',
                link: 'https://reviveforestlake.church/',
                description: 'A website I developed that is currently used by Revive Church Forest Lake MN.',
                tumbnailURL: reviveImage,

            },
            {
                title: 'Shackle Breaker',
                link: 'https://shackle-breaker-frontend.onrender.com',
                description: 'An RPG adventure game. Register to play now!',
                tumbnailURL: shackleBreakerImage,
            },
        ]
       
    )

    return(
        <>
         <h2 ref={projectsRef} className='tab-header' >Projects</h2>
         <div className='tab project-tab'>
            {projects.map((project, key)=>{
                return(
                    <ProjectCard project={project} key={key}/>
                )   
            })}
        </div>
        </>
    )
}