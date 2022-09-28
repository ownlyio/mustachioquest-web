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
    const defaultTime = "00"
    const [days, setDays] = useState(defaultTime)
    const [hours, setHours] = useState(defaultTime)
    const [minutes, setMinutes] = useState(defaultTime)
    const [seconds, setSeconds] = useState(defaultTime)
    const [isComingSoon, setIsComingSoon] = useState(true)

    let interval

    const startTimer = timeSec => {
        const countdownObj = document.querySelector(".hero-countdown")
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
                countdownObj?.classList.remove('d-flex')
                countdownObj?.classList.add('d-none')
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
                    <div className="col-12 col-md-6 d-none d-md-block">
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
                    </div>
                </div>
            </div>
        </section>
    )
}
