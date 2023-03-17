import React from 'react'
import './pagetitle.scss'
export const Pagetitle = ({ title }) => {
    return (
        <section className='pagetitle'>
            <div className="container">
                <div className="page-heading">
                    <h1 className="page-heading-title">
                        {title}
                    </h1>
                    <span className="tag-line"></span>
                    <div className="page-subtitle-wrap">
                        <div>
                            <p className='page-heading-subtitle'>
                                Home
                            </p>
                        </div>
                        <div>
                            <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.846436 10.8772L6.09644 6.1272L0.846436 1.3772" stroke="black" strokeLinecap="round" />
                            </svg>

                        </div>
                        <div>
                            <p className='page-currentpage'>
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
