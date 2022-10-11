// images
import rascals from '../../images/rascal-gif.gif'
import rascalsLogo from '../../images/MQ_rascals.png'

import axios from "axios"
import { useState, useEffect } from "react"
import './Hero.css'

export default function Hero({ mintRascal, isSoldout }) {
    const defaultTime = "00"
    const [days, setDays] = useState(defaultTime)
    const [hours, setHours] = useState(defaultTime)
    const [minutes, setMinutes] = useState(defaultTime)
    const [seconds, setSeconds] = useState(defaultTime)

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
            const remaining = await axios.get("https://ownly.market/api/get-remaining-time/2022-11-01%2000:00")
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
                                <img src={rascals} alt="Rascals GIF" className="shifting-rascals" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="hero-logo mx-auto">
                            <img src={rascalsLogo} alt="Rascals Logo" className="w-100" />
                        </div>
                        <p className="font-size-110 font-size-lg-140 text-center text-white line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>

                        <p className="text-white text-center font-size-110 mb-0">1-2 = <s>0.025 ETH</s> 0.01875 ETH / Rascal</p>
                        <p className="text-white text-center font-size-110 mb-0">3-4 = <s>0.018 ETH</s> 0.0135 ETH / Rascal</p>
                        <p className="text-white text-center font-size-110 mb-0">5-9 = <s>0.014 ETH</s> 0.0105 ETH / Rascal</p>
                        <p className="text-white text-center font-size-110 mb-0">10+ = <s>0.009 ETH</s> 0.00675 ETH / Rascal</p>
                        <p className="text-white fw-bold text-center font-size-140 mb-3">25% off until October 31, 2022!</p>

                        <p className="text-white fw-bold text-center font-size-120 mb-0">Discount will expire on:</p>
                        <div className="hero-countdown d-flex align-items-center justify-content-evenly flex-wrap mb-4 px-0 px-md-5">
                            <div className="countdown days">
                                <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">{days}</p>
                                <p className="font-size-110 font-size-lg-90 text-center text-white mb-0">DAYS</p>
                            </div>
                            {/* <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                            <div className="countdown hours">
                                <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">{hours}</p>
                                <p className="font-size-110 font-size-lg-90 text-center text-white mb-0">HOURS</p>
                            </div>
                            {/* <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                            <div className="countdown minutes">
                                <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">{minutes}</p>
                                <p className="font-size-110 font-size-lg-90 text-center text-white mb-0">MINUTES</p>
                            </div>
                            {/* <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">:</p> */}
                            <div className="countdown seconds">
                                <p className="font-size-200 font-size-lg-160 gotham-black text-center text-white line-height-110 mb-0">{seconds}</p>
                                <p className="font-size-110 font-size-lg-90 text-center text-white mb-0">SECONDS</p>
                            </div>
                        </div>  

                        <div className="mx-auto text-center">
                            {isSoldout ? (
                                <>
                                    <p className="font-size-110 font-size-lg-140 text-center text-white line-height-160 mb-2"><b>NOTE:</b> All 10,000 Mustachio Rascals have gone through The Portal and is now <b>SOLD OUT.</b> Thank you so much for your support.</p>
                                </>
                            ) : (
                                <button onClick={mintRascal} className="btn btn-custom-2 gotham-black font-size-150 px-4 py-3">MINT NOW!</button>
                            )}
                        </div>

                        <div className="mx-auto text-center mt-2">
                            <a href="https://etherscan.io/address/0x3f5c11ff5c004313a5d1bb0b5160551e05988569" target="_blank" rel="noreferrer" className="link-color-3"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Rascals Contract</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
