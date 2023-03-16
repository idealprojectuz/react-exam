import React from 'react'
import { ProductCard } from '../../../components/card/card'
import { Skeleton } from '../products/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getdata } from '../../../servis/servis';
const Achiveproduct = () => {
    const { isLoading, isError, data } = useQuery(
        {
            queryKey: ['products'],
            queryFn: getdata,
            onError: () => { },
            onSuccess: () => { },
        })
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
    )
}
export { Achiveproduct }