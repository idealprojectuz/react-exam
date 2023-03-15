import React from 'react'
import './products.scss';
import { getdata } from '../../../servis/servis';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { Button } from '@mui/material';
export const Products = () => {
    const queryClient = useQueryClient()

    const { data, isLoading, error } = useQuery(
        {
            queryKey: ['todos'],
            queryFn: getdata,
        })
    return (
        <section className='product'>
            <div className='container'>
                <div className="banner-heading">
                    <h2 className="banner-title">
                        Our products
                    </h2>
                    <span className='tag-line'></span>
                    <p className='banner-subtitle'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?
                    </p>
                </div>
                <div className="product-menu">

                </div>
            </div>
        </section>
    )
}
