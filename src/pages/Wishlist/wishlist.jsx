import React from 'react'
import { Pagetitle } from '../components/pagetitle/pagetitle'
import { Table } from '../components/table/table'
export const Wishlist = () => {
    return (
        <>
            <Pagetitle title='Wishlist' />
            <Table type='wishlist' />
        </>
    )
}
