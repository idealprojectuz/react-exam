import React from 'react';
import './servis.scss';
import shippingicon from '../../../assets/icon/shipping.svg'
import returnicon from '../../../assets/icon/return.svg'
import paymenticon from '../../../assets/icon/payment.svg'
import supporticon from '../../../assets/icon/support.svg'
export const Servis = () => {
    return (
        <section className='servis'>
            <div className='container servis-flex'>
                <div className="servis-wrapper">
                    <ul className='servis-menu'>
                        <li className='servis-item'>
                            <div className="icon">
                                <img src={shippingicon} alt="shipping" />
                            </div>
                            <div className="content">
                                <h3 className='servis-title'>
                                    Free Shipping
                                </h3>
                                <p className='servis-description'>On all orders over $75.00</p>
                            </div>
                        </li>
                        <li className='servis-item'>
                            <div className="icon">
                                <img src={returnicon} alt="shipping" />
                            </div>
                            <div className="content">
                                <h3 className='servis-title'>
                                    Free Returns
                                </h3>
                                <p className='servis-description'>On all orders over $75.00</p>
                            </div>
                        </li>
                        <li className='servis-item'>
                            <div className="icon">
                                <img src={paymenticon} alt="shipping" />
                            </div>
                            <div className="content">
                                <h3 className='servis-title'>
                                    100% Payment Secure
                                </h3>
                                <p className='servis-description'>On all orders over $75.00</p>
                            </div>
                        </li>
                        <li className='servis-item'>
                            <div className="icon">
                                <img src={supporticon} alt="shipping" />
                            </div>
                            <div className="content">
                                <h3 className='servis-title'>
                                    Support 24/7
                                </h3>
                                <p className='servis-description'>On all orders over $75.00</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}
