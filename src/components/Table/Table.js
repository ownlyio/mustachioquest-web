import './Table.css'

import royals from '../../images/MQ_royals.png'
import rulers from '../../images/MQ_rulers.png'
import redeemers from '../../images/MQ_redeemers.png'
import greenCheck from '../../images/check-3d-green.png'
import orangeCheck from '../../images/check-3d-orange.png'
import goldCheck from '../../images/check-3d-gold.png'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Table() {
    return (
        <section id="mq-table">
            <div className="container">
                <p className="mq-table-title gotham-black text-white text-center font-size-170 mb-5">WHAT MUSTACHIOS CAN I OWN?</p>

                {/* Types */}
                <div className="row justify-content-center align-items-start mb-5">
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={royals} alt="Mustachio Royals" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">MUSTACHIOS #1 to #100</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">The First 100 Mustachios or the <b>"Genesis Set"</b> on <a href="https://ownly.io/stash" className="link-color-2" target="_blank" rel="noreferrer">MustachioVerse</a></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={rulers} alt="Mustachio Royals" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">MUSTACHIOS #101 to #300</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">Stake 15M OWN for 60 Days at <a href="https://ownly.io/stake" className="link-color-2" target="_blank" rel="noreferrer">ownly.io/stake</a> to earn a Ruler</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={redeemers} alt="Mustachio Redeemers" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">10,000 MUSTACHIOS</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">10,000 Generative 3D Mustachios launching this Q2 2022</p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="mq-table-content">
                    <p className="mq-table-content-title gotham-black text-white text-center font-size-170 mb-4">HERE'S WHAT YOU'LL GET</p>
                    
                    <div className="table-responsive">
                        <table className="table table-bordered mq-table-table font-size-70 font-size-md-100">
                            <thead>
                                <tr className="font-size-70 font-size-md-100">
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">Utilities and Perks</th>
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">Mustachio Royals</th>
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">Mustachio Rulers</th>
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">Mustachio Redeemers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="font-size-70 font-size-md-100">
                                    <td className="align-middle gotham-light text-white font-size-120">3D Playable Character</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Exclusive Discord Channel</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Intricately Hand-drawn Avatar by Boii Mustache</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Mirror on BNB Chain of 2D Hand-drawn PFP</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">MustachioVerse Land Sale Discount</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Exclusive Land Access within Mustachio Quest</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">10% Cryptoback in OWN</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Quarterly OWN Airdrop</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">The First NFT Tales and Story Behind Each Mustachio</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-120">Generative Art</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-120">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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