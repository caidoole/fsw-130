import React from 'react'
import '../Theme.css'
import { withTheme } from "../context/ThemeProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ theme }) => {
    return (
        <div className={`footerTheme-${theme}`}>
            <div className='footer'>

                <h4> Find More Work Here:</h4>
                <FontAwesomeIcon icon={faGithub} className='fa' />
                <FontAwesomeIcon icon={faFacebook} className='fa' />
                <FontAwesomeIcon icon={faInstagram} className='fa' />


                <h4>Need Some Help?</h4>
                <FontAwesomeIcon icon={faPhone} className='fa' />
                <FontAwesomeIcon icon={faComment} className='fa' />

                <h4>Powered By:</h4>
                <FontAwesomeIcon icon={faReact} className='fa' />
                <p> Caitlin Dooley Creation </p>
            </div>
        </div>
    )
}

export default withTheme(Footer)