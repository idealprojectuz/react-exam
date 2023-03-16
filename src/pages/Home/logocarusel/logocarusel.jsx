import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './logocarusel.scss'
import { nanoid } from '@reduxjs/toolkit';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Logocarusel = () => {
    const logos = [
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/Najot_Talim-01.png',
        },
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/PDP_IT_Academy-01.png',
        },
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/Olcha-01.png',
        },
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/Elmakon_-_%D0%AD%D0%BB%D0%BC%D0%B0%D0%BA%D0%BE%D0%BD-01.png',
        },
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/Elmakon_-_%D0%AD%D0%BB%D0%BC%D0%B0%D0%BA%D0%BE%D0%BD-01.png',
        },
        {
            id: nanoid(),
            src: 'https://logobank.uz:8005/media/logos_png/Murad_Buildings-01.png',
        },
        {
            id: nanoid(),
            src: 'https://kvadratmetr.uz/wp-content/uploads/2022/04/nrg.svg',
        },
        {
            id: nanoid(),
            src: 'https://kvadratmetr.uz/wp-content/uploads/2022/04/Golden-House-logo.jpeg',
        },
        {
            id: nanoid(),
            src: 'https://kvadratmetr.uz/wp-content/uploads/2022/06/FDG_logo.jpg',
        },
        {
            id: nanoid(),
            src: 'https://kvadratmetr.uz/wp-content/uploads/2022/05/Darkhan-avenue_logo.-1-e1651658155166.jpg',
        },
    ]
    return (
        <section className='logo'>
            <div className="container">


                <Swiper
                    spaceBetween={2}
                    slidesPerView={8}
                    loop={true}

                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 10,

                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {logos.map((item) => {
                        return (
                            <SwiperSlide className='logowrap' key={item.id}>
                                <div className='logoitem'>
                                    {/* <img src={item.src} alt="logo" /> */}
                                    <LazyLoadImage
                                        alt='logo'
                                        effect="blur"
                                        src={item.src} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>

    )
}
