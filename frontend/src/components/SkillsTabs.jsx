import { useState } from "react"
import chromeImage from '../assets/chrome.png';
import css3Image from '../assets/css3.png';
import githubImage from '../assets/github.png';
import HTML5Image from '../assets/HTML5.png';
import javaImage from '../assets/java.png';
import javascriptImage from '../assets/javascript.png';
import mongodbImage from '../assets/mongodb.jpg';
import nodeImage from '../assets/node.png';
import pythonImage from '../assets/python.png';
import reactImage from '../assets/react.png';
import sqlImage from '../assets/sql.png';
import wordpressImage from '../assets/wordpress.png';
import expressImage from '../assets/express.png';
import vscImage from '../assets/vsc.png';
import mongooseImage from '../assets/mongoose.jpg';


export function SkillsTab(props){
    const {skillsRef} = props;
    const [skills, setSkills] = useState([
        {name: 'MongoDb', image: mongodbImage},
        {name: 'Express', image: expressImage},
        {name: 'React', image: reactImage},
        {name: 'Node', image: nodeImage},
        {name: 'Javascript', image: javascriptImage},
        {name: 'HTML', image: HTML5Image},
        {name: 'CSS', image: css3Image},
        {name: 'Github', image: githubImage},
        {name: 'Chrome Dev Tools', image: chromeImage},
        {name: 'Wordpress', image: wordpressImage},
        {name: 'Java', image: javaImage},
        {name: 'Python', image: pythonImage},
        {name: 'SQL', image: sqlImage},
        {name: 'Visual Studio Code', image: vscImage},
        {name: 'Mongoose', image: mongooseImage},
    ])

    return(
        <>
            <h2 ref={skillsRef} className='tab-header' >Skills</h2>
            <div className='tab skills-tab'>
                {skills.map((skills, key)=>{
                    return (
                        <div className='skill-card'>
                            <div className="skill-card-inner">
                                <div className="skill-card-front">
                                    <img className='skill-card-image' src = {skills.image}/>
                                </div>
                                <div className="skill-card-back">
                                    <h6 className='skill-card-header'>{skills.name}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}