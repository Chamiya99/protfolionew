import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({id,emoji ,heading , detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>

        {/** After Add data insert it to link to `/service/${id}`*/}
        <Link to='#'>
          <button className="c-button">LEARN MORE</button>
        </Link>
    </div>
  )
}

export default Card
