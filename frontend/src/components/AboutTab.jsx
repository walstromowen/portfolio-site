import profileImage from '../assets/profile.jpg';
import resume from '../assets/resume.pdf';

export function AboutTab(props){
    const {aboutRef} = props;

    return(
        <section>
            <div ref={aboutRef} className='tab about-tab' >
                <div className='flex-change'>
                    <div className='name-summary-container'>
                        <h3>Hello, my name is</h3>
                        <div className='flex-change-reverse'>
                            <h2>Owen</h2>
                            <h2>Walstrom</h2>
                        </div>
                        <p>I am a fullstack web developer with a passion for building websites for small business and developing educational software. Want to know how I may help your project? Check out some of the projects I have been working on or contact me using my information below!</p>
                        
                    </div>
                    <div className = 'profile-image-container'>
                        <img className='profile-image' src={profileImage}/>
                        <div className='resume-button-container'>
                            <a href={resume} target="blank"><button className='resume-button'>Resume</button></a>
                        </div>
                    </div>
                </div>
          
            </div>
        </section>
    )
}