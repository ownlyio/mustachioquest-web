// images
import rascals from '../../images/hero-section.png'
import rascalsLogo from '../../images/MQ_rascals.png'

import axios from "axios"
import { useState, useEffect } from "react"
import numberFormat from './../../utils/numberFormat'
import readWeb3 from '../../utils/readWeb3Eth'
import { address, abi } from '../../utils/rascals'
import './Hero.css'

export default function Hero({ mintRascal, isSoldout, isDiscounted }) {
    const defaultTime = "00"
    const [days, setDays] = useState(defaultTime)
    const [hours, setHours] = useState(defaultTime)
    const [minutes, setMinutes] = useState(defaultTime)
    const [seconds, setSeconds] = useState(defaultTime)
    const [totalSupplyRascals, setTotalSupplyRascals] = useState(0)

    let interval

    const startTimer = timeSec => {
        const countdownDate = new Date().getTime() + (timeSec * 1000)

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const d = padZeroes(Math.floor(distance / (24 * 60 * 60 * 1000)))
            const h = padZeroes(Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)))
            const m = padZeroes(Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)))
            const s = padZeroes(Math.floor((distance % (1000 * 60)) / 1000))

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

    const totalRemaining = supply => {
        return 10000 - supply
    }

    const computePercentage = supply => {
        const percent = (totalRemaining(supply) / 10000) * 100
        return percent
    }

    useEffect(() => {
        async function _init() {
            const remaining = await axios.get("https://ownly.market/api/get-remaining-time/2022-11-01%2000:00")
            startTimer(Number(remaining.data))

            const rascalsContract = new readWeb3.eth.Contract(abi, address)
            const totSup = await rascalsContract.methods.totalSupply().call()
            setTotalSupplyRascals(Number(totSup))
        }

        _init()
    }, [])

    return (
        <section id="hero" className="h-screen background-image-cover" style={{ "backgroundImage": `url(${rascals})` }}>
            <div className="container h-100">
                <div className="row align-items-center justify-content-center h-100">
                    <div className="col-12 col-lg-6">
                        <div className="hero-logo mx-auto">
                            <img src={rascalsLogo} alt="Rascals Logo" className="w-100" />
                        </div>
                        <p className="hero-desc font-size-110 font-size-lg-140 gotham-light text-center text-white line-height-160">10,000 3D Generative Mustachio Rascals NFT</p>

                        <div className="hero-prices">
                            {isDiscounted ? (
                                <>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">1-2 = <s className="hero-striked-price font-size-80 font-size-md-90">0.025 ETH</s> <b>0.01875 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">3-4 = <s className="hero-striked-price font-size-80 font-size-md-90">0.018 ETH</s> <b>0.0135 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">5-9 = <s className="hero-striked-price font-size-80 font-size-md-90">0.014 ETH</s> <b>0.0105 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">10+ = <s className="hero-striked-price font-size-80 font-size-md-90">0.009 ETH</s> <b>0.00675 ETH</b> / Rascal</p>
                                </>
                            ) : (
                                <>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">1-2 = <b>0.025 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">3-4 = <b>0.018 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">5-9 = <b>0.014 ETH</b> / Rascal</p>
                                    <p className="prices-text text-white text-center font-size-110 font-size-md-120 mb-0">10+ = <b>0.009 ETH</b> / Rascal</p>
                                </>
                            )}
                        </div>
                        {isDiscounted && <p className="text-white gotham-black text-center font-size-120 mt-2 mb-3">11.15 PAYDAY SALE! ENJOY 25% DISCOUNT!</p>}

                        {/* <div className="hero-countdown d-flex align-items-center justify-content-between flex-wrap mb-4 px-0 px-md-5">
                            <div className="countdown days">
                                <p className="font-size-160 font-size-sm-180 font-size-lg-220 roboto-c-bold text-center text-color-6 mb-0">{days}</p>
                                <p className="font-size-70 text-center text-white mb-0">DAYS</p>
                            </div>
                            <div className="countdown hours">
                                <p className="font-size-160 font-size-sm-180 font-size-lg-220 roboto-c-bold text-center text-color-6 mb-0">{hours}</p>
                                <p className="font-size-70 text-center text-white mb-0">HOURS</p>
                            </div>
                            <div className="countdown minutes">
                                <p className="font-size-160 font-size-sm-180 font-size-lg-220 roboto-c-bold text-center text-color-6 mb-0">{minutes}</p>
                                <p className="font-size-70 text-center text-white mb-0">MINUTES</p>
                            </div>
                            <div className="countdown seconds">
                                <p className="font-size-160 font-size-sm-180 font-size-lg-220 roboto-c-bold text-center text-color-6 mb-0">{seconds}</p>
                                <p className="font-size-70 text-center text-white mb-0">SECONDS</p>
                            </div>
                        </div> */}

                        <div className="remaining-rascals text-center mt-3 mb-3">
                            <div className="remaining-rascals-bar mx-auto">
                                <div className="remaining-bar-inner" style={{ "width": `${computePercentage(totalSupplyRascals)}%` }}></div>
                                <div className="remaining-count fw-bold font-size-100 text-white">{numberFormat(totalRemaining(totalSupplyRascals), 0)} of 10,000</div>
                            </div>
                            <div className="remaining-label gotham-light font-size-100 text-white">Rascals Remaining</div>
                        </div>

                        <div className="mx-auto text-center">
                            {isSoldout ? (
                                <>
                                    <p className="font-size-100 font-size-lg-140 text-center text-color-5 line-height-160 mb-2"><b>NOTE:</b> All 10,000 Mustachio Rascals have gone through The Portal and is now <b>SOLD OUT.</b> Thank you so much for your support.</p>
                                </>
                            ) : (
                                <button onClick={mintRascal} className="btn btn-custom-2 gotham-black font-size-120 font-size-md-150 px-3 py-2 px-md-4 py-md-3">MINT NOW!</button>
                            )}
                        </div>

                        <div className="mx-auto text-center mt-2">
                            <a href="https://etherscan.io/address/0x3f5c11ff5c004313a5d1bb0b5160551e05988569" target="_blank" rel="noreferrer" className="link-color-3 font-size-100 gotham-light"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Rascals Contract</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-lg-block"></div>
                </div>
            </div>
        </section>
    )
}
