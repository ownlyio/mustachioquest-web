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
    useEffect(() => {
        let background = $('#first-section')
        let portal = $('.portal-wrap')
        let mustachios = $('.mustachio-wrap')
        let logo = $('.logo')
        let content = $('.banner-content')
        let landscape = $('.landscape')

        let portalWidth = portal.width()
        let portalTop = portal.offset().top

        let logoWidth = logo.width()
        let logoTop = logo.offset().top

        let mustachioWidth = mustachios.width()
        let mustachioTop = mustachios.offset().top

        let contentFontSize = parseFloat(content.css('font-size'))
        let contentLeft = content.offset().left
        let contentWidth = content.width()


        $(window).on('scroll', () => {
            let valueY = $(window).scrollTop()

            background.css("background-position", 'center ' + (valueY * 0.6) + 'px')
            logo.css({
                "opacity": 1 - (valueY * 0.007),
                "width": logoWidth - (valueY * 0.5) + 'px',
                "top": logoTop + (valueY * 0.7) + 'px'
            })
            mustachios.css({
                "opacity": 1 - (valueY * 0.01),
                "width": mustachioWidth - (valueY * 1.5) + "px",
            })
            content.css({
                "opacity": 1 - (valueY * 0.003),
                "font-size": contentFontSize + (valueY * 0.004) + 'px',
            })
            portal.css({
                "transform": "rotate(-"+ (360 - (valueY * 0.1)) +"deg)",
                "opacity": 1 - (valueY * 0.003),
            })
        })
    }, [])

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
