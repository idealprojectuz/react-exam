import React from 'react'
import banner1 from '../../../assets/img/ads1.png'
import banner2 from '../../../assets/img/ads2.png'
import banner3 from '../../../assets/img/ads3.png'
import './ads.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export const Ads = () => {
    return (
        <section className='ads'>
            <div className='container'>
                <ul className='ads-wrapper'>
                    <li className='ads-item'>
                        {/* <img src={banner1} alt="ads-banner" /> */}
                        <LazyLoadImage
                            alt='banner'
                            effect="blur"
                            src={banner1} />
                    </li>
                    <li className='ads-item'>
                        {/* <img src={banner2} alt="ads-banner" /> */}
                        <LazyLoadImage
                            alt='banner'
                            effect="blur"
                            src={banner2} />
                    </li>
                    <li className='ads-item'>
                        {/* <img src={banner3} alt="ads-banner" /> */}
                        <LazyLoadImage
                            alt='banner'
                            effect="blur"
                            src={banner3} />
                    </li>
                </ul>
            </div>
        </section>
    )
}
