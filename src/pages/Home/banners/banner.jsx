import React from 'react'
import banner1 from '../../../assets/img/rasm1.png'
import banner2 from '../../../assets/img/rasm2.jpg'
import banner3 from '../../../assets/img/rasm3.jpg'
import './banner.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Banner = () => {
    return (
        <section className='banner'>
            <div className='container'>
                <ul className='banner-wrapper'>
                    <li className='banner-item'>
                        {/* <img src={banner1} alt="banner" /> */}
                        <LazyLoadImage
                            width='100%'
                            alt='banner'
                            effect="blur"

                            src={banner1} />
                    </li>
                    <li className='banner-item'>
                        {/* <img src={banner2} alt="banner" /> */}
                        <LazyLoadImage
                            width='100%'
                            alt='banner'
                            effect="blur"
                            src={banner2} />
                    </li>
                    <li className='banner-item'>
                        {/* <img src={banner3} alt="banner" /> */}
                        <LazyLoadImage
                            width='100%'
                            alt='banner'
                            effect="blur"
                            src={banner3} />
                    </li>
                </ul>
            </div>
        </section>
    )
}
