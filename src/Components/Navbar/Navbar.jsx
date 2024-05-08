import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'


function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Portfolio.</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li className='links'>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                        <li className='links'>Services</li>
                    </Link>
                    <Link spy={true} to='sk-skills' smooth={true} >
                        <li className='links'>Experience</li>
                    </Link>
                    <Link spy={true} to='Protfolio' smooth={true} >
                        <li className='links'>protfolio</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true}>
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
