import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import './sliders.scss';
import applegif from '../../../assets/video/apple-apple-mac.gif'
import appleimage from '../../../assets/img/sliderphoto.jpg'
import styled from 'styled-components';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Slider = () => {
    const Swiperstyled = styled(SwiperSlide)`
        height: 80vh;
        @media (max-width: 510px){
            height: 90vh;
        }
    `
    return (
        <section id='slider'>

            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                <Swiperstyled>
                    <div className='myslider' id='slider1'>
                        <div className='slider-content' >
                            <p className='slider-subtitle'>Najot ta'lim o'quv markazida</p>
                            <h1> apple qurilmalariga<br /> qaynoq chegirmalar</h1>
                            <Button variant='contained' sx={{
                                marginTop: '10px'
                            }} color='primary'>Buy now</Button>
                        </div>
                        <div className='sliderimage'>
                            <LazyLoadImage
                                alt='product-image'
                                effect="blur"
                                src={appleimage} />
                        </div>
                    </div>
                </Swiperstyled>
                <Swiperstyled>
                    <div className='myslider' id='slider2'>
                        <div className='slider-content' >
                            <p className='slider-subtitle'>Najot ta'lim o'quv markazida</p>
                            <h1> apple qurilmalariga<br /> qaynoq chegirmalar</h1>
                            <Button variant='contained' sx={{
                                marginTop: '10px'
                            }} color='primary'>Buy now</Button>
                        </div>
                        <div className='sliderimage' id='macbookphoto'>
                            {/* <img src={applegif} alt="Apple brand" /> */}
                            <LazyLoadImage
                                alt='Apple brand'
                                effect="blur"
                                src={applegif} />

                        </div>
                    </div>
                </Swiperstyled>

            </Swiper>
        </section>

    )
}
