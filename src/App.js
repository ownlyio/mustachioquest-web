import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

// images
import mainbanner from './images/banner.jpg'
import landscape from './images/landscape.png'
import portal from './images/banner-portal.png'
import mustachios from './images/mustachios.png'
import logo from './images/MQ_logo_banner.png'

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar /> 

            <section id="first-section" style={{"backgroundImage": `url(${mainbanner})`}}>
                <section className="banner mb-5">
                    <div className="banner-img portal-wrap">
                        <img src={portal} className="w-100 portal" alt="Portal" />
                    </div>
                    <div className="banner-img mustachio-wrap">
                        <img src={mustachios} className="w-100 mustachios" alt="Mustachios" />
                    </div>

                    <div className="logo">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </div>
                    <div className="banner-content">
                        <p className="text-1 text-center mb-0 font-size-120 text-color-1">Conquer the wild. Embrace the feat.</p>
                        <p className="text-2 text-center mb-0 font-size-120 text-color-1">Welcome to Ownly’s first Play-to-Earn NFT game.</p>
                    </div>
                </section>
                <section className="banner-2">
                    <div className="landscape">
                        <img src={landscape} className="w-100" alt="Landscape" />
                    </div>
                    <p className="text-3 text-center mb-0 font-size-120 text-color-1">Embark on an adventure in the land of Mustachios. Fulfill quests, collect artifacts, and play your heart out in this interactive game.</p>
                    <button type="button" className="banner-2-btn btn btn-custom-1 gotham-black font-size-140">JOIN OUR DISCORD!</button>
                </section>
            </section>
        </Router>
    );
}
