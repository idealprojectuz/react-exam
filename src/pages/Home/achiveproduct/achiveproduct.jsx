import React from 'react'
import { ProductCard } from '../../../components/card/card'
const Achiveproduct = () => {

    return (
        <section className='product'>
            <div className='container'>
                <div className="banner-heading">
                    <h2 className="banner-title">
                        New Arrival products
                    </h2>
                    <span className='tag-line'></span>
                    <p className='banner-subtitle'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.
                    </p>
                </div>
                <div className='productStack'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}
export { Achiveproduct }