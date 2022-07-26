import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import { Dropdown } from "react-bootstrap"
import './Navbar.css'
import $ from 'jquery'

import logo from '../../images/MQ_logo.png'
import {Button, Modal} from "react-bootstrap";
import metamask from "../../images/metamask.png";
import pathfinders from "../../images/MQ_pathfinders.png";
import marauders from "../../images/MQ_marauders.png";
import {faCheckCircle, faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
import getCurrentWalletConnected from "../../utils/getCurrentWalletConnected";
import getCurrentNetwork from "../../utils/getCurrentNetwork";

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

    let isProduction = true;

    const marauderContractAddress = (isProduction) ? '0x7De755985E7079A07bfC4919c770450436D413a9' : '0x2cc2D29c6514748b723eac6eFBff793Fb276c3f1';

    const [showMustachioMintTypes, setShowMustachioMintTypes] = useState(false);
    const handleCloseMustachioMintTypes = () => setShowMustachioMintTypes(false);
    const handleShowMustachioMintTypes = () => setShowMustachioMintTypes(true);

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

            console.log(_marketItem);

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

        console.log(marketplaceContract.options.address);
        console.log(web3.utils.toWei(finalPrice.toString(), "ether"));

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

        console.log(marketItem.itemId);
        console.log(finalPrice);

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

        console.log(marketItem.itemId);
        console.log(finalPrice);

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
            closeMenu();
            handleShowMintMarauder();

            paymentMethodChange(inputsValues.paymentMethod);
        }
    };

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

    useEffect(() => {

    }, [])

    return (
        <div id="header" className="container">
            <div id="mq-nav" className="d-none d-lg-flex justify-content-between align-items-center">
                <div className="mq-nav-logo">
                    <a href="/">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </a>
                </div>
                <ul className="d-flex justify-content-center align-items-center flex-wrap mb-0 p-0">
                    <li className="px-0 px-xxl-2">
                        <Dropdown>
                            <Dropdown.Toggle className="text-decoration-none font-size-lg-90 font-size-xxl-100" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                            <Dropdown.Menu className="pe-2">
                                <Dropdown.Item href="/pathfinders"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;PATHFINDERS</Dropdown.Item>
                                <Dropdown.Item href="/marauders"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
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
                        <HashLink smooth to="/#game" scroll={el => scrollWithOffset(el)}>GAME</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)}>NFT</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#roadmap" scroll={el => scrollWithOffset(el)}>ROADMAP</HashLink>
                    </li>
                    <li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">
                        <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)}>TEAM</HashLink>
                    </li>
                    {/* <li>
                        <HashLink smooth to="#rewards" scroll={el => scrollWithOffset(el)}>REWARDS</HashLink>
                    </li> */}
                    {/*<li className="px-0 px-xxl-2 font-size-lg-90 font-size-xxl-100">*/}
                    {/*    <HashLink smooth to="/#visualizer" scroll={el => scrollWithOffset(el)}>VISUALIZER</HashLink>*/}
                    {/*</li>*/}
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
                        <a href="/">
                            <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                        </a>
                    </div>

                    <Dropdown style={{"zIndex":"100"}}>
                        <Dropdown.Toggle className="text-decoration-none font-size-100 ps-0 py-0" variant="link" id="dropdown-basic" style={{"color":"black"}}>ARCHETYPES</Dropdown.Toggle>

                        <Dropdown.Menu className="pe-2" >
                            <Dropdown.Item href="/pathfinders" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;PATHFINDERS</Dropdown.Item>
                            <Dropdown.Item href="/marauders" className="font-size-90"><i className="fa-solid fa-circle-small ps-2"></i>&nbsp;&nbsp;&nbsp;MARAUDERS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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
                    <HashLink smooth to="/#nft" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">NFT</HashLink>
                    <HashLink smooth to="/#roadmap" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">ROADMAP</HashLink>
                    <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                    {/* <HashLink smooth to="#rewards" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">REWARDS</HashLink> */}
                    {/*<HashLink smooth to="/#visualizer" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">VISUALIZER</HashLink>*/}
                    <HashLink smooth to="/#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FAQS</HashLink>
                    <a href="https://mustachio.quest" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                        BETA TEST
                    </a>
                    {/*<button type="button" onClick={props.mintBtn} className="btn mq-nav-discord text-white gotham-black font-size-100">*/}
                    {/*    MINT NOW*/}
                    {/*</button>*/}
                    <button type="button" onClick={mintMarauder} className="btn mq-nav-discord text-white gotham-black font-size-100">
                        MINT NOW
                    </button>
                    {/* <a href="https://ownly.io/ownmarauder" target="_blank" className="btn mq-nav-discord text-white gotham-black font-size-100">
                        EARN NFT
                    </a> */}
                </Menu>
            </div>

            {/* Modal for Mustachio Mint Selection */}
            <Modal show={showMustachioMintTypes} onHide={handleCloseMustachioMintTypes} centered>
                <Modal.Body className="px-4 position-relative" style={{"backgroundColor":"#1c5091", "borderRadius":"0.2rem", "border":"2px solid white"}}>
                    <div className="position-absolute" style={{"top":"15px", "right":"20px", "zIndex":"5"}}>
                        <FontAwesomeIcon color="white" className="font-size-160 cursor-pointer" icon={faTimes} onClick={handleCloseMustachioMintTypes} />
                    </div>

                    <p className="app-metamask-modal-content text-white fw-bold text-center font-andes font-size-130 px-md-5 pt-4 pb-4">Select the Mustachio type you want to mint.</p>
                    <div className="row pb-4 mb-3">
                        <div className="col-sm-6 mb-4 mb-sm-0">
                            <div className="p-3 cursor-pointer select-mustachio-to-mint" style={{"border":"2px solid white", "borderRadius":"10px"}} onClick={function(event){ props.mintBtn(); handleCloseMustachioMintTypes()}}>
                                <img className="w-100 mt-2" src={pathfinders} alt="Mustachio Pathfinders" />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="p-3 cursor-pointer select-mustachio-to-mint" style={{"border":"2px solid white", "borderRadius":"10px"}}  onClick={mintMarauder}>
                                <img className="w-100 mt-2" src={marauders} alt="Mustachio Pathfinders" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

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
                            {/*<a href={ 'http://ownlyio.marketplace.test/3dmustachios/?network=bsc&contract=' + marauderContractAddress + '&token=' + tokenIdPurchased } target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-110 w-100 py-2 mb-2" style={{"width":"initial"}}>VIEW MY MUSTACHIO&nbsp;MARAUDER</a>*/}

                            <a href={ purchaseTransactionHash } target="_blank" rel="noreferrer" className="text-white text-center font-size-90" style={{"width":"initial"}}>View Transaction Hash</a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
