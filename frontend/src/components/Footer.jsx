

export function Footer(props){
    const {contactRef} = props;


    return(
        <div ref={contactRef} className=' tab footer'>
            <div className='footer-container'>
                <h6><a href='mailto:walstrom.owen@gmail.com'>Email</a></h6>
                <h6><a href='https://www.linkedin.com/in/owen-walstrom-028b4b343/'>Linkedin</a></h6>
                <h6><a href='https://github.com/walstromowen'>Github</a></h6>
            </div>
        </div>
    )
}