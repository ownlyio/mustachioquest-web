import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import $ from 'jquery'
import { Discord } from './components/ShortLinks'

import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Updates from './components/Updates/Updates'
import Roadmap from './components/Roadmap/Roadmap'
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
            <Switch>
                <Route exact path="/">
                    <Banner />
                    <Features />
                    <Updates />
                    <Roadmap />
                    <Team />
                    <FAQ />
                    <CTA />
                    <Footer />
                </Route>
                <Route exact path="/discord" component={Discord}></Route>
            </Switch>
        </Router>
    );
}
