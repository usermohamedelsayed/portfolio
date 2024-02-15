import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../nav/Nav'

const Layout = () => {
    return (
        <div className='Layout'>
            <Nav />
            <span className="circleBig"></span>
            <span className="circleMiddle"></span>
            <span className="circleSmall"></span>
            <span className="circleMoiving1"></span>
            <span className="circleMoiving2"></span>
            <div className="wrapper">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout