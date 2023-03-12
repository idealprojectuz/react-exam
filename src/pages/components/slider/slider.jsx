import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './sliders.scss';
import sliderphoto from '../../../assets/img/slider.png';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Slider = () => {
    const Swiperstyled = styled(SwiperSlide)`
        height: 80vh;
    `
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            height='100vh'
            navigation
            pagination={{ clickable: true }}
        >
            <Swiperstyled>
                <img src={sliderphoto} className='sliderproduction' alt="sliderphoto" />
            </Swiperstyled>
            <Swiperstyled>
                <img src={sliderphoto} className='sliderproduction' alt="sliderphoto" />
            </Swiperstyled>
            <Swiperstyled>
                <img src={sliderphoto} className='sliderproduction' alt="sliderphoto" />
            </Swiperstyled>
            <Swiperstyled>
                <img src={sliderphoto} className='sliderproduction' alt="sliderphoto" />
            </Swiperstyled>


        </Swiper>
    )
}
