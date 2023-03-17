import React from 'react'
import { Pagetitle } from '../components/pagetitle/pagetitle'
import { Newproduct } from './newproduct/newproduct'

export const Admin = () => {
    return (
        <>
            <Pagetitle title={'Admin Dashboard'} />
            <Newproduct />
        </>
    )
}
