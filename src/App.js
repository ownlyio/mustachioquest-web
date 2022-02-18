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
        let landscapeContent = $('.text-3')
        let discordBtn = $('.join-discord')

        let logoWidth = logo.width()
        let logoTop = logo.offset().top
        let mustachioWidth = mustachios.width()

        // mobile
        let mobileBackground = $('#mobile-first-section')
        let mobilePortal = $('.mobile-portal-wrap')
        let mobileMustachios = $('.mobile-mustachio-wrap')
        let mobileLogo = $('.mobile-logo')
        let mobileContent = $('.mobile-banner-content p')
        let mobileLandscape = $('.mobile-landscape')
        let mobileLandscapeContent = $('.mobile-2-title')
        let mobileDiscordBtn = $('.mobile-join-discord')

        let mobileLogoWidth = mobileLogo.width()
        let mobileLogoTop = mobileLogo.offset().top
        let mobileMustachioWidth = mobileMustachios.width()

        $(window).on('scroll', () => {
            let valueY = $(window).scrollTop()

            // PC
            background.css("background-position", 'center ' + (valueY * 0.2) + 'px')
            logo.css({
                "opacity": 1 - (valueY * 0.007),
                "width": logoWidth - (valueY * 0.5) + 'px',
                // "top": logoTop + (valueY * 0.7) + 'px'
            })

            if ($(window).height() < 1200) {
                logo.css("top", logoTop + (valueY * 0.7) + 'px')
            }

            mustachios.css({
                "opacity": 1 - (valueY * 0.01),
                "width": mustachioWidth - (valueY * 1.2) + "px",
            })
            content.css({
                "opacity": 1 - (valueY * 0.01),
            })
            portal.css({
                "transform": "rotate(-"+ (360 - (valueY * 0.3)) +"deg)",
                "opacity": 1 - (valueY * 0.003),
            })
            landscape.css("opacity", 0 + (valueY * 0.0023))
            landscapeContent.css({
                "bottom": 100 + (valueY * 0.55) + 'px',
                "opacity": 0 + (valueY * 0.0017),
            })
            discordBtn.css({
                "bottom": 100 + (valueY * 0.4) + 'px',
                "opacity": 0 + (valueY * 0.0017),
            })

            // Mobile
            mobileBackground.css("background-position", 'center ' + (valueY * 0.2) + 'px')
            mobileLogo.css({
                "opacity": 1 - (valueY * 0.007),
                "top": mobileLogoTop + (valueY * 0.7) + 'px'
            })
            mobileMustachios.css({
                "opacity": 1 - (valueY * 0.01),
                "width": mobileMustachioWidth - (valueY * 1.2) + "px",
            })
            mobileContent.css({
                "opacity": 1 - (valueY * 0.01),
            })
            mobilePortal.css({
                "transform": "translate(-50%, -50%) rotate(-"+ (360 - (valueY * 0.3)) +"deg) ",
                "opacity": 1 - (valueY * 0.003),
            })
            mobileLandscape.css("opacity", 0.5 + (valueY * 0.0025))
            mobileLandscapeContent.css({
                "bottom": 100 + (valueY * 0.62) + 'px',
                "opacity": 0 + (valueY * 0.007),
            })
            mobileDiscordBtn.css({
                "bottom": 100 + (valueY * 0.45) + 'px',
                "opacity": 0 + (valueY * 0.007),
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
