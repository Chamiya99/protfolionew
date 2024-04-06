import React from 'react'
import './Protfolio.css'
import {Swiper , SwiperSlide } from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import IMG1 from "../../img/imgs.png"
import IMG2 from "../../img/imgs2.png"
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

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
                <img src={IMG1} alt="" />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src={IMG2} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Protfolio
