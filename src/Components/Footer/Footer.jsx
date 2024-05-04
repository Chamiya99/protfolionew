import React from 'react'
import './Footer.css'

import Wave2 from '../../img/footer1.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Githb from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave2} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>Eacheshan1999@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Githb color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )

}

export default Footer
