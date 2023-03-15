import React from 'react'
import banner1 from '../../../assets/img/rasm1.png'
import banner2 from '../../../assets/img/rasm2.jpg'
import banner3 from '../../../assets/img/rasm3.jpg'
import './banner.scss'
export const Banner = () => {
    return (
        <section className='banner'>
            <div className='container'>
                <ul className='banner-wrapper'>
                    <li className='banner-item'>
                        <img src={banner1} alt="banner" />
                    </li>
                    <li className='banner-item'>
                        <img src={banner2} alt="banner" />
                    </li>
                    <li className='banner-item'>
                        <img src={banner3} alt="banner" />
                    </li>
                </ul>
            </div>
        </section>
    )
}
