import React from 'react'
import './Protfolio.css'
import {Swiper , SwiperSlide } from 'swiper/react'
import IMG1 from "../../img/imgs.png"
import IMG2 from "../../img/imgs2.png"
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const Protfolio = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Protfolio'>
        {/* heading */}
        <span style={{color:darkmode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider */}
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide className='swiper-slide'> 
                <Link to={'/Projects/WeatherStation'}>
                    <img src={IMG1} alt="" />
                </Link>
                <span style={{color:darkmode? 'white': ''}}>Weather Station</span>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <Link to={'/Projects/Restaurant'}>
                    <img src={IMG2} alt="" />
                </Link>
                <span style={{color:darkmode? 'white': ''}}>Restaurant Mobile App </span>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Protfolio
