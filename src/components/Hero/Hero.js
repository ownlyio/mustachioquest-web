// images
import rascals from '../../images/rascal-gif.gif'
import rascalsLogo from '../../images/MQ_rascals.png'
import amacLogo from '../../images/amac-logo.png'

import axios from 'axios'
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react"
import './Hero.css'

export default function Hero({ mintRascal, isSoldout }) {
    const defaultTime = "00"
    const [days, setDays] = useState(defaultTime)
    const [hours, setHours] = useState(defaultTime)
    const [minutes, setMinutes] = useState(defaultTime)
    const [seconds, setSeconds] = useState(defaultTime)
    const [isComingSoon, setIsComingSoon] = useState(true)
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

    let interval

    const startTimer = timeSec => {
        const countdownDate = new Date().getTime() + (timeSec * 1000)

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const d = padZeroes(Math.floor(distance / (24 * 60 * 60 * 1000)))
            const h = padZeroes(Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)))
            const m = padZeroes(Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)))
            const s = padZeroes(Math.floor((distance % (1000 * 60  )) / 1000))

            if (distance < 0) {
                clearInterval(interval.current)
                setIsComingSoon(false)
            } else {
                setDays(d)
                setHours(h)
                setMinutes(m)
                setSeconds(s)
            }
        }, 1000)
    }

    const padZeroes = number => {
        number = number.toString();

        while (number.length < 2) {
            number = "0" + number;
        }

        return number;
    }

    useEffect(() => {
        async function _init() {
            const remaining = await axios.get("https://ownly.market/api/get-remaining-time/2022-10-08%2012:00")
            startTimer(Number(remaining.data))
        }

        _init()
    }, [])

    return (
        <section id="hero" className="h-screen">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <div className="hero-img-wrap ms-0 ms-lg-1">
                            <div className="hero-img mx-auto">
                                <img src={rascals} alt="Rascals GIF" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="hero-logo mx-auto">
                            <img src={rascalsLogo} alt="Rascals Logo" className="w-100" />
                        </div>
                        <p className="font-size-110 font-size-lg-140 text-center text-white line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>

                        {isComingSoon ? (
                            <>
                                <p className="font-size-110 font-size-lg-140 gotham-bold text-center text-white line-height-160 mb-0">Launching on October 8, 2022 at</p>
                                <p className="font-size-110 font-size-lg-140 gotham-bold text-center text-white line-height-160">
                                    <a href="https://amac.ph" target="_blank" rel="noreferrer">
                                        <span className="link-color-2">AMAC2022</span>&nbsp;
                                        <img src={amacLogo} alt="AMAC Logo" style={{"width": "50px"}} />
                                    </a>
                                </p>

                                <div id="whitelist-section" className="d-block">
                                    <p className="text-white font-size-100 font-size-sm-120 font-size-lg-140 text-center px-md-5 mb-2">Be the first to know! Join our VIP List.</p>
                                    <div className="px-xl-4 mx-xl-4">
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
                                                    <label className="form-check-label font-size-80 text-white" for="agreement">
                                                    You consent to receive updates and news from us by signing up for our newsletter. You may opt out of receiving our marketing emails at any time. Your email address will be saved in our database and not given to any third parties.
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="hero-countdown d-flex align-items-center justify-content-evenly flex-wrap">
                                    <div className="countdown days">
                                        <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{days}</p>
                                        <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">DAYS</p>
                                    </div>
                                    {/* <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                                    <div className="countdown hours">
                                        <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{hours}</p>
                                        <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">HOURS</p>
                                    </div>
                                    {/* <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                                    <div className="countdown minutes">
                                        <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{minutes}</p>
                                        <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">MINUTES</p>
                                    </div>
                                    {/* <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                                    <div className="countdown seconds">
                                        <p className="font-size-200 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{seconds}</p>
                                        <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">SECONDS</p>
                                    </div>
                                </div>  
                            </>
                        ) : (
                            <>
                                <p className="font-size-110 font-size-lg-140 gotham-bold text-center text-white line-height-160 mb-0">Launched now at</p>
                                <p className="font-size-110 font-size-lg-140 gotham-bold text-center text-white line-height-160">
                                    <a href="https://amac.ph" target="_blank" rel="noreferrer">
                                        <span className="link-color-2">AMAC2022</span>&nbsp;
                                        <img src={amacLogo} alt="AMAC Logo" style={{"width": "50px"}} />
                                    </a>
                                </p>

                                <div className="mx-auto text-center">
                                    {isSoldout ? (
                                        <>
                                            <p className="font-size-110 font-size-lg-140 text-center text-white line-height-160 mb-2"><b>NOTE:</b> All 10,000 Mustachio Rascals have gone through The Portal and is now <b>SOLD OUT.</b> Thank you so much for your support.</p>
                                        </>
                                    ) : (
                                        <button onClick={mintRascal} className="btn btn-custom-2 gotham-black font-size-130 px-4">MINT NOW!</button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

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
        </section>
    )
}
