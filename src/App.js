import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import banner from './images/draft/s1-banner-2.jpg'
import mq_white from './images/MQ_logo_white.png'
import mustachios from './images/draft/s1-mustachios.png'

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Navbar /> 

                <section className="app-first" style={{"backgroundImage": "url("+banner+")"}}>
                    <div className="app-first-imgs" id="app-first-mq-logo">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <img src={mq_white} className="w-3/12" alt="Mustachio Quest Logo" />
                        </div>
                    </div>  
                    <div className="app-first-imgs" id="app-first-mustachios">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <img src={mustachios} className="w-1/2" alt="Mustachios" />
                        </div>
                    </div>  
                </section>
            </div>
        </Router>
    );
}
