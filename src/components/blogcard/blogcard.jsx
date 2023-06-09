import React from 'react'
import './blogcard.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Card, CardContent, Button, Typography } from '@mui/material'
export const Blogcard = ({ item }) => {
  return (
    <div className='blogcart'>
      <Card className='blogwrapper'>
        <LazyLoadImage
          alt='blog-post'
          effect="blur"
          style={{ objectFit: 'cover' }}
          height="251px"
          width='100%'
          src={item.image} />

        <CardContent>
          <Button variant='outlined' className='blogbtn' >Yangilik</Button>
          <Typography variant='subtitle1'>{item.title}</Typography>
          <Typography variant='body2'>{item.description}</Typography>
        </CardContent>
      </Card>
    </div>

  )
}
