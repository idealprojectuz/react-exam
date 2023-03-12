import React from 'react';
import './header.scss';
import facebooklogo from '../../../assets/icon/facebook.svg';
import instagramlogo from '../../../assets/icon/instagram.svg';
import twitterlogo from '../../../assets/icon/twitter.svg';
import youtubelogo from '../../../assets/icon/youtube.svg';
import logo from '../../../assets/img/logo.svg';
import phoneicon from '../../../assets/icon/phone.svg';
import compaire from '../../../assets/icon/campare.svg';
import shopicon from '../../../assets/icon/shop.svg';
import heart from '../../../assets/icon/heart.svg';
import { nanoid } from '@reduxjs/toolkit';
import { Button, IconButton, Badge } from '@mui/material';
import styled from 'styled-components';
const Header = () => {
    const menu = [
        {
            id: nanoid(),
            icon: facebooklogo,
            link: '#'
        },
        {
            id: nanoid(),
            icon: instagramlogo,
            link: '#'
        },
        {
            id: nanoid(),
            icon: twitterlogo,
            link: '#'
        },
        {
            id: nanoid(),
            icon: youtubelogo,
            link: '#'
        },
    ]
    const PhoneButton = styled(Button)`
        border: none !important;
        &:hover{
            border: none;
        }
       
    `
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 0,
            top: '10%',
            width: '20px',
            height: '20px',
            position: 'absolute'
            // padding: '0 4px',
        },
    }));
    return (
        <header className='header'>
            <nav className='header__nav'>

                <div className="header__nav-top">
                    <div className="container nav-flex">
                        <div className="header-flex">
                            <div className="social-media">
                                <ul>
                                    {menu?.map(item =>
                                        <li key={item.id}>
                                            <a href={item.link}>
                                                <IconButton color='primary'>
                                                    <img src={item.icon} alt='social-media' />
                                                </IconButton>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="header__nav-phone">

                                <PhoneButton variant='outlined' href="tel:+998900860011">
                                    <img src={phoneicon} alt="phone" />
                                    <span className='phone-text'>+998 90 0860011</span>
                                </PhoneButton>
                            </div>
                        </div>
                        <div className="right-menu">
                            <ul className="nav-wrapper">
                                <li className='nav-item'>Setting</li>
                                <li className='nav-item'>USD $</li>
                                <li className='nav-item'>🇲🇾 English</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='header__nav-main'>
                    <div className="container nav-flex">
                        <div className="logo">
                            <img src={logo} alt="looki" />
                        </div>
                        <div className="menu">
                            <ul className='menu-wrapper'>
                                <li className='menu-item active'>
                                    Home
                                </li>
                                <li className='menu-item '>
                                    Shop
                                </li>
                                <li className='menu-item '>
                                    Pages
                                </li>
                                <li className='menu-item '>
                                    Blog
                                </li>
                                <li className='menu-item '>
                                    ADmin Panel
                                </li>
                            </ul>
                        </div>
                        <div className="nav-action">
                            <ul className='icon-wrapper'>
                                <li className='icon-item'>
                                    <IconButton color='primary'>
                                        <svg width={28} height={29} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.8143 17.0413L23.3335 23.5605" stroke="black" strokeLinecap="round" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 18.894C15.5327 18.894 18.6667 15.76 18.6667 11.894C18.6667 8.02805 15.5327 4.89404 11.6667 4.89404C7.80075 4.89404 4.66675 8.02805 4.66675 11.894C4.66675 15.76 7.80075 18.894 11.6667 18.894Z" stroke="black" />
                                        </svg>
                                    </IconButton>
                                </li>
                                <li className='icon-item'>
                                    <IconButton color='primary'>
                                        <StyledBadge badgeContent={4} color="primary">
                                            <img src={heart} alt="like" />
                                        </StyledBadge>
                                    </IconButton>
                                </li>
                                <li className='icon-item'>
                                    <IconButton color='primary'>
                                        <StyledBadge badgeContent={4} color="primary">
                                            <img src={shopicon} alt="shop" />
                                        </StyledBadge>
                                    </IconButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header