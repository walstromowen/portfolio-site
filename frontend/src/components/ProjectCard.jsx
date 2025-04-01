

export function ProjectCard(props){
    const {project} = props;
    return(
        <a href={project.link}>
            <div className='project-card'>
                <img className='project-image' src={project.tumbnailURL}/>
                <div className='project-card-content-container'>
                <h4 className='project-card-header'>{project.title}</h4>
                    <p>{project.description}</p>
                </div>
            </div>
        </a>
    )
}