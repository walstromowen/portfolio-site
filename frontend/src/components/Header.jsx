

export function Header(props){
    const {aboutRef, projectsRef, skillsRef, contactRef} = props;
    return(
        <header>
            <div className='header-container'>
                <h2 className='navigation-header'>Full Stack Developer</h2>
                <ul className='navigation-container'>
                    <li onClick={()=>{aboutRef.current?.scrollIntoView({ behavior: 'smooth' });}}>About</li>
                    <li onClick={()=>{projectsRef.current?.scrollIntoView({ behavior: 'smooth' });}}>Projects</li>
                    <li onClick={()=>{skillsRef.current?.scrollIntoView({ behavior: 'smooth' });}}>Skills</li>
                    <li onClick={()=>{contactRef.current?.scrollIntoView({ behavior: 'smooth' });}}>Contact</li>
                    
                </ul>
            </div>
        </header>
    )
}