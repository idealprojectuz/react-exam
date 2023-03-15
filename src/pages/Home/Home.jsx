import React from 'react'
import { Slider } from './slider/slider';
import { Servis } from './servise/servis';
import { Products } from './products/products';
import { Banner } from './banners/banner';
import { Ads } from './ads/ads';
import { Achiveproduct } from './achiveproduct/achiveproduct'
import { Blog } from './blog/blog';
import { Logocarusel } from './logocarusel/logocarusel';
export const Home = () => {
    return (
        <>
            <Slider />
            <Servis />
            <Banner />
            <Products />
            <Ads />
            <Achiveproduct />
            <Blog />
            <Logocarusel />
        </>
    )
}
