import React from 'react'
import { Slider } from './slider/slider';
import { Servis } from './servise/servis';
import { Products } from './products/products';
import { Banner } from './banners/banner';
export const Home = () => {
    return (
        <>
            <Slider />
            <Servis />
            <Banner /> 
            <Products />
        </>
    )
}
