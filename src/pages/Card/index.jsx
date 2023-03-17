import React from 'react'
import { Pagetitle } from '../components/pagetitle/pagetitle'
import { Table } from '../components/table/table'
import { Order } from './form/order'

export const Cardpage = () => {
    return (
        <>
            <Pagetitle title='Card' />
            <Table type='card' />
            <Order />
        </>
    )
}
