import { IconButton } from '@mui/material'
import React from 'react'
import { removeLike } from '../../../../redux/slice/likeslice'
import { useDispatch } from 'react-redux'
export const Liketable = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <tr className='looki-table-tr'>
            <td className='looki-table-image'>
                <img src={item.image} alt="product" />
            </td>
            <td className='looki-table-name'>
                {item.name}
            </td>
            <td className='looki-table-stock'>
                <div className='stock-align'>
                    <div className='looki-table-stock-wrap'>
                        <span>
                            In Stock
                        </span>

                    </div>
                </div>
            </td>

            <td className='looki-table-price'>
                {item.price} som
            </td>
            <td>
                <IconButton color='primary' onClick={() => { dispatch(removeLike(item)) }}>
                    <svg width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.39062 13.3147C1.39062 14.053 1.96484 14.6272 2.70312 14.6272H10.5781C11.2891 14.6272 11.8906 14.053 11.8906 13.3147V4.1272H1.39062V13.3147ZM8.82812 6.3147C8.82812 6.09595 9.01953 5.8772 9.26562 5.8772C9.48438 5.8772 9.70312 6.09595 9.70312 6.3147V12.4397C9.70312 12.6858 9.48438 12.8772 9.26562 12.8772C9.01953 12.8772 8.82812 12.6858 8.82812 12.4397V6.3147ZM6.20312 6.3147C6.20312 6.09595 6.39453 5.8772 6.64062 5.8772C6.85938 5.8772 7.07812 6.09595 7.07812 6.3147V12.4397C7.07812 12.6858 6.85938 12.8772 6.64062 12.8772C6.39453 12.8772 6.20312 12.6858 6.20312 12.4397V6.3147ZM3.57812 6.3147C3.57812 6.09595 3.76953 5.8772 4.01562 5.8772C4.23438 5.8772 4.45312 6.09595 4.45312 6.3147V12.4397C4.45312 12.6858 4.23438 12.8772 4.01562 12.8772C3.76953 12.8772 3.57812 12.6858 3.57812 12.4397V6.3147ZM12.3281 1.5022H9.04688L8.77344 1.01001C8.66406 0.79126 8.44531 0.627197 8.19922 0.627197H5.05469C4.80859 0.627197 4.58984 0.79126 4.48047 1.01001L4.23438 1.5022H0.953125C0.707031 1.5022 0.515625 1.72095 0.515625 1.9397V2.8147C0.515625 3.06079 0.707031 3.2522 0.953125 3.2522H12.3281C12.5469 3.2522 12.7656 3.06079 12.7656 2.8147V1.9397C12.7656 1.72095 12.5469 1.5022 12.3281 1.5022Z" fill="#212529" />
                    </svg>

                </IconButton>
            </td>
        </tr>
    )
}
