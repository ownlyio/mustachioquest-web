import { useState } from "react"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import './Navbar.css'
import $ from 'jquery'

import logo from '../../images/mustachio-logo-black-1.png'
import { Modal } from "react-bootstrap";
import marauders from "../../images/MQ_marauders.png";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// images
import bnbImage from "../../images/bnb.png";
import ownImage from "../../images/own-token.png";

// blockchain
import connectToMetaMask from "../../utils/connectToMetaMask";
import ownContract from "../../utils/ownContract";
import sparkSwapContract from "../../utils/sparkSwapRouterContract";
import marketplaceContract from "../../utils/marketplaceContract";
import numberFormat from "../../utils/numberFormat";
import web3 from "../../utils/web3"

export default function Navbar({mintMarauder}) {
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
                    <a href="/">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </a>
                </div>
                <ul className="d-flex justify-content-center align-items-center flex-wrap mb-0 p-0">
                    {/* <li className="px-0 px-xxl-2">
                        <Dropdown>
                            <Dropdown.Toggle className="text-decoration-none font-size-lg-90 font-size-xxl-100" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                            <Dropdown.Menu className="pe-2">
                                <Dropdown.Item href="/pathfinders"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;PATHFINDERS</Dropdown.Item>
                                <Dropdown.Item href="/marauders"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    {/* <li className="px-0 px-xxl-2">
                        <Dropdown>
                            <Dropdown.Toggle className="text-decoration-none font-size-lg-90 font-size-xxl-100" variant="link" id="dropdown-basic" style={{"color":"black"}}>FEATURES</Dropdown.Toggle>

                            <Dropdown.Menu className="pe-2">
                                <Dropdown.Item href="https://mustachio.quest" target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;CLOSED BETA TESTING</Dropdown.Item>
                                <Dropdown.Item href="https://my.mustachioverse.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;NFT VISUALIZER</Dropdown.Item>
                                <Dropdown.Item href="https://mustachioverse.com/discord" target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;DISCORD CHANNEL</Dropdown.Item>
                                <Dropdown.Item href="/ar"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;AR INSTAGRAM FILTER</Dropdown.Item>
                                <Dropdown.Item href="https://tales.mustahioverse.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;FIRST NFT TALES</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="/game" className="btn font-size-100">
                            GAME
                        </a>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="/ar" className="btn font-size-100">
                            AR FILTER
                        </a>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="/artist" className="btn font-size-100">
                            ARTIST
                        </a>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="btn font-size-100">
                            3D GALLERY
                        </a>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)}>NFT</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)}>TEAM</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#faqs" scroll={el => scrollWithOffset(el)}>FAQS</HashLink>
                    </li>
                    <li className="px-0 pe-xxl-2 pe-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <a href="https://mustachio.quest" target="_blank" className="btn mq-nav-discord mx-1 text-white gotham-black font-size-100">
                            PLAY NOW
                        </a>
                        <button type="button" onClick={mintMarauder} className="btn mq-nav-discord mx-1 text-white gotham-black font-size-100 mint-marauder">
                            MINT NOW
                        </button>
                    </li>
                </ul>
            </div>
            <div className="d-lg-none align-self-end">
                <Menu right styles={styles}
                    isOpen={menuOpenState}
                    onStateChange={(state) => handleStateChange(state)}
                >
                    <div className="mq-nav-logo-mobile">
                        <a href="/">
                            <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                        </a>
                    </div>

                    {/* <Dropdown style={{"zIndex":"100"}}>
                        <Dropdown.Toggle className="text-decoration-none font-size-100 ps-0 py-0" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                        <Dropdown.Menu className="pe-2" >
                            <Dropdown.Item href="/pathfinders" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;PATHFINDERS</Dropdown.Item>
                            <Dropdown.Item href="/marauders" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    {/* <Dropdown style={{"zIndex":"99"}}>
                        <Dropdown.Toggle className="text-decoration-none font-size-100 ps-0 py-0" variant="link" id="dropdown-basic" style={{"color":"black"}}>FEATURES</Dropdown.Toggle>

                        <Dropdown.Menu className="pe-2">
                            <Dropdown.Item href="https://mustachio.quest" target="_blank" rel="noreferrer" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;CLOSED BETA TESTING</Dropdown.Item>
                            <Dropdown.Item href="https://my.mustachioverse.com" target="_blank" rel="noreferrer" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;NFT VISUALIZER</Dropdown.Item>
                            <Dropdown.Item href="https://mustachioverse.com/discord" target="_blank" rel="noreferrer" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;DISCORD CHANNEL</Dropdown.Item>
                            <Dropdown.Item href="https://mustachioverse.com/ar" target="_blank" rel="noreferrer" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;AR INSTAGRAM FILTER</Dropdown.Item>
                            <Dropdown.Item href="https://tales.mustachioverse.com" target="_blank" rel="noreferrer" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;FIRST NFT TALES</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <a href="/game" className="btn text-start px-0 py-3 font-size-100">GAME</a>
                    <a href="/ar" className="btn text-start px-0 py-3 font-size-100">AR FILTER</a>
                    <a href="/artist" className="btn text-start px-0 py-3 font-size-100">ARTIST</a>
                    <a href="https://mustachio.quest" target="_blank" rel="noreferrer" className="btn text-start px-0 py-3 font-size-100">3D GALLERY</a>
                    <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">NFT</HashLink>
                    <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                    {/* <HashLink smooth to="#rewards" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">REWARDS</HashLink> */}
                    {/*<HashLink smooth to="/#visualizer" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">VISUALIZER</HashLink>*/}
                    <HashLink smooth to="/#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FAQS</HashLink>
                    <a href="https://mustachio.quest" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                        PLAY NOW
                    </a>
                    <button type="button" onClick={mintMarauder} className="btn mq-nav-discord text-white gotham-black font-size-100">
                        MINT NOW
                    </button>
                </Menu>
            </div>
        </div>
    )
}
