import React from 'react'
import './table.scss'
import { Cardtable } from './cardtable/cardtable'
import { useSelector } from 'react-redux'
import { Liketable } from './liketable/liketable'
export const Table = ({ type }) => {
    const carddata = useSelector(state => state.card.data)
    const likedata = useSelector(state => state.like.data)
    return (
        <section className='tables'>
            <div className="container">
                <h2 className="tables__title">
                    {type === 'card' ? <>Your cart items</> : <>Your wishlist</>}

                </h2>
                <div className='table-responsiv'>
                    <table className='looki-table'>
                        <thead className='looki-table__head'>
                            <tr>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Stock Status</th>
                                {type === 'card' ? <th scope="col">Qty</th> : ''}
                                <th scope="col">Price</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody className='looki-table__body'>
                            {type === 'card' ? carddata?.map(item => <Cardtable item={item} key={item.id} />) : likedata?.map(item => <Liketable item={item} key={item.id} />)}

                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )
}
