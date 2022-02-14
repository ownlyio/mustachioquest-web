import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import './Navbar.css'

import logo from '../../images/MQ_logo.png'

export default function Navbar() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        // const yOffset = 0; 
        // window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    }

    return (
        <div id="header" className="container">
            <div id="mq-nav" className="d-flex justify-content-between align-items-center">
                <div className="mq-nav-logo">
                    <Link exact="true" to="/">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </Link>
                </div>
                <ul className="d-flex justify-content-center align-items-center mb-0 p-0">
                    <li>
                        <HashLink smooth to="#features" scroll={el => scrollWithOffset(el)}>FEATURES</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#updates" scroll={el => scrollWithOffset(el)}>UPDATES</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#roadmap" scroll={el => scrollWithOffset(el)}>ROADMAP</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#team" scroll={el => scrollWithOffset(el)}>TEAM</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="#faqs" scroll={el => scrollWithOffset(el)}>FAQS</HashLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
