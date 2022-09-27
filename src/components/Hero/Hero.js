// images
import rascals from '../../images/rascal-gif.gif'
import rascalsLogo from '../../images/MQ_rascals.png'

import axios from 'axios'
// import { Button, Modal } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react"
import './Hero.css'

export default function Hero() {
    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    const padZeroes = num => {
        if (num < 10) 
            return "0" + num.toString()
        return num
    }

    useEffect(() => {
        axios.get("https://ownly.market/api/get-remaining-time/2022-10-08%2012:00")
            .then(res => {
                
            })
    }, [])

    return (
        <section id="hero" className="h-screen">
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12 col-md-6">
                        <div className="hero-img mx-auto">
                            <img src={rascals} alt="Rascals GIF" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="hero-logo mx-auto">
                            <img src={rascalsLogo} alt="Rascals Logo" className="w-100" />
                        </div>
                        <p className="font-size-110 font-size-lg-140 text-center text-white line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>
                        <p className="font-size-110 font-size-lg-140 gotham-bold text-center text-white line-height-160">Launching on October 8, 2022</p>

                        <div className="hero-countdown d-flex align-items-center justify-content-evenly">
                            <div className="days">
                                <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{days}</p>
                                <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">DAYS</p>
                            </div>
                            <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p>
                            <div className="hours">
                                <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{hours}</p>
                                <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">HOURS</p>
                            </div>
                            <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p>
                            <div className="minutes">
                                <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{minutes}</p>
                                <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">MINUTES</p>
                            </div><p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">:</p>
                            <div className="seconds">
                                <p className="font-size-110 font-size-lg-350 gotham-black text-center text-white line-height-110 mb-0">{seconds}</p>
                                <p className="font-size-110 font-size-lg-140 text-center text-white mb-0">SECONDS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
