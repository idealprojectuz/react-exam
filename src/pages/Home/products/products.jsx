import React from 'react'
import './products.scss';
import { getdata } from '../../../servis/servis';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@mui/material';
import { ProductCard } from '../../../components/card/card';
import { Stack } from '@mui/system';
export const Products = () => {
    const [menu, setmenu] = React.useState('1')
    // const req = useQuery(
    //         {
    //             queryKey: ['products'],
    //             queryFn: getdata,
    //             onError: () => { },
    //         onSuccess: () => { },

    //         })

    const query = useQuery(
        {
            queryKey: ['products'],
            queryFn: getdata,
            onError: () => { },
            onSuccess: () => { },
        })
    const menuHandler = (e) => {
        setmenu(e.target.id)
        query.refetch()
    }

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
                    <Button id='1' className={menu === '1' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler}>new products</Button>
                    <Button id='2' className={menu === '2' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler} >onsale</Button>
                    <Button id='3' className={menu === '3' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler}>upcoming products</Button>
                    {/* <Button>onsale</Button>
                    <Button>upcoming products</Button> */}
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
