import { Button } from '@mui/material'
import React from 'react'
import './order.scss'
import { useSelector } from 'react-redux'
export const Order = () => {
    const totalprice = useSelector(state => state.card.totalprice)
    return (
        <section className='orderform'>
            <div className='container '>

                <div className='orderwrapper d-flex'>

                    <div className="form-wrapper">
                        <h2 className='order-title'>
                            calculate shipping
                        </h2>
                        <form>
                            <div className="country d-flex">
                                <select className='looki-form'>
                                    <option value="">Select country</option>
                                    <option value="UZ">Uzbekistan</option>
                                </select>
                                <select className='looki-form'>
                                    <option value="">Select state</option>
                                    <option value="UZ">Toshkent</option>
                                </select>
                            </div>
                            <div className="country d-flex">
                                <input type="text" placeholder='Postcode / ZIP' className='looki-form ' />
                                <Button variant='contained'>estimate</Button>
                            </div>
                        </form>

                        <h2 className='discount-title'>
                            Discount coupon Code
                        </h2>
                        <form>
                            <div className="country d-flex">
                                <input type="text" placeholder='coupon Code' className='looki-form' />
                                <Button variant='contained'>apply code</Button>
                            </div>
                        </form>
                    </div>
                    <div className='totalprice'>

                        <div className="totalprice-wrap">
                            <div className="totalprice-container">
                                <div className="d-flex totalprice-item">
                                    <span className='item-title'>
                                        Product
                                    </span>
                                    <span className='item-value'>
                                        Total
                                    </span>
                                </div>
                                <div className="d-flex totalprice-item">
                                    <span className='item-title'>
                                        Shipping
                                    </span>
                                    <span className='item-value coloring'>
                                        Free shipping
                                    </span>
                                </div>
                                <div id='price' className="d-flex totalprice-item">
                                    <span className='item-title'>
                                        Total
                                    </span>
                                    <span className='item-value coloring'>
                                        {totalprice} som
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button variant='contained' sx={{ marginTop: '25px' }}>Checkout</Button>

                    </div>
                </div>
            </div>

        </section >
    )
}
