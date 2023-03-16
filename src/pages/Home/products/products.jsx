import React from 'react';
import './products.scss';
import { getdata } from '../../../servis/servis';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@mui/material';
import { ProductCard } from '../../../components/card/card';
import { Skeleton } from './skeleton';

export const Products = () => {
    const [menu, setMenu] = React.useState('1');
    const queryClient = useQueryClient();

    const { isLoading, isError, data } = useQuery(
        ['products', menu],
        () => getdata(menu),
        {
            onError: () => { },
            onSuccess: () => { },
        }
    );

    React.useEffect(() => {
        queryClient.invalidateQueries('products');
    }, [menu, queryClient]);

    const menuHandler = (e) => {
        setMenu(e.target.id);
    };

    return (
        <section className='product'>
            <div className='container'>
                <div className='banner-heading'>
                    <h2 className='banner-title'>Our products</h2>
                    <span className='tag-line'></span>
                    <p className='banner-subtitle'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?
                    </p>
                </div>
                <div className='product-menu'>
                    <Button id='1' className={menu === '1' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler}>
                        new products
                    </Button>
                    <Button id='2' className={menu === '2' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler}>
                        onsale
                    </Button>
                    <Button id='3' className={menu === '3' ? 'menu-active' : 'menu-button-item'} onClick={menuHandler}>
                        upcoming products
                    </Button>
                </div>
                <div className='productStack'>
                    {isLoading ? (
                        <Skeleton />
                    ) : isError ? (
                        <div>Something went wrong...</div>
                    ) : (
                        data?.map((item) => <ProductCard key={item.id} item={item} />)
                    )}
                </div>
            </div>
        </section>
    );
};
