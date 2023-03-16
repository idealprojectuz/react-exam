import { IconButton, Typography } from '@mui/material'
import React from 'react'
import logosvg from '../../../assets/img/logo.svg'
import youtubesvg from '../../../assets/icon/youtubefooter.svg'
import twittersvg from '../../../assets/icon/twitterfooter.svg'
import facebooksvg from '../../../assets/icon/facebookfooter.svg'
import paymentservis from '../../../assets/img/payment.png'
import './footer.scss'
export const Footer = () => {
    return (
        <footer className='footer'>

            <div className="footer-wrapper">
                <div className="container d-flex">
                    <div className="footer-logo">
                        <div className="footer-logo-image">
                            <img src={logosvg} alt="loki-logo" />
                        </div>
                        <div className="footer-about">
                            <Typography variant='subtitle1' fontSize={'14px'} color={'#565656'}>We are a team of professional designers and developers that create high quality wordpress plugins, Html, React Template.</Typography>
                        </div>
                        <div className="footer-social-icon">
                            <IconButton color='primary' className='footer-network'>
                                <svg width={30} height={30} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.753174" y="0.7146" width={30} height={30} fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                            <use xlinkHref="#image0_1_431" transform="scale(0.00195312)" />
                                        </pattern>
                                        <image id="image0_1_431" width={512} height={512} xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </IconButton>
                            <IconButton color='primary' className='footer-network' >
                                <img src={youtubesvg} alt="youtube" />

                            </IconButton>
                            <IconButton color='primary' className='footer-network'>
                                <img src={twittersvg} alt="twitter" />

                            </IconButton>
                            <IconButton color='primary' className='footer-network'>
                                <img src={facebooksvg} alt="facebook" />

                            </IconButton>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="footer-title">
                            <h3>Information</h3>
                            <div className='footer-tagline'></div>
                        </div>
                        <ul className="footer-menu">
                            <li className='footer-item'>
                                About us
                            </li>
                            <li className='footer-item'>
                                payment
                            </li>
                            <li className='footer-item'>
                                Contact us
                            </li>
                            <li className='footer-item'>
                                Stores
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title">
                            <h3>Social Links</h3>
                            <div className='footer-tagline'></div>
                        </div>
                        <ul className="footer-menu">
                            <li className='footer-item'>
                                About us
                            </li>
                            <li className='footer-item'>
                                payment
                            </li>
                            <li className='footer-item'>
                                Contact us
                            </li>
                            <li className='footer-item'>
                                Stores
                            </li>
                        </ul>
                    </div>
                    <div className="footer-newsletter">
                        <div className="footer-title">
                            <h3>Newsletter</h3>
                            <div className='footer-tagline'></div>
                        </div>
                        <div className="footer-newslater-desc">
                            <Typography variant='subtitle1' fontSize={'14px'} color={'#565656'}>Subcribe to the TheFace mailing list to receive update on mnew arrivals, special offers and other discount information.</Typography>
                        </div>
                        <div className="footer-form">
                            <form>
                                <label className='subscriptionlabel'>
                                    <input type="email" className='emailInput ' placeholder='Your email address' />
                                    <button className='signupbtn' type='submit'>Sign Up</button>
                                </label>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container footer-bottom-wrapper">
                    <div className="footer-bottom-row">
                        <p>Copyright © Idealproject.uz. All Rights Reserved</p>
                    </div>
                    <div className="footer-bottom-row">
                        <img src={paymentservis} alt="paymentservis" />
                    </div>
                </div>
            </div>

        </footer>
    )
}
