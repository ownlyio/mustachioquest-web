import { useState } from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import './Navbar.css'

import logo from '../../images/MQ_logo.png'

export default function Navbar() {
    const [menuOpenState, setMenuOpenState] = useState(false)

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        // const yOffset = 0; 
        // window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    }

    const handleStateChange = (state) => {
        setMenuOpenState(state.isOpen)
    }

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    const styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '36px',
            height: '30px',
            right: '0px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#fff'
        },
        bmBurgerBarsHover: {
            background: '#bdc3c7'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: 'black'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: ' linear-gradient(to left, #f5f5f5 0%, #dddddd 100%)',
            padding: '3.5em 2em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#fff'
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            color: 'black'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0
        }
    } 

    return (
        <div id="header" className="container">
            <div id="mq-nav" className="d-none d-lg-flex justify-content-between align-items-center">
                <div className="mq-nav-logo">
                    <Link exact="true" to="/">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </Link>
                </div>
                {/* <div classname="d-flex justify-content-end align-items-center"> */}
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
                        <li>
                            <Link exact="true" to="/discord" className="btn mq-nav-discord text-white gotham-black font-size-100">
                                MINT NOW
                            </Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
            <div className="d-lg-none align-self-end">
                <Menu right styles={styles}
                    isOpen={menuOpenState}
                    onStateChange={(state) => handleStateChange(state)}
                >
                    <div className="mq-nav-logo-mobile">
                        <Link exact="true" to="/">
                            <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                        </Link>
                    </div>
                    <HashLink smooth to="#features" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FEATURES</HashLink>
                    <HashLink smooth to="#updates" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">UPDATES</HashLink>
                    <HashLink smooth to="#roadmap" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">ROADMAP</HashLink>
                    <HashLink smooth to="#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                    <HashLink smooth to="#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FAQS</HashLink>
                    <Link exact="true" to="/discord" className="mt-3 btn mq-nav-discord text-white gotham-black font-size-100">
                        MINT NOW
                    </Link>
                </Menu>
            </div>
        </div>
    )
}
