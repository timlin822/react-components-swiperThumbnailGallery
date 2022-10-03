import {useState} from 'react';
import {Navigation,Autoplay,Thumbs} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

import SLIDERS_DATA from 'data/SlidersData.js';

import './Slider.css';

const Slider=()=>{
    const [thumbsSwiper,setThumbsSwiper]=useState(null);

    return (
        <>
            <Swiper
                modules={[Navigation,Autoplay,Thumbs]}
                loop
                autoplay={{delay: 3000,disableOnInteraction: false}}
                speed={1000}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                grabCursor
            >
                {SLIDERS_DATA.map(slider=>(
                    <SwiperSlide key={slider.id}>
                        <img src={slider.url} alt="slider-image" />
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev"><FaChevronLeft /></div>
                <div className="swiper-button-next"><FaChevronRight /></div>
            </Swiper>

            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={5}
            >
                {SLIDERS_DATA.map(slider=>(
                    <SwiperSlide key={slider.id}>
                        <img src={slider.url} alt="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;