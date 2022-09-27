import './App.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Discord } from './components/ShortLinks'
import $ from 'jquery'
import * as smoothscroll from "smoothscroll-polyfill"

// components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import NFT from './components/NFT/NFT'
import Game from './components/Game/Game'
import ARSection from './components/ARSection/ARSection'
import Tales from './components/Tales/Tales'
import Visualizer from './components/Visualizer/Visualizer'
import Table from './components/Table/Table'
import Roadmap from './components/Roadmap/Roadmap'
import Gmfrens from './components/Gmfrens/Gmfrens'
import Team from './components/Team/Team'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

// components /game
import BannerGame from './components/Banner/BannerGame'
import Features from './components/Features/Features'
import SneakPeek from './components/SneakPeek/SneakPeek'
import Updates from './components/Updates/Updates'

// pages
import Pathfinders from './components/Pathfinders/Pathfinders'
import Marauders from './components/Marauders/Marauders'
import Rascals from './components/Rascals/Rascals'
import AR from './components/AR/AR'
import Artist from './components/Artist/Artist'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

// Utils
// import contract from './utils/contractDev'
import contract from './utils/contract'
import getCurrentNetwork from './utils/getCurrentNetwork'
import connectToMetaMaskEth  from './utils/connectToMetaMaskEth'

import loading from './images/loading-mustachio.gif'
import metamask from './images/metamask.png'

// smooth scrolling for safari
smoothscroll.polyfill()

export default function App() {
    // State variables for initialization
    // const [walletAddress, setWallet] = useState("")
    // const [status, setStatus] = useState(0)
    // const [network, setNetwork] = useState("")
    // const [netStatus, setNetStatus] = useState(0)
    const [tokenId, setTokenId] = useState(0)

    // State variables for minting
    const [txHash, setTxHash] = useState("")
    const [txError, setTxError] = useState("")
    const [txData, setTxData] = useState([])

    // Other Variables (Change upon deployment)
    // const explorerUrl = "https://rinkeby.etherscan.io/tx/"
    const explorerUrl = "https://etherscan.io/tx/"
    // const contractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94" // Rinkeby
    const contractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" // MainNet
    // const openSeaUrl = "https://testnets.opensea.io/assets/" + contractAddress + "/"
    const openSeaUrl = "https://opensea.io/assets/" + contractAddress + "/"
    const marketplaceUrl = "https://ownly.market/pathfinders2d/" // (Production only)

    // Modals
    const [showMetamaskInstall, setShowMetamaskInstall] = useState(false);
    const handleCloseMetamaskInstall = () => setShowMetamaskInstall(false);
    const handleShowMetamaskInstall = () => setShowMetamaskInstall(true);
    const [showWrongNetwork, setShowWrongNetwork] = useState(false);
    const handleCloseWrongNetwork = () => setShowWrongNetwork(false);
    const handleShowWrongNetwork = () => setShowWrongNetwork(true);
    const [showOnProcess, setShowOnProcess] = useState(false);
    const handleCloseOnProcess = () => setShowOnProcess(false);
    const handleShowOnProcess = () => setShowOnProcess(true);
    const [showOnError, setShowOnError] = useState(false);
    const handleCloseOnError = () => setShowOnError(false);
    const handleShowOnError = () => setShowOnError(true);
    const [showOnSuccess, setShowOnSuccess] = useState(false);
    const handleCloseOnSuccess = () => setShowOnSuccess(false);
    const handleShowOnSuccess = () => setShowOnSuccess(true);
    const [showSoldOut, setShowSoldOut] = useState(false);
    const handleCloseSoldOut = () => setShowSoldOut(false);
    const handleShowSoldOut = () => setShowSoldOut(true);

    // Initialize wallet address and network upon button click
    // Then mint afterwards
    const initUtilsAndMint = async () => {
        // const walletResponse = await getCurrentWalletConnected()
        // const networkResponse = await getCurrentNetwork()
        // setStatus(walletResponse.status)
        // setWallet(walletResponse.address)
        // setNetwork(networkResponse.network)
        // setNetStatus(networkResponse.netStatus)
        //
        // if (status === 1) {
        //     // if (network === "rinkeby") {
        //     if (network === "main") {
        //         mintMustachio()
        //     } else {
        //         handleShowWrongNetwork()
        //     }
        // } else if (status === 0) {
        //     handleShowMetamaskInstall()
        // }

        let address = await connectToMetaMaskEth();

        if(address) {
            mintMustachio(address)
        }
    }

    // Event Listener for Metamask Account Change
    // const addWalletListener = () => {
    //     if (window.ethereum) {
    //         window.ethereum.on("accountsChanged", (accounts) => {
    //             if (accounts.length > 0) {
    //                 setWallet(accounts[0])
    //                 setStatus(1)
    //             } else {
    //                 setWallet("");
    //                 setStatus(2)
    //             }
    //         })
    //     } else {
    //       setStatus(0);
    //     }
    // }

    // // Event Listener for Metamask Network Change
    // const addNetworkListener = () => {
    //     if (window.ethereum) {
    //         window.ethereum.on('chainChanged', async function(networkIdMM){
    //             const networkResponseOnLoad = await getCurrentNetwork(1)
    //             setNetwork(networkResponseOnLoad.network)
    //             setNetStatus(networkResponseOnLoad.netStatus)
    //         });            
    //     }
    // }

    // shorten addresses and/or txHashes
    // const shortenAddress = (address, prefixCount, postfixCount) => {
    //     let prefix = address.substr(0, prefixCount);
    //     let postfix = address.substr(address.length - postfixCount, address.length);
    
    //     return prefix + "..." + postfix;
    // };

    // Mint
    const mintMustachio = async (address) => {
        const lastId = await contract.methods.getLastMintedTokenId().call()

        if (lastId < 100) {
            const mintPrice = await contract.methods.getMintPrice().call()
            await contract.methods.mintMustachio().send({
                from: address,
                value: mintPrice,
                type: '0x2',
            })
            .on('transactionHash', function(hash){
                handleShowOnProcess()
            })
            .on('error', function(error) {
                handleCloseOnProcess()
                handleShowOnError()
                setTxError(error.message)
            })
            .then(async function(receipt) {
                handleCloseOnProcess()
                handleShowOnSuccess()
                setTxHash(receipt.transactionHash)
                setTxData(receipt)
                
                // Get TokenID
                const lastTokenId = await contract.methods.getLastMintedTokenId().call()
                setTokenId(lastTokenId)
            })
        } else {
            handleShowSoldOut()
        }
    } 

    useEffect(() => {
        // async function initUtilsOnLoad() {
        //     const {address, status} = await getCurrentWalletConnected();
        //     const {network, netStatus} = await getCurrentNetwork();
        //     setWallet(address)
        //     setStatus(status)
        //     setNetwork(network)
        //     setNetStatus(netStatus)
        //
        //     if (status === 0) {
        //         handleShowMetamaskInstall()
        //     }
        // }
        //
        // initUtilsOnLoad()
        // addWalletListener()
        // addNetworkListener()
    }, [])

    $(document).ready(function(){
        if (window.location.hash !== "#rewards") $(this).scrollTop(0)

        // scroll variables
        let background = $('#first-section')
        let portal = $('.portal-wrap')
        let mustachios = $('.mustachio-wrap')
        let logo = $('.logo')
        let content = $('.banner-content')
        let landscape = $('.landscape')
        let landscapeContent = $('.text-3')
        let discordBtn = $('.join-discord')

        let logoTop = logo.offset().top
        // let mustachioWidth = parseFloat(mustachios.css("width"))

        // mobile
        let mobileBackground = $('#mobile-first-section')
        let mobilePortal = $('.mobile-portal-wrap')
        let mobileMustachios = $('.mobile-mustachio-wrap')
        let mobileLogo = $('.mobile-logo')
        let mobileContent = $('.mobile-banner-content')
        let mobileLandscape = $('.mobile-landscape')
        let mobileLandscapeContent = $('.mobile-2-title')
        let mobileDiscordBtn = $('.mobile-join-discord')

        let mobileLogoTop = mobileLogo.offset().top
        let mobileMustachioWidth = parseFloat(mobileMustachios.css("width"))

        $(window).on('scroll', () => {
            let valueY = $(window).scrollTop()

            // PC
            background.css("background-position", 'center ' + (valueY * 0.2) + 'px')
            logo.css({
                "opacity": 1 - (valueY * 0.007),
                // "width": logoWidth - (valueY * 0.5) + 'px',
                // "top": logoTop + (valueY * 0.7) + 'px'
            })

            mustachios.css({
                "opacity": 1 - (valueY * 0.01),
                // "width": mustachioWidth - (valueY * 1.2) + "px",
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

        // disable pointer events for image
        $("img").mousedown(function(){
            return false;
        })
     });

    return (
        <Router basename={process.env.PUBLIC_URL}>
            {/*<div className="position-fixed w-100" style={{"zIndex":"99999", "top":"0", "left":"0", "backgroundColor":"#ff9f42"}}>*/}
            {/*    <div className="container text-center text-black font-size-100 fw-bold py-2">Public Mint Date: Jun 10, 2022 - 8:00PM (SGT)</div>*/}
            {/*</div>*/}

            <Navbar mintBtn={initUtilsAndMint} /> 
            <Switch>
                <Route exact path="/">
                    <Hero />
                    <NFT />
                    <Game />
                    <ARSection />
                    <Tales />
                    <Visualizer />
                    <Table mintBtn={initUtilsAndMint} />
                    <Roadmap />
                    <Gmfrens />
                    <Team />
                    <FAQ />
                    <CTA />
                </Route>
                <Route exact path="/discord" component={Discord}></Route>
                <Route exact path="/pathfinders">
                    <Pathfinders mintBtn={initUtilsAndMint} />
                </Route>
                <Route exact path="/marauders">
                    <Marauders />
                </Route>
                <Route exact path="/rascals">
                    <Rascals />
                </Route>
                <Route exact path="/ar">
                    <AR />
                </Route>
                <Route exact path="/game"> 
                    <BannerGame />
                    <Features />
                    <Updates />
                    <Roadmap />
                    <SneakPeek />
                    <Table mintBtn={initUtilsAndMint} />
                    <FAQ />
                    <CTA />
                </Route>
                <Route exact path="/artist">
                    <Artist />
                </Route>
                <Route exact path="/privacy-policy">
                    <PrivacyPolicy />
                </Route>
            </Switch>
            <Footer />

            {/* Modal for soldout */}
            <Modal show={showSoldOut} onHide={handleCloseSoldOut} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="yellow" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="app-soldout-modal-content text-center font-andes text-lg"><b style={{fontSize: "1.5rem"}}>SOLD OUT!</b><br />All 100 Mustachios have gone through The Portal. Watch out for the next generation of mustached beings.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseSoldOut}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 

            {/* Modal for No Metamask */}
            <Modal show={showMetamaskInstall} onHide={handleCloseMetamaskInstall} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center">
                        <img src={metamask} alt="Metamask logo" />
                    </div>
                    <p className="app-metamask-modal-content text-center font-andes text-lg">Metamask is currently not installed</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseMetamaskInstall}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
                        Install Metamask
                    </Button>
                </Modal.Footer>
            </Modal>     

            {/* Modal for incorrect network */}
            <Modal show={showWrongNetwork} onHide={handleCloseWrongNetwork} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faExclamationCircle} />
                    </div>
                    {/* <p className="app-network-modal-content text-center font-andes text-lg">Please connect to Rinkeby network</p> */}
                    <p className="app-network-modal-content text-center font-andes text-lg">Please connect to Ethereum Mainnet</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseWrongNetwork}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    

            {/* Modal for pending transaction */}
            <Modal show={showOnProcess} onHide={handleCloseOnProcess} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <img src={loading} alt="Loading..." style={{width: "150px", margin: "0 auto"}} />
                    </div>
                    <p className="app-pending-modal-content text-center font-andes text-lg"><span className="app-loading-big-letter">O</span>, what great honour. Put on your armor and hold your fire, dear friend, for we are minting your Mustachio.</p>
                </Modal.Body>
            </Modal>    

            {/* Modal for error transaction */}
            <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="app-error-modal-content text-center font-andes text-lg">Error: {txError}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    

            {/* Modal for successful transaction */}
            <Modal show={showOnSuccess} onHide={handleCloseOnSuccess} backdrop="static" keyboard={false} size="md" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="app-success-modal-content text-center font-andes text-lg">Your Mustachio has been successfully minted! You're ready to join the quest to find the Golden Mustache.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnSuccess}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open(explorerUrl + txHash, '_blank').focus()}>
                        View on EtherScan
                    </Button>
                    <Button variant="primary" onClick={() => window.open(openSeaUrl + tokenId, '_blank').focus()}>
                        View on OpenSea
                    </Button>
                    <Button variant="primary" onClick={() => window.open(marketplaceUrl + tokenId, '_blank').focus()}>
                        View on Marketplace
                    </Button>
                </Modal.Footer>
            </Modal>
        </Router>
    );
}
