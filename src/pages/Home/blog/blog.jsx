import React from 'react'
import { Blogcard } from '../../../components/blogcard/blogcard'
import { nanoid } from '@reduxjs/toolkit'
import './blog.scss'
export const Blog = () => {
    const blogdata = [
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://avatars.mds.yandex.net/get-altay/4449685/2a000001823a6348540f1157254a0f3e8a5c/L',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://avatars.mds.yandex.net/get-altay/1880508/2a0000016fad8274c6a0787dc48815f2d2ef/XXL_height',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://i.ytimg.com/vi/CFEQ8KWpEQo/maxresdefault.jpg',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f5Ta1a2WAw9zhHMu-RHJd0T_D6lFNrUcOQ&usqp=CAU',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://avatars.mds.yandex.net/get-altay/4449685/2a000001823a6348540f1157254a0f3e8a5c/L',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://avatars.mds.yandex.net/get-altay/1880508/2a0000016fad8274c6a0787dc48815f2d2ef/XXL_height',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://i.ytimg.com/vi/CFEQ8KWpEQo/maxresdefault.jpg',
        },
        {
            id: nanoid(),
            title: 'Najot talim NT94 ',
            description: 'Najot talim bootcamp o`quv dasturiga qabul boshlandi',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f5Ta1a2WAw9zhHMu-RHJd0T_D6lFNrUcOQ&usqp=CAU',
        },
    ]
    return (
        <section className='blog'>
            <div className='container'>
                <div className="banner-heading">
                    <h2 className="banner-title">
                        from our Latest Blogs
                    </h2>
                    <span className='tag-line'></span>
                    <p className='banner-subtitle'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.
                    </p>
                </div>

                <div className='blog-wrapper'>
                    {blogdata.map(item => <Blogcard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    )
}
