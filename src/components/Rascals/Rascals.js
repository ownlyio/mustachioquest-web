// images
import banner from '../../images/banner.jpg'
import rascals from '../../images/rascals-bg.gif'
import rascalsPic from '../../images/rascals-pic.png'
import rascalsLogo from '../../images/MQ_rascals.png'
import rascal1 from "../../images/rascals/rascals1.jpg"
import rascal2 from "../../images/rascals/rascals2.jpg"
import rascal3 from "../../images/rascals/rascals3.jpg"
import rascal4 from "../../images/rascals/rascals4.jpg"
import rascal5 from "../../images/rascals/rascals5.jpg"
import rascal6 from "../../images/rascals/rascals6.jpg"
import bordertop from "../../images/sneakpeek-top.png"
import borderbot from "../../images/sneakpeek-bot.png"
// import whatsup1 from "../../images/pathfinders/whatsup1.png"
// import whatsup2 from "../../images/pathfinders/whatsup2.png"
// import whatsup3 from "../../images/pathfinders/whatsup3.png"
// import bordertl from "../../images/updates-tl.png"
// import bordertr from "../../images/updates-tr.png"
// import borderbl from "../../images/updates-bl.png"
// import borderbr from "../../images/updates-br.png"
import border from "../../images/faq-top.png"

import axios from 'axios'
// import $ from 'jquery'
import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import './Rascals.css'

export default function Rascals() {
    const [showVideoPlayer, setShowVideoPlayer] = useState(false)
    const handleCloseVideoPlayer = () => setShowVideoPlayer(false)
    const handleShowVideoPlayer = () => setShowVideoPlayer(true)

    const sneak = [
        {
            id: 0,
            thumbnail: rascal1,
            link: "https://twitter.com/ismaeljerusalem/status/1574014285503922176",
            title: ""
        },
        {
            id: 1,
            thumbnail: rascal2,
            link: "https://twitter.com/ownlyio/status/1574008009646227456",
            title: ""
        },
        {
            id: 2,
            thumbnail: rascal3,
            link: "https://twitter.com/mustachioverse/status/1572478751598063617",
            title: ""
        },
        {
            id: 3,
            thumbnail: rascal4,
            link: "https://twitter.com/mustachioverse/status/1571741641995853824",
            title: ""
        },
        {
            id: 4,
            thumbnail: rascal5,
            link: "https://twitter.com/ricozuniga/status/1570485388309057536",
            title: "",
        },
        {
            id: 5,
            thumbnail: rascal6,
            link: "https://twitter.com/mustachioverse/status/1565634368865193990",
            title: "",
        }
    ]

    // const [showMintingNotYetAvailable, setShowMintingNotYetAvailable] = useState(false);
    // const handleCloseMintingNotYetAvailable = () => setShowMintingNotYetAvailable(false);
    // const handleShowMintingNotYetAvailable = () => setShowMintingNotYetAvailable(true);

    // let triggerMintButton = function() {
    //     $(".mint-marauder").trigger("click");
    // };

    return (
        <div>
            <section>
                <div className="rascals-banner h-screen py-4" style={{"backgroundImage": `url(${rascals})`}}>
                    <div className="arch-wrap d-flex flex-column h-100 justify-content-center align-items-center">
                        <div className="arch-logo">
                            <img src={rascalsLogo} alt="Rascals Logo" className="w-100" />
                        </div>
                        <p className="arch-text font-size-110 font-size-sm-130 font-size-lg-160 text-center text-white line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>

                        <button className="arch-play-btn btn" onClick={handleShowVideoPlayer}>
                            <i className="fa-solid fa-play font-size-180 font-size-sm-210 font-size-md-250 font-size-lg-300 text-white"></i>
                        </button>

                        <div className="arch-btns d-flex flex-wrap">
                            <div>
                                <a href="https://ownly.market/rascals" target="_blank" rel="noreferrer" className="btn font-size-110 font-size-sm-120 font-size-lg-130 text-center line-height-150 btn-custom-2 mx-2" style={{"width":"300px"}}>VIEW RASCALS</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-8 order-1 order-lg-0">
                            <div className="pe-lg-3">
                                <p className="gotham-black text-center text-lg-start font-size-240 font-size-md-270 mb-4">What are the Rascals?</p>

                                <div className="bg-color-1 w-100 mb-4" style={{"height":"1px"}}></div>

                                <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">There are three archetypes of Mustachios in the land of MustachioVerse and the Genesis set from 1-100 are called Mustachio Pathfinders with a maximum supply of 100 Mustachio Pathfinder NFTs. These Pathfinders created the route and discovered the land of MustachioVerse in the first-ever NFT Tales called <a href="https://tales.mustachioverse.com" className="link-color-4" target="_blank" rel="noreferrer">The Sages Rant</a>.</p>
                                <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2 pb-3">Each Pathfinder comes with an intricately hand-drawn 2D PFP and 3D playable character by Boii Mustache, the creator of MustachioVerse. You can use your 3D Mustachio Marauder as your in-game character in our upcoming Play-and-Earn NFT Game, Mustachio Quest.</p>

                                {/* <div className="text-center text-lg-start">
                                    <button className="btn btn-custom-2 font-size-120 px-5 py-2 fw-bold" style={{"width":"initial", "marginRight": "5px"}} onClick={props.mintBtn}>MINT NOW!</button>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 order-0 order-lg-1 mb-5 mb-lg-0">
                            <div className="ps-lg-4">
                                <div className="mx-4 mx-sm-5 mx-lg-0 px-sm-5 px-lg-0">
                                    <div className="mx-md-5 mx-lg-0 px-md-5 px-lg-0">
                                        <div className="background-image-cover w-100" style={{"paddingTop":"100%", "borderRadius":"50%", "backgroundImage":"url(" + rascalsPic + ")"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="background-image-cover py-5" style={{"backgroundImage":"url(" + banner + ")"}}>
                    <div className="container py-4">
                        <p className="gotham-black text-center font-size-200 text-white mb-4">What do I get when I own a Rascal?</p>

                        <div className="row justify-content-center py-5">
                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-solid fa-cubes font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">3D Playable Character</p>
                                        <p className="text-center mb-0">Use your 3D Rascal NFT as your own character in our 3D open-world game, Mustachio Quest. Fulfill quests, collect artifacts, and play your heart out!</p>
                                    </div>
                                </div>
                            </div>

                            

                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-solid fa-calendar-star font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Exclusive IRL, URL and IMV Events</p>
                                        <p className="text-center mb-0">Get an exclusive pass on all of our IRL, URL, and IMV events! Simply show your Mustachio Rascal NFT and you're good to go!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-solid fa-mobile-notch font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Augmented Reality Filter</p>
                                        <p className="text-center mb-0">#CanYourJPEG immerse in your day-to-day activities? Well, these Mustachios can! Try out our <a href="https://ownly.io/ar" target="_blank" rel="noreferrer" className="link-color-4" >Mustachio filter on Instagram</a> to see ‘em dancing in IRL.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-solid fa-image-polaroid-user font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Visualizer Experience</p>
                                        <p className="text-center mb-0">Test out your minted Mustachio Rascal/s using your Metamask Wallet. Your Mustachio Rascals awaits you, wanderer!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-brands fa-discord font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Exclusive Discord Channel</p>
                                        <p className="text-center mb-0">Get on board our exclusive Mustachios community on Discord where you can network and make friends with your fellow Mustachios.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 pb-4">
                                <div className="card border-0 border-radius-0 h-100">
                                    <div className="card-body p-5">
                                        <div className="d-flex justify-content-center mb-4">
                                            <div className="bg-dark d-flex align-items-center justify-content-center" style={{"borderRadius":"50%", "width":"80px", "height":"80px"}}>
                                                <i className="fa-solid fa-vr-cardboard font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Generative 3D Art</p>
                                        <p className="text-center mb-0">Play with your newly minted Mustachio Rascal in our game, Mustachio Quest, by minting a random mix of 3D qualities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="progress">
                    <div className="container py-5">
                        <div className="row justify-content-center align-items-start">
                            <p className="sneakpeeks-title gotham-black text-white text-center font-size-200 mb-5">The Rascals Gallery</p>
                            { sneak.map(x => (
                                <div className="col-12 col-sm-6 col-xl-4 mb-3" key={x.id}>
                                    <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href={x.link} target="_blank" rel="noreferrer">
                                        <div className="sneakpeek-thumbnail mb-3 background-image-cover" style={{"background-image":"url('" + x.thumbnail + "')"}}></div>
                                    </a>
                                    {/* <p className="cursor-pointer mb-3">
                                        <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href={x.link} target="_blank" rel="noreferrer">
                                            {x.title}
                                        </a>
                                    </p> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Borders */}
                    <img src={bordertop} className="sneakpeek-border sneakpeek-top" alt="Border Top" />
                    <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
                </section>

                {/* <section id="nft">
                    <div className="container pt-5">
                        <div className="row justify-content-center align-items-start">
                            <p className="sneakpeeks-title gotham-black text-white text-center font-size-200 mb-5">What is Up with the Pathfinders?</p>

                            <div className="col-12 col-sm-6 col-xl-4 mb-3 px-4">
                                <a href="https://medium.com/ownlyio/mustachio-quest-updates-4-closed-testing-with-genesis-holders-c8984693605d" target="_blank" rel="noreferrer">
                                    <div className="cursor-pointer mb-3">
                                        <img src={whatsup1} className="w-100" alt="Mustachio Quest Updates #4: Closed Testing with Genesis Holders" />
                                    </div>
                                </a>
                                <p className="cursor-pointer text-center mb-3">
                                    <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href="https://medium.com/ownlyio/mustachio-quest-updates-4-closed-testing-with-genesis-holders-c8984693605d" target="_blank" rel="noreferrer">
                                        Mustachio Quest Updates #4: Closed Testing with Genesis Holders
                                    </a>
                                </p>
                            </div>

                            <div className="col-12 col-sm-6 col-xl-4 mb-3 px-4">
                                <a href="https://twitter.com/ownlyio/status/1513403976749879301" target="_blank" rel="noreferrer">
                                    <div className="cursor-pointer mb-3">
                                        <img src={whatsup2} className="w-100" alt="3D Mustachio Pathfinders are now complete!" />
                                    </div>
                                </a>
                                <p className="cursor-pointer text-center mb-3">
                                    <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href="https://twitter.com/ownlyio/status/1513403976749879301" target="_blank" rel="noreferrer">
                                        3D Mustachio Pathfinders are now complete!
                                    </a>
                                </p>
                            </div>

                            <div className="col-12 col-sm-6 col-xl-4 mb-3 px-4">
                                <a href="https://twitter.com/hashtag/CanYourJPEG" target="_blank" rel="noreferrer">
                                    <div className="cursor-pointer mb-3">
                                        <img src={whatsup3} className="w-100" alt="The #CanYourJPEG game has started and the Pathfinders are winning!" />
                                    </div>
                                </a>
                                <p className="cursor-pointer text-center mb-3">
                                    <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href="https://twitter.com/hashtag/CanYourJPEG" target="_blank" rel="noreferrer">
                                        The #CanYourJPEG game has started and the Pathfinders are winning!
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Borders */}
                    {/* <img src={bordertl} className="mq-table-border mq-table-tl" alt="Border Top Left" />
                    <img src={bordertr} className="mq-table-border mq-table-tr" alt="Border Top Right" />
                    <img src={borderbl} className="mq-table-border mq-table-bl" alt="Border Bottom Left" />
                    <img src={borderbr} className="mq-table-border mq-table-br" alt="Border Bottom Right" />
                </section> */}

                <section id="faqs">
                    <div className="container">
                        <p className="faq-title gotham-black text-center text-white font-size-170 mb-5">FREQUENTLY ASKED QUESTIONS</p>

                        <div className="accordion accordion-flush" id="app-faqs-accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-1">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                        What is a Mustachio?
                                    </button>
                                </h2>
                                <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented Boii Mustache, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings. Now, the concept is solidified through our play-and-earn game, Mustachio Quest, where our Mustachio holders can fulfill quests in an open world NFT game as their 3D Mustachio avatar.</p>
                                        <p className="font-size-120 gotham-light">There will be a total of 300 Mustachios that come with 2D Mustachio NFTs. Our first 100 Mustachios from our Genesis set are called <a className="font-size-100 gotham-light link-color-1" href="https://mustachioverse.com/pathfinders">Mustachio Pathfinders</a>. Our second generation of Mustachios from 101-300 are called <a className="font-size-100 gotham-light link-color-1" href="https://mustachioverse.com/marauders">Mustachio Marauders</a>. There will be additional 10,000 3D generative Mustachios soon to launch called the Mustachio Rascals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-2">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                        How do I get a Mustachio Rascal?
                                    </button>
                                </h2>
                                <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">We are on the process of building the Mustachio Rascals, but it will be available this Q3 2022. You can opt in on our newsletter form above to be the first to be notified when the rascals are out.</p>

                                        {/* <p className="font-size-120">To get a Mustachio Pathfinder NFT:</p>
                                        <ol>
                                            <li className="font-size-120 gotham-light">Click MINT NOW at the <a className="font-size-100 gotham-light link-color-1" href="#nft" target="_blank">Archetypes Table in the Home Page</a>.</li>
                                            <li className="font-size-120 gotham-light">Connect your MetaMask wallet (Ethereum Network).</li>
                                            <li className="font-size-120 gotham-light">Mint your Mustachio Pathfinder and pay the gas fee.</li>
                                            <li className="font-size-120 gotham-light">Check your OpenSea or  <a className="font-size-100 gotham-light link-color-1" href="https://ownly.market" target="_blank" rel="noreferrer">Ownly Market</a> account, and there you go! You now OWN a Mustachio Pathfinder.</li>
                                        </ol>
                                        <a className="font-size-120 gotham-light link-color-1" href="https://ownly.io/htmym" target="_blank" rel="noreferrer">Click here for a more detailed instruction.</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-4">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                        How many Mustachio Rascals are there?
                                    </button>
                                </h2>
                                <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">Since the Mustachio Rascals are Generative 3D Art, we will release a total of <span className="fw-bold">10,000 Mustachio Rascals</span> ready to be minted.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-5">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                        Are there discounts if I use $OWN as payment?
                                    </button>
                                </h2>
                                <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">A Mustachio Pathfinder costs 0.4 ETH if you pay in full price. Since the Pathfinders are available in the Ethereum Network, there are no discounts when you use $OWN as payment.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-7">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-7">
                                        Why is the gas fee so high?
                                    </button>
                                </h2>
                                <div id="flush-collapse-7" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">A gas fee is required to execute transactions within the Ethereum network. If your gas fee is high, you can try to lower your gas fees in your transaction settings. The lower the gas fee, the longer it takes for the transactions to process.</p>
                                        <p className="font-size-120 gotham-light">Here’s the Etherscan link to our previously minted Mustachios for your reference on our past transactions: <a href="https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5" className="link-color-1" target="_blank" rel="noreferrer">https://etherscan.io/address/0x9e7a3a2...c544ef07620e5</a></p>
                                        <p className="font-size-120 gotham-light">You can also monitor gas prices daily as they fluctuate here: <a href="https://ethgasstation.info/index.php" className="link-color-1" target="_blank" rel="noreferrer">https://ethgasstation.info/index.php</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-8">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-8">
                                        How do I contact the Mustachio team?
                                    </button>
                                </h2>
                                <div id="flush-collapse-8" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io" className="link-color-1">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                                        <p className="font-size-120 gotham-light">Facebook: <a href="https://www.facebook.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://www.facebook.com/mustachioverse</a></p>
                                        <p className="font-size-120 gotham-light">Instagram: <a href="https://www.instagram.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                                        <p className="font-size-120 gotham-light">Twitter: <a href="https://twitter.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                                        <p className="font-size-120 gotham-light">Telegram: <a href="https://ownly.io/telegram" className="link-color-1" target="_blank" rel="noreferrer">https://ownly.io/telegram</a></p>
                                        <p className="font-size-120 gotham-light">Discord: <a href="https://mustachioverse.com/discord" className="link-color-1" target="_blank" rel="noreferrer">https://mustachioverse.com/discord</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-header-9">
                                    <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-9">
                                        What else can I do with my Mustachios?
                                    </button>
                                </h2>
                                <div id="flush-collapse-9" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body">
                                        <p className="font-size-120 gotham-light">There are so many possibilities on how you can make use of your Mustachio!</p>
                                        <p className="font-size-120 gotham-light">For the Mustachio Pathfinders and Mustachio Marauders, they get a playable 3D avatar version of their 2D Mustachio. They also get a quarterly OWN token airdrop until our marketing and community airdrops wallet runs out.</p>
                                        <p className="font-size-120 gotham-light">Aside from partaking in our play-and-earn NFT game, Mustachio Quest, you can also own 9 single-edition artifacts at <a href="https://ownly.market/sagesrantcollectibles" className="link-color-1" target="_blank" rel="noreferrer">The Sages Rant Collectibles</a>. The Sages Rant is our official NFT Tales with 10 chapters that reveal the stories behind the genesis set of Mustachios on their quest to find the 9 valuable artifacts that are collectively called the Grooming Kit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Borders */}
                    <img src={border} className="faqs-border" alt="Border Top" />
                </section>

                {/* <section id="cta">
                    <div className="container text-center py-4">
                        <p className="gotham-black text-color-1 font-size-150 mb-5 px-lg-5">Mint your Mustachio Pathfinder and get your own 3D Playable Character for our upcoming Play-and-Earn NFT Game, Mustachio Quest.</p>
                        <button className="btn btn-custom-2 gotham-black font-size-140" onClick={props.mintBtn}>MINT NOW</button>
                    </div>
                </section> */}
            </section>

            {/* <Modal show={showMintingNotYetAvailable} onHide={handleCloseMintingNotYetAvailable} centered>
                <Modal.Body className="px-4 position-relative" style={{"backgroundColor":"#1c5091", "borderRadius":"0.2rem", "border":"2px solid white"}}>
                    <div className="position-absolute" style={{"top":"15px", "right":"20px", "zIndex":"5"}}>
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseMintingNotYetAvailable} />
                    </div>

                    <div className="text-center pt-4">
                        <img className="mt-2" src={marauders} width="220" alt="Mustachio Pathfinders" />
                    </div>

                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-140 px-md-5 pt-3 mb-4">Minting is not yet available.</p>
                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-100 px-md-5 pb-4 mb-2">Mintlisted/Vigilantes - June 09, 2022<br/>Public Sale - June 10, 2022</p>

                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <button className="btn btn-custom-2 gotham-black font-size-110 py-2 mb-2 px-5" style={{"width":"initial"}} onClick={handleCloseMintingNotYetAvailable}>Okay</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> */}

            <Modal className="no-border" show={showVideoPlayer} onHide={handleCloseVideoPlayer} backdrop="static" keyboard={false} size="xl" centered>
                <Modal.Body className="p-0">
                    <div className="position-relative">
                        <button className="video-close-btn text-white font-size-80 font-size-sm-100 btn fw-bold" onClick={handleCloseVideoPlayer}>X</button>
                        <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/qKziayF7Cic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
