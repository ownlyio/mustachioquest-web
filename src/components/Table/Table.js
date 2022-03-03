import './Table.css'

import logo from '../../images/MQ_logo_white.png'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Table() {
    return (
        <section id="mq-table">
            <div className="container">
                <p className="updates-title gotham-black text-white text-center font-size-170 mb-5">WHAT MUSTACHIOS CAN I OWN?</p>
                <div className="row justify-content-center align-items-start">
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={logo} alt="Mustachio Royals" />
                            </div>

                            <p className="mq-table-types-title gotham-black font-size-150 text-white text-center">MUSTACHIO ROYALS</p>
                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">1-100 MUSTACHIOS</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">The First 100 Mustachios or the <b>"Genesis Set"</b> that can be minted at 0.4ETH!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={logo} alt="Mustachio Royals" />
                            </div>

                            <p className="mq-table-types-title gotham-black font-size-150 text-white text-center">MUSTACHIO RULERS</p>
                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">101-300 MUSTACHIOS</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">Stake 15 Million OWN at <a href="https://stake.ownly.market" className="link-color-2">https://stake.ownly.market</a> without unstaking for 30 Days to earn 1 Mustachio Ruler NFT.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={logo} alt="Mustachio Redeemers" />
                            </div>

                            <p className="mq-table-types-title gotham-black font-size-150 text-white text-center">MUSTACHIO REDEEMERS</p>
                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">10,000 MUSTACHIOS</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">10,000 Generative 3D Mustachios launching this Q2 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Borders */}
            <img src={bordertl} className="mq-table-border mq-table-tl" alt="Border Top Left" />
            <img src={bordertr} className="mq-table-border mq-table-tr" alt="Border Top Right" />
            <img src={borderbl} className="mq-table-border mq-table-bl" alt="Border Bottom Left" />
            <img src={borderbr} className="mq-table-border mq-table-br" alt="Border Bottom Right" />
        </section>
    )
}
