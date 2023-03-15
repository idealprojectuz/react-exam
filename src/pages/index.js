import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/footer/footer'
import Header from './components/header/header'
const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Main