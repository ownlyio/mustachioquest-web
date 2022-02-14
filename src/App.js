import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import $ from 'jquery'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Updates from './components/Updates/Updates'
import Team from './components/Team/Team'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

export default function App() {
    // useEffect(() => {
    //     $(window).on('scroll', () => {
    //         console.log($(window).scrollTop())
    //     })
    // }, [])

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar /> 
            <Banner />
            <Features />
            <Updates />

            <Team />
            <FAQ />
            <CTA />
            <Footer />
        </Router>
    );
}
