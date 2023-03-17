import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import { Stack } from '@mui/system'
import placeholder from '../../assets/img/woocommerce-placeholder.png'
import './card.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector, useDispatch } from 'react-redux'
import { addData, removeData } from '../../redux/slice/cardslice'
import { saveState } from '../../utils/savestate'
import { store } from '../../redux/store'
import { addlike, removeLike } from '../../redux/slice/likeslice'

store.subscribe(() => {
    saveState('card', store.getState().card)
    saveState('like', store.getState().like)
})




export const ProductCard = ({ item }) => {
    const productdata = useSelector((state) => state.card.data)
    const likedata = useSelector((state) => state.like.data)
    const [productstate, setproductstate] = React.useState(0)
    const [likestate, setLikestate] = React.useState(0)
    const dispatch = useDispatch()
    const pushingdata = (events) => {

        if (events === 'add') {
            dispatch(addData(item))
            setproductstate(1)
        }
        else if (events === 'remove') {
            dispatch(removeData(item))
            setproductstate(0)
        }
    }
    const likepush = (events) => {
        if (events === 'add') {
            dispatch(addlike(item))
            setLikestate(1)
        }
        else if (events === 'remove') {
            dispatch(removeLike(item))
            setLikestate(0)
        }
    }
    React.useEffect(() => {
        if (productdata.length) {
            const result = productdata.find(obj => obj.id === item.id);
            if (result) {
                setproductstate(1)
            }
        }
        if (likedata.length) {
            const result = likedata.find(obj => obj.id === item.id);
            if (result) {
                setLikestate(1)
            }
        }
    }, [item.id, productdata, likedata])
    return (
        <div className='productcart'>
            <Card className='productWrapper'>
                <LazyLoadImage
                    alt='product-image'
                    effect="blur"
                    style={{ objectFit: 'contain', padding: '22px' }}
                    height="300px"
                    width='100%'
                    src={item?.image ? item.image : placeholder} />
                {likestate ?
                    <IconButton className='likebutton' onClick={() => likepush('remove')}>
                        <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C11.5138 2.64588 12.183 2.08173 12.954 1.69275C13.725 1.30377 14.5764 1.10077 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z" stroke="black" fill='red' strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton>
                    :
                    <IconButton className='likebutton' onClick={() => likepush('add')}>
                        <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69001C1 3.60001 3.49 1.10001 6.56 1.10001C8.38 1.10001 9.99 1.98001 11 3.34001C11.5138 2.64588 12.183 2.08173 12.954 1.69275C13.725 1.30377 14.5764 1.10077 15.44 1.10001C18.51 1.10001 21 3.60001 21 6.69001C21 13.69 14.52 17.82 11.62 18.81Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton>}

                <CardContent>
                    <Typography variant="subtitle1" color="text.primary">
                        {item?.name}
                    </Typography>
                    <Stack direction="row" justifyContent={'space-between'} alignItems='center' >
                        <Stack>
                            <Typography variant='subtitle1' fontWeight={'bold'} color='text.primary'>

                                {item?.price} som
                            </Typography>
                        </Stack>
                        <Stack>
                            {productstate ? <IconButton sx={{ backgroundColor: '#F6F6F6' }} onClick={() => pushingdata('remove')}>
                                <svg width={20} height={22} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4.98C15.67 4.65 12.32 4.48 8.98 4.48C7 4.48 5.02 4.58 3.04 4.78L1 4.98M6.5 3.97L6.72 2.66C6.88 1.71 7 1 8.69 1H11.31C13 1 13.13 1.75 13.28 2.67L13.5 3.97M16.85 8.14L16.2 18.21C16.09 19.78 16 21 13.21 21H6.79C4 21 3.91 19.78 3.8 18.21L3.15 8.14M8.33 15.5H11.66M7.5 11.5H12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </IconButton> : <IconButton sx={{ backgroundColor: '#F6F6F6' }} onClick={() => pushingdata('add')}>
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 11H15M11 15V7M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </IconButton>}


                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}
