import { Typography } from '@mui/material'
import React from 'react'
import { LoadingButton } from '@mui/lab';
import './newsproduct.scss'
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
export const Newproduct = () => {
    const [myloader, setMyloader] = React.useState(false)
    const [message, setMessage] = React.useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submiting = (data) => {
        setMyloader(true)
        const formdata = new FormData();
        formdata.append('name', data.name)
        formdata.append('price', data.price)
        formdata.append('description', data.description)
        formdata.append('image', data.image[0])
        const config = {
            method: 'POST',
            headers: {
                Authorization: process.env.REACT_APP_TOKEN,
            },
            body: formdata,
        };
        fetch(process.env.REACT_APP_BASE_URL, config)
            .then(Response => Response.json())
            .then(res => {
                if (res.status === 200) {
                    setMyloader(false)
                    setMessage(true)
                }
            })
    }
    return (
        <section className='newproduct'>
            <div className="container product-wrapper">
                <div className="newproduct-box">
                    <div className='newproduct-title'>
                        <Typography variant='h5' textAlign={'center'}>
                            Create new product
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit((data) => submiting(data))}>
                        <div className='product-form-input'>
                            <input type="tex" {...register('name', { required: true })} name='name' placeholder='Mahsulot nomi' />
                            {errors.name && <p className='errormessage'>Mahsulot nomi majburiy</p>}

                        </div>
                        <div className='product-form-input'>
                            <input type="number" {...register('price', { required: true })} name='price' placeholder='Mahsulot narxi' />
                            {errors.price && <p className='errormessage'>Mahsulot narxi majburiy</p>}

                        </div>
                        <div className='product-form-input'>
                            <textarea {...register('description', { required: true })} name='description' placeholder='Mahsulot haqida batafsil'>

                            </textarea>
                            {errors.description && <p className='errormessage'>Mahsulot haqida yozishingiz  majburiy</p>}

                        </div>
                        <div className="product-form-input ">

                            <label className='uploading'>
                                <div className='upload-svg'>
                                    <svg width={50} height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19 19C21.2091 19 23 17.2091 23 15C23 12.7909 21.2091 11 19 11C18.9764 11 18.9528 11.0002 18.9292 11.0006C18.4442 7.60802 15.5267 5 12 5C9.20335 5 6.78975 6.64004 5.6685 9.01082C3.06162 9.18144 1 11.35 1 14C1 16.7614 3.23858 19 6 19H19Z" stroke="#111111" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 16L12 10" stroke="#111111" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 12L12 10L15 12" stroke="#111111" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span >
                                        Drag and drop here
                                    </span>
                                    <span >
                                        Upload only image
                                    </span>
                                </div>


                                <input type="file" {...register('image', { required: true })} accept="image/png, image/jpg, image/gif, image/jpeg" />
                            </label>
                            {errors.image && <p className='errormessage'>Mahsulot Rasmini yuklash  majburiy</p>}

                        </div>
                        <div className="product-form-input ">
                            {message !== false ? <Alert severity="success" sx={{ marginBottom: '20px' }}>Mahsulot yaratildi</Alert> : ''}
                            <LoadingButton loading={myloader ? true : false} variant="outlined" className='submitbtn' type='submit' color='primary'>
                                Yaratish
                            </LoadingButton>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
