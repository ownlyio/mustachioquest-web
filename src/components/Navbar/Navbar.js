import { useState } from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import { Dropdown } from "react-bootstrap"
import './Navbar.css'

import logo from '../../images/MQ_logo.png'

export default function Navbar(props) {
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
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
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
                <ul className="d-flex justify-content-center align-items-center flex-wrap mb-0 p-0">
                    <li className="px-0 px-xxl-2">
                        <Dropdown>
                            <Dropdown.Toggle className="text-decoration-none font-size-lg-90 font-size-xxl-100" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                            <Dropdown.Menu className="pe-2">
                                {/*<Dropdown.Item href="/pathfinders">Pathfindes</Dropdown.Item>*/}
                                <Dropdown.Item href="/marauders"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {/*<button className="btn btn-link text-decoration-none dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{"color":"black"}}>ARCHETYPES</button>*/}
                        {/*<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
                        {/*    <li><a className="dropdown-item" href="#">Action</a></li>*/}
                        {/*    <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                        {/*    <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                        {/*</ul>*/}
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#updates" scroll={el => scrollWithOffset(el)}>UPDATES</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#roadmap" scroll={el => scrollWithOffset(el)}>ROADMAP</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)}>TEAM</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#progress" scroll={el => scrollWithOffset(el)}>PROGRESS</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)}>NFT</HashLink>
                    </li>
                    {/* <li>
                        <HashLink smooth to="#rewards" scroll={el => scrollWithOffset(el)}>REWARDS</HashLink>
                    </li> */}
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#visualizer" scroll={el => scrollWithOffset(el)}>VISUALIZER</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#faqs" scroll={el => scrollWithOffset(el)}>FAQS</HashLink>
                    </li>
                    <li className="px-0 pe-xxl-2 pe-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="https://mustachio.quest" target="_blank" className="btn mq-nav-discord mx-1 text-white gotham-black font-size-100">
                            BETA TEST
                        </a>
                        <button type="button" onClick={props.mintBtn} className="btn mq-nav-discord mx-1 text-white gotham-black font-size-100">
                            MINT NOW
                        </button>
                    </li>
                    <li className="ps-2 font-size-lg-90 font-size-xxl-100">

                    </li>
                    {/* <li>
                        <a href="https://ownly.io/ownmarauder" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                            EARN NFT
                        </a>
                    </li> */}
                </ul>
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

                    <Dropdown style={{"zIndex":"9999999999999"}}>
                        <Dropdown.Toggle className="text-decoration-none font-size-100 ps-0" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                        <Dropdown.Menu className="pe-2" >
                            {/*<Dropdown.Item href="/pathfinders">Pathfindes</Dropdown.Item>*/}
                            <Dropdown.Item href="/marauders" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <HashLink smooth to="/#updates" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">UPDATES</HashLink>
                    <HashLink smooth to="/#roadmap" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">ROADMAP</HashLink>
                    <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                    <HashLink smooth to="/#progress" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">PROGRESS</HashLink>
                    <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">NFT</HashLink>
                    {/* <HashLink smooth to="#rewards" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">REWARDS</HashLink> */}
                    <HashLink smooth to="/#visualizer" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">VISUALIZER</HashLink>
                    <HashLink smooth to="/#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FAQS</HashLink>
                    <a href="https://mustachio.quest" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                        BETA TEST
                    </a>
                    <button type="button" onClick={props.mintBtn} className="btn mq-nav-discord text-white gotham-black font-size-100">
                        MINT NOW
                    </button>
                    {/* <a href="https://ownly.io/ownmarauder" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                        EARN NFT
                    </a> */}
                </Menu>
            </div>
        </div>
    )
}
