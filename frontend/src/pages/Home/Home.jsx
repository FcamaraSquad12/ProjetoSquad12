import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './Home.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../../components/Template/Logo'
import Nav from '../../components/Template/Nav'
import Routes from './Routes'
import Footer from '../../components/Template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
