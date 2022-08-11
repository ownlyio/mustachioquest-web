// images
import banner from '../../images/banner.jpg'
import rascals from '../../images/rascals-cover.png'
import rascalsLogo from '../../images/MQ_rascals.png'
// import pathfinder1 from "../../images/pathfinders/pathfinder1.png";
// import pathfinder2 from "../../images/pathfinders/pathfinder2.png";
// import pathfinder3 from "../../images/pathfinders/pathfinder3.png";
// import pathfinder4 from "../../images/pathfinders/pathfinder4.png";
// import pathfinder5 from "../../images/pathfinders/pathfinder5.png";
// import pathfinder6 from "../../images/pathfinders/pathfinder6.png";
// import bordertop from "../../images/sneakpeek-top.png";
// import borderbot from "../../images/sneakpeek-bot.png";
// import whatsup1 from "../../images/pathfinders/whatsup1.png";
// import whatsup2 from "../../images/pathfinders/whatsup2.png";
// import whatsup3 from "../../images/pathfinders/whatsup3.png";
// import bordertl from "../../images/updates-tl.png";
// import bordertr from "../../images/updates-tr.png";
// import borderbl from "../../images/updates-bl.png";
// import borderbr from "../../images/updates-br.png";
import border from "../../images/faq-top.png";

import axios from 'axios'
// import $ from 'jquery'
import {Button, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import './Rascals.css'

export default function Rascals() {
    const [emailAdd, setEmailAdd] = useState("")
    const [showSubscribed, setShowSubscribed] = useState(false);
    const handleCloseSubscribed = () => setShowSubscribed(false);
    const handleShowSubscribed = () => setShowSubscribed(true);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const handleCloseErrorEmail = () => setShowErrorEmail(false);
    const handleShowErrorEmail = () => setShowErrorEmail(true);

    const submitForm = (e) => {
        e.preventDefault()

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
        if (re.test(emailAdd)) {
            axios.post('https://ownly.market/api/email-signup', {email: emailAdd, type: 'rascals'}).then(res => {
                document.getElementById("emailAdd").value = ""
                document.getElementById("agreement").checked = false
                setEmailAdd("")
                handleShowSubscribed()
            })
        } else {
            handleShowErrorEmail()
        }
    }

    // const sneak = [
    //     {
    //         id: 0,
    //         thumbnail: pathfinder1,
    //         link: "#",
    //         title: ""
    //     },
    //     {
    //         id: 1,
    //         thumbnail: pathfinder2,
    //         link: "#",
    //         title: ""
    //     },
    //     {
    //         id: 2,
    //         thumbnail: pathfinder3,
    //         link: "#",
    //         title: ""
    //     },
    //     {
    //         id: 3,
    //         thumbnail: pathfinder4,
    //         link: "#",
    //         title: ""
    //     },
    //     {
    //         id: 4,
    //         thumbnail: pathfinder5,
    //         link: "#",
    //         title: "",
    //     },
    //     {
    //         id: 5,
    //         thumbnail: pathfinder6,
    //         link: "#",
    //         title: "",
    //     }
    // ]

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

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <p className="text-white font-size-100 font-size-sm-120 font-size-lg-140 text-center px-md-5 mb-4">Wanna be the first to get notified when we announce the release of the Mustachio Rascals? Join our VIP List to be first to know.</p>
                                    <div className="px-lg-5 mx-lg-5">
                                        <form className="rascals-form" onSubmit={submitForm}>
                                            <div className="d-flex align-items-center flex-wrap mb-3">
                                                <div className="rascals-form rascals-input-wrapper d-flex flex-fill justify-content-center">
                                                    <input id="emailAdd" type="email" name="email_address" className="form-control d-block px-3 py-1 font-size-100" style={{"borderRadius": "5px 0 0 5px"}} placeholder="Your email address" required onChange={(e) => setEmailAdd(e.target.value)} />
                                                </div>
                                                <div className="rascals-form rascals-btn-form-wrapper">
                                                    <button type="submit" className="btn btn-custom-2 px-3 py-1 font-size-100" style={{"width": "200px","letterSpacing": "0.05em", "borderRadius": "0 5px 5px 0"}}>LET ME IN!</button>
                                                </div>
                                            </div>
                                            <div className="form-check d-flex align-items-start mb-3">
                                                <div>
                                                    <input className="form-check-input" type="checkbox" id="agreement" required />
                                                </div>
                                                <div className="ps-1">
                                                    <label className="form-check-label font-size-90 text-white" for="agreement">
                                                    You consent to receive updates and news from us by signing up for our newsletter. You may opt out of receiving our marketing emails at any time. Your email address will be saved in our database and not given to any third parties.
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container py-5">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-8 order-1 order-lg-0">
                            <div className="pe-lg-3">
                                <p className="gotham-black text-center text-lg-start font-size-240 font-size-md-270 mb-4">What are the Pathfinders?</p>

                                <div className="bg-color-1 w-100 mb-4" style={{"height":"1px"}}></div>

                                <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">There are three archetypes of Mustachios in the land of MustachioVerse and the Genesis set from 1-100 are called Mustachio Pathfinders with a maximum supply of 100 Mustachio Pathfinder NFTs. These Pathfinders created the route and discovered the land of MustachioVerse in the first-ever NFT Tales called <a href="https://tales.mustachioverse.com" className="link-color-1" target="_blank" rel="noreferrer">The Sages Rant</a>.</p>
                                <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2 pb-3">Each Pathfinder comes with an intricately hand-drawn 2D PFP and 3D playable character by Boii Mustache, the creator of MustachioVerse. You can use your 3D Mustachio Marauder as your in-game character in our upcoming Play-and-Earn NFT Game, Mustachio Quest.</p>

                                <div className="text-center text-lg-start">
                                    <button className="btn btn-custom-2 font-size-120 px-5 py-2 fw-bold" style={{"width":"initial", "marginRight": "5px"}} onClick={props.mintBtn}>MINT NOW!</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 order-0 order-lg-1 mb-5 mb-lg-0">
                            <div className="ps-lg-4">
                                <div className="mx-4 mx-sm-5 mx-lg-0 px-sm-5 px-lg-0">
                                    <div className="mx-md-5 mx-lg-0 px-md-5 px-lg-0">
                                        <div className="background-image-cover w-100" style={{"paddingTop":"100%", "borderRadius":"50%", "backgroundImage":"url(" + grim + ")"}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

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
                                        <p className="text-center mb-0">Use your 3D Marauder NFT as your own character in our 3D open-world game, Mustachio Quest. Fulfill quests, collect artifacts, and play your heart out!</p>
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
                                        <p className="text-center mb-0">Test out your minted Mustachio Marauder/s using your Metamask Wallet. Your Mustachio Marauder awaits you, wanderer!</p>
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
                                                <i className="fa-solid fa-tags font-size-180 text-white"></i>
                                            </div>
                                        </div>

                                        <p className="text-center fw-bold font-size-140">Use $OWN, Get a Discount</p>
                                        <p className="text-center mb-0">You get 20% discount on our Mustachio Marauders when you use your $OWN tokens as payment. Got a mintlist slot? Even more! You get 40% off!</p>
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

                {/* <section id="progress">
                    <div className="container py-5">
                        <div className="row justify-content-center align-items-start">
                            <p className="sneakpeeks-title gotham-black text-white text-center font-size-200 mb-5">The Pathfinders Gallery</p>
                            { sneak.map(x => (
                                <div className="col-12 col-sm-6 col-xl-4 mb-3" key={x.id}>
                                    <div className="sneakpeek-thumbnail mb-3 background-image-cover" style={{"background-image":"url('" + x.thumbnail + "')"}}></div>
                                    <p className="cursor-pointer mb-3">
                                        <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href={x.link} target="_blank" rel="noreferrer">
                                            {x.title}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Borders */}
                    {/* <img src={bordertop} className="sneakpeek-border sneakpeek-top" alt="Border Top" />
                    <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
                </section> */}

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

            {/* Modal for successful subscription */}
            <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 

            {/* Modal for error in email */}
            <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 
        </div>
    )
}
