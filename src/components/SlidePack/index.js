import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SlidePack = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                modules={[ Pagination, Navigation]}
                loop={true}
                className="mySwiper"
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                   <div className='Slider'>
                        Đây là slider 1
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='Slider'>
                        Đây là slider 2
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='Slider'>
                        Đây là slider 3
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='Slider'>
                        Đây là slider 4
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div className='Slider'>
                        Đây là slider 5
                   </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SlidePack;