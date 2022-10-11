import './App.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Discord, Pathfinders, Marauders, Rascals } from './components/ShortLinks'
import $ from 'jquery'
import * as smoothscroll from "smoothscroll-polyfill"

// components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutRascals from './components/AboutRascals/AboutRascals'
import NFT from './components/NFT/NFT'
import Utilities from './components/Utilities/Utilities'
import ARSection from './components/ARSection/ARSection'
import Tales from './components/Tales/Tales'
import Game from './components/Game/Game'
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
// import Pathfinders from './components/Pathfinders/Pathfinders'
// import Marauders from './components/Marauders/Marauders'
// import Rascals from './components/Rascals/Rascals'
import AR from './components/AR/AR'
import Artist from './components/Artist/Artist'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

// Utils
// import contract from './utils/contractDev'
// import contract from './utils/contract'
// import getCurrentNetwork from './utils/getCurrentNetwork'

// blockchain
import connectToMetaMask from "./utils/connectToMetaMask"
import connectToMetaMaskEth  from './utils/connectToMetaMaskEth'
import ownContract from "./utils/ownContract"
import rascalsContract from "./utils/rascalsContract"
import sparkSwapContract from "./utils/sparkSwapRouterContract"
import marketplaceContract from "./utils/marketplaceContract"
import numberFormat from "./utils/numberFormat"
import web3 from "./utils/web3"

// images
import loading from './images/loading-mustachio.gif'
import metamask from './images/metamask.png'
import bnbImage from "./images/bnb.png"
import ownImage from "./images/own-token.png"
import marauders from "./images/MQ_marauders.png"
import rascals from "./images/MQ_rascals.png"

// smooth scrolling for safari
smoothscroll.polyfill()

export default function App() {
    // Modals
    const [showMetamaskInstall, setShowMetamaskInstall] = useState(false);
    const handleCloseMetamaskInstall = () => setShowMetamaskInstall(false);
    const handleShowMetamaskInstall = () => setShowMetamaskInstall(true);
    const [showWrongNetwork, setShowWrongNetwork] = useState(false);
    const handleCloseWrongNetwork = () => setShowWrongNetwork(false);
    const handleShowWrongNetwork = () => setShowWrongNetwork(true);
    // const [showOnProcess, setShowOnProcess] = useState(false);
    // const handleCloseOnProcess = () => setShowOnProcess(false);
    // const handleShowOnProcess = () => setShowOnProcess(true);

    // ------------------------------------------ MARAUDERS MINT ---------------------------------------------------------
    let isProduction = true;

    const marauderContractAddress = (isProduction) ? '0x7De755985E7079A07bfC4919c770450436D413a9' : '0x2cc2D29c6514748b723eac6eFBff793Fb276c3f1';

    const [showMintMarauder, setShowMintMarauder] = useState(false);
    const handleCloseMintMarauder = () => setShowMintMarauder(false);
    const handleShowMintMarauder = () => setShowMintMarauder(true);

    const [showSuccessfullyMintedMarauder, setShowSuccessfullyMintedMarauder] = useState(false);
    const handleCloseSuccessfullyMintedMarauder = () => setShowSuccessfullyMintedMarauder(false);
    const handleShowSuccessfullyMintedMarauder = () => setShowSuccessfullyMintedMarauder(true);

    const [ownBalance, setOwnBalance] = useState('Loading')
    const [bnbBalance, setBnbBalance] = useState('Loading')
    const [addressListDiscountPercentage, setAddressListDiscountPercentage] = useState(0)
    const [ownAllowance, setOwnAllowance] = useState('0')
    const [marketItem, setMarketItem] = useState(null)
    const [finalPrice, setFinalPrice] = useState('Loading')
    const [price, setPrice] = useState('Loading')
    const [discountPercentage, setDiscountPercentage] = useState('Loading')
    const [tokenIdPurchased, setTokenIdPurchased] = useState(0)
    const [purchaseTransactionHash, setPurchaseTransactionHash] = useState("#")
    const [isApproving, setIsApproving] = useState(false)
    const [isPurchasing, setIsPurchasing] = useState(false)

    const [inputsValues, setInputsValues] = useState({
        paymentMethod: "OWN",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputsValues({ ...inputsValues, [name]: value });

        if(name === "paymentMethod") {
            paymentMethodChange(value);
        }
    }

    const paymentMethodChange = async (value) => {
        let paymentMethodRadio = $("input[name='paymentMethod']");
        paymentMethodRadio.prop("disabled", true);

        setIsApproving(false);
        setIsPurchasing(false);

        let address = await connectToMetaMask();

        setPrice("Loading");
        setDiscountPercentage("Loading");

        if(value === "OWN") {
            let _ownBalance = await ownContract.methods.balanceOf(address).call();
            _ownBalance = web3.utils.fromWei(_ownBalance, "ether");
            setOwnBalance(_ownBalance);

            let _ownAllowance = await ownContract.methods.allowance(address, marketplaceContract.options.address).call();
            _ownAllowance = web3.utils.fromWei(_ownAllowance, "ether");
            setOwnAllowance(_ownAllowance);

            await getMarketItem();
        } else if(value === "BNB") {
            let _bnbBalance = await web3.eth.getBalance(address);
            _bnbBalance = web3.utils.fromWei(_bnbBalance, "ether");

            setBnbBalance(_bnbBalance);

            let priceInBnb = await sparkSwapContract.methods.getAmountsOut("5000000000000000000000000", ["0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA", "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"]).call();

            setPrice(priceInBnb[1]);
            setDiscountPercentage(0);

            setFinalPrice(web3.utils.fromWei(priceInBnb[1], "ether"));
        }

        paymentMethodRadio.prop("disabled", false);
    };

    const checkAddressListDiscountPercentage = async () => {
        let address = await connectToMetaMask();

        let _addressListDiscountPercentage = await marketplaceContract.methods.getAddressListDiscountPercentage(1, address).call();
        setAddressListDiscountPercentage(_addressListDiscountPercentage);

        return _addressListDiscountPercentage;
    }

    const updateBalanceContent = () => {
        let balance = "Loading";

        if((inputsValues.paymentMethod === "OWN" && !isNaN(ownBalance)) || (inputsValues.paymentMethod === "BNB" && !isNaN(bnbBalance))) {
            balance = ((inputsValues.paymentMethod === "OWN") ? numberFormat(ownBalance, 0) : numberFormat(bnbBalance, 4)) + " " + inputsValues.paymentMethod;
        }

        return (
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div>
                    <img src={ (inputsValues.paymentMethod === "OWN") ? ownImage : bnbImage } width="35" />
                </div>

                <div className="ps-3">
                    <div className="d-flex align-items-center">
                        <p className="text-white font-size-80 mb-0">Balance:</p>


                    </div>
                    <p className="text-white font-size-90 mb-0">{ balance }</p>
                </div>

                <div>{ displayGetOwnButton() }</div>
            </div>
        );
    };

    const displayGetOwnButton = () => {
        if(inputsValues.paymentMethod === "OWN") {
            return (
                <div className="ps-3">
                    <a href="https://sparkswap.finance/#/swap?inputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c&outputCurrency=0x7665cb7b0d01df1c9f9b9cc66019f00abd6959ba" target="_blank" rel="noreferrer" className="btn btn-custom-2 font-size-80 py-1" style={{"width":"110px"}}>GET $OWN</a>
                </div>
            );
        }
    }

    const updateDiscountContent = () => {
        if(inputsValues.paymentMethod === "OWN") {
            return (
                <div>
                    <div className="d-flex justify-content-center align-items-center position-relative">
                        <p className="text-white text-center font-size-100 mb-0 pe-2">5,000,000</p>
                        <img src={ownImage} width="18" />

                        <div className="w-100 d-flex justify-content-center position-absolute" style={{"top":"50%", "left":"0"}}>
                            <div className="" style={{"backgroundColor":"#ffffff", "height":"1px", "width":"150px"}}></div>
                        </div>
                    </div>

                    <p className="text-white text-center font-size-90 mb-0 pe-2 mb-3">Enjoy { discountPercentage }% Discount</p>
                </div>
            );
        }
    };

    const updatePaymentMethodTokenLogo = () => {
        if(inputsValues.paymentMethod === "OWN") {
            return (
                <div className="">
                    <img src={ownImage} width="35" />
                </div>
            );
        } else {
            return (
                <div className="">
                    <img src={bnbImage} width="35" />
                </div>
            );
        }
    };

    const updateActionButtons = () => {
        if(inputsValues.paymentMethod === "OWN") {
            return (
                <div className="row mb-4 pb-2">
                    <div className="col-6">
                        <button className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" onClick={approveOwn} style={{"width":"initial"}} disabled={ !(price !== "Loading" && !isApproving && parseFloat(ownBalance) >= parseFloat(finalPrice) && parseFloat(ownAllowance) < parseFloat(finalPrice)) }>APPROVE $OWN</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" onClick={purchaseWithOwn} style={{"width":"initial"}} disabled={ !(price !== "Loading" && !isPurchasing && parseFloat(ownBalance) >= parseFloat(finalPrice) && parseFloat(ownAllowance) >= parseFloat(finalPrice)) }>MINT NOW!</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row mb-4 pb-2">
                    <div className="col-12">
                        <button className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" onClick={purchaseWithBnb} style={{"width":"initial"}} disabled={ !(price !== "Loading" && !isPurchasing && parseFloat(bnbBalance) >= parseFloat(finalPrice)) }>MINT NOW!</button>
                    </div>
                </div>
            );
        }
    };

    const getMarketItem = async function() {
        let _addressListDiscountPercentage = await checkAddressListDiscountPercentage();

        let tokenId = 196;
        let _marketItem;

        for(let i = tokenId; i <= 299; i++) {
            _marketItem = await marketplaceContract.methods.fetchMarketItemV2(marauderContractAddress, i).call();

            let owner = (isProduction) ? "0x672b733C5350034Ccbd265AA7636C3eBDDA2223B" : "0x768532c218f4f4e6E4960ceeA7F5a7A947a1dd61";

            if(_marketItem && _marketItem.itemId !== "0" && _marketItem.seller === owner) {
                setMarketItem(_marketItem);

                setPrice(_marketItem.price);

                let _discountPercentage = parseInt(_marketItem.discountPercentage) + parseInt(_addressListDiscountPercentage);

                setFinalPrice(web3.utils.fromWei(_marketItem.price.toString(), "ether") * ((100 - _discountPercentage) / 100));

                setDiscountPercentage(_discountPercentage);
                setTokenIdPurchased(_marketItem.tokenId);

                break;
            }
        }
    };

    const approveOwn = async function() {
        let address = await connectToMetaMask();

        setIsApproving(true);

        await ownContract.methods.approve(marketplaceContract.options.address, web3.utils.toWei(finalPrice.toString(), "ether")).send({
            from: address
        }).on('error', function() {
            setIsApproving(false);
        });

        let _ownAllowance = await ownContract.methods.allowance(address, marketplaceContract.options.address).call();
        _ownAllowance = web3.utils.fromWei(_ownAllowance, "ether");
        setOwnAllowance(_ownAllowance);
    };

    const purchaseWithOwn = async function() {
        let address = await connectToMetaMask();

        setIsPurchasing(true);

        await marketplaceContract.methods.createMarketSaleV2(marketItem.itemId, "OWN").send({
            from: address,
            value: 0
        }).on('error', function() {
            setIsPurchasing(false);
        }).on('transactionHash', function(hash) {
            setPurchaseTransactionHash(((isProduction) ? "https://bscscan.com/tx/" : "https://testnet.bscscan.com/tx/") + hash);
        });

        handleCloseMintMarauder();
        handleShowSuccessfullyMintedMarauder();
    };

    const purchaseWithBnb = async function() {
        let address = await connectToMetaMask();

        setIsPurchasing(true);

        await marketplaceContract.methods.createMarketSaleV2(marketItem.itemId, "BNB").send({
            from: address,
            // value: web3.utils.toWei(finalPrice.toString(), "ether")
            value: web3.utils.toWei("0.1", "ether")
        }).on('error', function() {
            setIsPurchasing(false);
        }).on('transactionHash', function(hash) {
            setPurchaseTransactionHash(((isProduction) ? "https://bscscan.com/tx/" : "https://testnet.bscscan.com/tx/") + hash);
        });

        handleCloseMintMarauder();
        handleShowSuccessfullyMintedMarauder();
    };

    const mintMarauder = async () => {
        let address = await connectToMetaMask();

        if(address) {
            handleShowMintMarauder();

            paymentMethodChange(inputsValues.paymentMethod);
        }
    };
    // ---------------------------------------------------------- END MARAUDER MINT --------------------------------------------------
    // ---------------------------------------------------------- RASCALS MINT --------------------------------------------------
    const percentageDiscount = 75
    const mintCost = [
        25000000000000000,
        18000000000000000,
        14000000000000000,
        9000000000000000
    ]

    const [showMintRascal, setShowMintRascal] = useState(false)
    const handleCloseMintRascal = () => setShowMintRascal(false)
    const handleShowMintRascal = () => setShowMintRascal(true)
    const [showOnSuccessRascal, setShowOnSuccessRascal] = useState(false);
    const handleCloseOnSuccessRascal = () => setShowOnSuccessRascal(false);
    const handleShowOnSuccessRascal = () => setShowOnSuccessRascal(true);
    const [showOnErrorRascal, setShowOnErrorRascal] = useState(false)
    const handleCloseOnErrorRascal = () => setShowOnErrorRascal(false)
    const handleShowOnErrorRascal = () => setShowOnErrorRascal(true)

    const [address, setAddress] = useState("")
    const [totalSupply, setTotalSupply] = useState(0)
    const [freeMintQty, setFreeMintQty] = useState(0)
    const [isFreeMint, setIsFreeMint] = useState(false)
    const [isWhiteListed, setIsWhiteListed] = useState(true)
    const [currentMinter, setCurrentMinter] = useState("WL")
    const [isDisabled, setIsDisabled] = useState(true)
    const [isMinting, setIsMinting] = useState(false)
    const [isSoldout, setIsSoldout] = useState(false)
    const [currentPrice, setCurrentPrice] = useState(web3.utils.fromWei(mintCost[0].toString(), "ether"))
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0)
    const [txHashRascal, setTxHashRascal] = useState("#")
    const [tokenId, setTokenId] = useState(0)
    const [txError, setTxError] = useState("")

    // Mainnet
    // const rascalsAddress = '0x0Ad92EA349ddbb08AA2129D4af823Ac4C78bab46'
    const rascalsAddress = '0x3f5c11ff5c004313a5d1bb0b5160551e05988569'
    // Testnet
    // const rascalsAddress = '0x7Aa03f408371604992eBD411e22D8fc0c0f0ddbD'
    // Mainnet
    const etherScanUrl = 'https://etherscan.io/tx/'
    // Testnet
    // const etherScanUrl = 'https://goerli.etherscan.io/tx/'
    // const etherScanUrl = 'https://testnet.bscscan.com/tx/'

    const handleKeypress = (e) => {
        const characterCode = e.key
        if (characterCode === 'Backspace') return
    
        const characterNumber = Number(characterCode)
        if (characterNumber >= 0 && characterNumber <= 9) {
          if (e.currentTarget.value && e.currentTarget.value.length) {
            return
          } else if (characterNumber === 0) {
            e.preventDefault()
          }
        } else {
          e.preventDefault()
        }
    }

    const handleQtyChange = (e) => {
        let price, tempTotalPrice
        const qty = e.currentTarget.value
        if (qty !== "") {
            setIsDisabled(false)
            if (qty <= 2) {
                price = BigInt(mintCost[0])
                setCurrentPrice(web3.utils.fromWei(price.toString(), "ether"))
                tempTotalPrice = BigInt(mintCost[0]) * BigInt(qty)
                setTotalPrice(web3.utils.fromWei(tempTotalPrice.toString(), "ether"))
            } else if (qty <= 4) {
                price = BigInt(mintCost[1])
                setCurrentPrice(web3.utils.fromWei(price.toString(), "ether"))
                tempTotalPrice = BigInt(mintCost[1]) * BigInt(qty)
                setTotalPrice(web3.utils.fromWei(tempTotalPrice.toString(), "ether"))
            } else if (qty <= 9) {
                price = BigInt(mintCost[2])
                setCurrentPrice(web3.utils.fromWei(price.toString(), "ether"))
                tempTotalPrice = BigInt(mintCost[2]) * BigInt(qty)
                setTotalPrice(web3.utils.fromWei(tempTotalPrice.toString(), "ether"))
            } else {
                price = BigInt(mintCost[3])
                setCurrentPrice(web3.utils.fromWei(price.toString(), "ether"))
                tempTotalPrice = BigInt(mintCost[3]) * BigInt(qty)
                setTotalPrice(web3.utils.fromWei(tempTotalPrice.toString(), "ether"))
            }

            if (isWhiteListed) {
                const tempDiscountedPrice = (tempTotalPrice * BigInt(percentageDiscount)) / BigInt(100)
                setTotalDiscountedPrice(web3.utils.fromWei(tempDiscountedPrice.toString(), "ether"))
            }
            else setTotalDiscountedPrice(0)
        } else {
            setCurrentPrice(web3.utils.fromWei(mintCost[0].toString(), "ether"))
            setTotalPrice(0)
            setTotalDiscountedPrice(0)
            setIsDisabled(true)
        }
    }

    const mintRascal = async () => {
        const qtyToMint = document.getElementById("qtyToMint").value

        if (qtyToMint) {
            if (currentMinter == "WL") {
                if (!isWhiteListed) {
                    setTxError("Public Mint is not allowed yet. You can mint starting Oct. 9, 7PM SGT. Thank you!")
                    handleShowOnErrorRascal()
                } else {
                    rascalsMintProcess(qtyToMint)
                }   
            } else {
                rascalsMintProcess(qtyToMint)
            }
        } else {
            setTxError("Please input a valid amount greater than 0.")
            handleShowOnErrorRascal()
        }
    }

    const rascalsMintProcess = async qtyToMint => {
        if (totalSupply + Number(qtyToMint) <= 10000) {
            const userBalance = await web3.eth.getBalance(address)
            const totalPriceToPay = (isWhiteListed) ? web3.utils.toWei(totalDiscountedPrice.toString()) : web3.utils.toWei(totalPrice.toString())
            // const totalPriceToPay = web3.utils.toWei(totalPrice.toString())

            if (BigInt(userBalance) >= BigInt(totalPriceToPay)) {
                await rascalsContract.methods.mint(qtyToMint).send({
                    from: address,
                    value: totalPriceToPay,
                })
                .on('transactionHash', function(hash){
                    setIsMinting(true)
                })
                .on('error', function(error) {
                    setIsMinting(false)
                    setTxError(error.message)
                    handleShowOnErrorRascal()
                })
                .then(async function(receipt) {
                    setIsMinting(false)
                    handleShowOnSuccessRascal()
                    setTxHashRascal(receipt.transactionHash)
        
                    if (qtyToMint > 1) setTokenId(receipt.events.Transfer['0'].returnValues.tokenId)
                    else setTokenId(receipt.events.Transfer.returnValues.tokenId)
        
                    // reload data
                    _init(address)
                })
            } else {
                setTxError("You don't have enough ETH balance to proceed with the mint.")
                handleShowOnErrorRascal()
            }
        } else {
            setTxError("The quantity you want to mint exceeds the number of rascals left (" + (10000-Number(totalSupply)) + " rascals left). Please try a different value.")
            handleShowOnErrorRascal()
        }
    }

    const freeMintRascal = async () => {
        await rascalsContract.methods.freeMint().send({
            from: address,
        })
        .on('transactionHash', function(hash){
            setIsMinting(true)
        })
        .on('error', function(error) {
            setIsMinting(false)
            setTxError(error.message)
            handleShowOnErrorRascal()
        })
        .then(async function(receipt) {
            setIsMinting(false)
            handleShowOnSuccessRascal()
            setTxHashRascal(receipt.transactionHash)

            if (freeMintQty > 1) setTokenId(receipt.events.Transfer['0'].returnValues.tokenId)
            else setTokenId(receipt.events.Transfer.returnValues.tokenId)

            // reload data
            _init(address)
        })
    }

    const initRascal = async () => {
        let addr = await connectToMetaMaskEth()
        
        if (addr) {
            _init(addr)
            setAddress(addr)
            handleShowMintRascal()
        } else {
            handleShowMetamaskInstall()
        }
    }

    const _init = async addr => {
        // check currentMinter
        const currMinter = await rascalsContract.methods.onlyWhitelisted().call()
        if (currMinter) setCurrentMinter("WL") // whitelisted
        else setCurrentMinter("PBL") // public

        // check if the account has free mint
        const freeMintEligible = await rascalsContract.methods.freeMintQuantity(addr).call()
        if (Number(freeMintEligible) > 0) {
            setIsFreeMint(true)
            setFreeMintQty(Number(freeMintEligible))
        } else setIsFreeMint(false)

        // check if whitelisted
        // const wlEligible = await rascalsContract.methods.isWhitelisted(addr).call()
        // if (wlEligible) setIsWhiteListed(true)
        // else setIsWhiteListed(false)

        // check totalSupply
        const totSup = await rascalsContract.methods.totalSupply().call()
        setTotalSupply(Number(totSup))

        // check if sold out
        if (Number(totSup) === 10000) setIsSoldout(true)
        else setIsSoldout(false)
    }
    // ---------------------------------------------------------- END RASCALS MINT --------------------------------------------------

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

            <Navbar mintRascal={initRascal} /> 
            <Switch>
                <Route exact path="/">
                    <Hero mintRascal={initRascal} isSoldout={isSoldout} />
                    <AboutRascals />
                    <NFT />
                    <Utilities />
                    <ARSection />
                    <Tales />
                    <Game />
                    <Visualizer />
                    <Table mintMarauder={mintMarauder} mintRascal={initRascal} />
                    <Roadmap />
                    <Gmfrens />
                    <Team />
                    <FAQ />
                    <CTA />
                </Route>
                <Route exact path="/discord" component={Discord}></Route>
                <Route exact path="/pathfinders" component={Pathfinders}></Route>
                <Route exact path="/marauders" component={Marauders}></Route>
                <Route exact path="/rascals" component={Rascals}></Route>
                {/* <Route exact path="/pathfinders">
                    <Pathfinders mintBtn={initUtilsAndMint} />
                </Route>
                <Route exact path="/marauders">
                    <Marauders />
                </Route>
                <Route exact path="/rascals">
                    <Rascals />
                </Route> */}
                <Route exact path="/ar">
                    <AR />
                </Route>
                <Route exact path="/game"> 
                    <BannerGame />
                    <Features />
                    <Updates />
                    <Roadmap />
                    <SneakPeek />
                    <Table />
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
            {/* <Modal show={showOnProcess} onHide={handleCloseOnProcess} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <img src={loading} alt="Loading..." style={{width: "150px", margin: "0 auto"}} />
                    </div>
                    <p className="app-pending-modal-content text-center font-andes text-lg"><span className="app-loading-big-letter">O</span>, what great honour. Put on your armor and hold your fire, dear friend, for we are minting your Mustachio.</p>
                </Modal.Body>
            </Modal>     */}

            <Modal show={showMintMarauder} onHide={handleCloseMintMarauder} centered>
                <Modal.Body className="px-4 position-relative" style={{"backgroundColor":"#1c5091", "borderRadius":"0.2rem", "border":"3px solid white"}}>
                    <div className="position-absolute" style={{"top":"15px", "right":"20px", "zIndex":"5"}}>
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseMintMarauder} />
                    </div>

                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-130 px-5 pt-4 pb-2">Mint a Mustachio Marauder</p>

                    <div className="mb-4">
                        <div className="w-100" style={{"backgroundColor":"#ffffff", "height":"1px"}}></div>
                    </div>

                    <p className="app-metamask-modal-content text-white text-center font-andes font-size-90 px-5 mb-1">Select Payment Method:</p>

                    <div className="d-flex justify-content-center mb-3" id="select-mint-method">
                        <div className="form-check form-check-inline px-4 mx-4 d-flex align-items-center me-0">
                            <input className="form-check-input mb-1 cursor-pointer" type="radio" name="paymentMethod" id="inlineRadio1" value="OWN" onChange={handleInputChange} style={{"width":"25px", "height":"25px"}} checked={inputsValues.paymentMethod === "OWN"} />
                            <label className="form-check-label text-white font-size-150 ps-3 cursor-pointer" htmlFor="inlineRadio1">OWN</label>
                        </div>
                        <div className="form-check form-check-inline px-4 mx-4 d-flex align-items-center me-0">
                            <input className="form-check-input mb-1 cursor-pointer" type="radio" name="paymentMethod" id="inlineRadio2" value="BNB" onChange={handleInputChange} style={{"width":"25px", "height":"25px"}} checked={inputsValues.paymentMethod === "BNB"} />
                            <label className="form-check-label text-white font-size-150 ps-3 cursor-pointer" htmlFor="inlineRadio2">BNB</label>
                        </div>
                    </div>

                    <div>{ updateBalanceContent() }</div>

                    <div className="mb-4">
                        <div className="w-100" style={{"backgroundColor":"#ffffff", "height":"1px"}}></div>
                    </div>

                    <p className="app-metamask-modal-content text-white text-center font-andes font-size-90 px-5 mb-2">Price:</p>

                    <div>{ updateDiscountContent() }</div>

                    <div className="d-flex justify-content-center align-items-center mb-4 pb-2">
                        <p className="text-white text-center fw-bold font-size-150 mb-0 pe-3">{ (price !== "Loading") ? numberFormat(finalPrice,(inputsValues.paymentMethod === "OWN") ? 0 : 4) : price }</p>
                        <div>{ updatePaymentMethodTokenLogo() }</div>
                    </div>

                    <div>{ updateActionButtons() }</div>
                </Modal.Body>
            </Modal>

            <Modal show={showSuccessfullyMintedMarauder} onHide={handleCloseSuccessfullyMintedMarauder} centered>
                <Modal.Body className="px-4 position-relative" style={{"backgroundColor":"#1c5091", "borderRadius":"0.2rem", "border":"2px solid white"}}>
                    <div className="position-absolute" style={{"top":"15px", "right":"20px", "zIndex":"5"}}>
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseSuccessfullyMintedMarauder} />
                    </div>

                    <div className="text-center pt-4">
                        <img className="mt-2" src={marauders} width="220" alt="Mustachio Pathfinders" />
                    </div>

                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-140 px-md-5 pt-3 mb-1">Congratulations!</p>
                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-110 px-md-5 pb-4 mb-2">You have successfully owned your Mustachio Marauder</p>

                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            {/* Mainnet */}
                            <a href={ 'https://ownly.market/marauders/' + tokenIdPurchased } target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" style={{"width":"initial"}}>VIEW MY MUSTACHIO&nbsp;MARAUDER</a>

                            {/* Testnet */}
                            {/* <a href={ 'http://ownlyio.marketplace.test/3dmustachios/?network=bsc&contract=' + marauderContractAddress + '&token=' + tokenIdPurchased } target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2 mb-2" style={{"width":"initial"}}>VIEW MY MUSTACHIO&nbsp;MARAUDER</a> */}

                            <a href={ purchaseTransactionHash } target="_blank" rel="noreferrer" className="text-white text-center font-size-90" style={{"width":"initial"}}>View Transaction Hash</a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showMintRascal} onHide={handleCloseMintRascal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="px-4 position-relative modal-body-style">
                    <div className="position-absolute modal-close-icon">
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseMintRascal} />
                    </div>

                    <p className="text-white fw-bold text-center font-size-130 px-5 pt-4 pb-2">Mint a Mustachio Rascal</p>

                    <div className="mb-4">
                        <div className="w-100" style={{"backgroundColor":"#ffffff", "height":"1px"}}></div>
                    </div>

                    {isFreeMint ? (
                        <>
                            <p className="text-white fw-bold text-center font-size-130 px-3">Woohoo! Looks like you have a FREE MINT available on your account.</p>
                            
                            <button onClick={freeMintRascal} type="button" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" disabled={isMinting} style={{"width":"initial"}}>
                                {isMinting ? (
                                    <FontAwesomeIcon icon={faSpinner} color="white" spin />
                                ) : "MINT MY FREE RASCAL" }
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="text-white text-center font-size-100 mb-0">1-2 = 0.025 ETH / Rascal</p>
                            <p className="text-white text-center font-size-100 mb-0">2-4 = 0.018 ETH / Rascal</p>
                            <p className="text-white text-center font-size-100 mb-0">5-9 = 0.014 ETH / Rascal</p>
                            <p className="text-white text-center font-size-100 mb-0">10+ = 0.009 ETH / Rascal</p>

                            <p className="text-white text-center fw-bold font-size-150 mb-3">Price: {numberFormat(currentPrice,4)} ETH</p>

                            <input type="number" id="qtyToMint" onKeyDown={handleKeypress} onChange={handleQtyChange} className="rascals-mint-qty text-center form-control font-size-150 mb-3" placeholder="Enter Qty to mint" min="1" step="1"/>

                            { isWhiteListed ? (
                                <>
                                    <p className="text-white text-center fw-bold mb-0">
                                        Total: <s className="font-size-100 gotham">{numberFormat(totalPrice, 4)} ETH</s>
                                    </p>
                                    <p className="text-white text-center fw-bold font-size-150 mb-1">
                                        {numberFormat(totalDiscountedPrice, 4)} ETH
                                    </p>
                                    <p className="font-weight-130 text-white text-center fw-bold mb-4">Less 25%!</p>
                                </>
                            ) : (
                                <p className="text-white text-center fw-bold font-size-150 mb-4">TOTAL PRICE: {numberFormat(totalPrice, 4)} ETH</p>
                            )}

                            <button onClick={mintRascal} type="button" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2" style={{"width":"initial"}} disabled={isMinting || isSoldout || isDisabled}>
                                {isMinting ? (
                                    <FontAwesomeIcon icon={faSpinner} color="white" spin />
                                ) : (
                                    isSoldout ? "SOLD OUT" : "MINT NOW!"
                                )}
                            </button>
                        </>
                    )}
                </Modal.Body>
            </Modal>

             {/* Modal for error transaction */}
             <Modal show={showOnErrorRascal} onHide={handleCloseOnErrorRascal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="px-4 position-relative modal-body-style">
                    <div className="position-absolute modal-close-icon">
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseOnErrorRascal} />
                    </div>

                    <p className="text-white fw-bold text-center font-andes font-size-130 pt-4 pb-2">{txError}</p>
                </Modal.Body>
            </Modal>    

            {/* Modal for successful transaction */}
            <Modal show={showOnSuccessRascal} onHide={handleCloseOnSuccessRascal} backdrop="static" keyboard={false} centered>
                <Modal.Body className="px-4 position-relative modal-body-style">
                    <div className="position-absolute modal-close-icon">
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseOnSuccessRascal} />
                    </div>

                    <div className="text-center pt-4">
                        <img className="mt-2" src={rascals} width="220" alt="Mustachio Rascals" />
                    </div>

                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-140 px-md-5 pt-3 mb-1">Congratulations!</p>
                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-110 px-md-5 pb-4 mb-2">You have successfully owned your Mustachio Rascals</p>

                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            {/* Mainnet */}
                            <a href={ 'https://opensea.io/assets/ethereum/' + rascalsAddress + '/' + tokenId } target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2 mb-2" style={{"width":"initial"}}>VIEW ON OPENSEA</a>

                            {/* Testnet */}
                            {/* <a href={ 'https://testnets.opensea.io/assets/goerli/' + rascalsAddress + '/' + tokenId } target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2 mb-2" style={{"width":"initial"}}>VIEW ON OPENSEA</a> */}

                            <a href={ etherScanUrl + txHashRascal } target="_blank" rel="noreferrer" className="text-white text-center font-size-90" style={{"width":"initial"}}>View Transaction Hash</a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Router>
    );
}
