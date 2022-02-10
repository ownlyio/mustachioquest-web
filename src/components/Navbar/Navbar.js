import { Link } from "react-router-dom"
import './Navbar.css'

import logo from '../../images/MQ_logo.png'

export default function Navbar() {
  return (
    <div id="header" className="container">
        <div id="mq-nav" className="d-flex justify-content-between align-items-center">
            <div className="mq-nav-logo">
                <Link exact="true" to="/">
                    <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                </Link>
            </div>
            <ul className="d-flex justify-content-center align-items-center mb-0 p-0">
                <li><a href="/">QUEST</a></li>
                <li><a href="/">FEATURES</a></li>
                <li><a href="/">ROADMAP</a></li>
                <li><a href="/">TEAM</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
        </div>
    </div>
  )
}
