import './Table.css'

import pathfinders from '../../images/MQ_pathfinders.png'
import marauders from '../../images/MQ_marauders.png'
import rascals from '../../images/MQ_rascals.png'
import greenCheck from '../../images/check-3d-green.png'
import orangeCheck from '../../images/check-3d-orange.png'
import goldCheck from '../../images/check-3d-gold.png'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

import $ from 'jquery'

export default function Table({ mintMarauder }) {
    return (
        <section id="nft">
            <div className="container">
                <p className="mq-table-title gotham-black text-white text-center font-size-170 font-size-lg-230 mb-5">What Mustachios Can I Own?</p>

                {/* Types */}
                <div className="row justify-content-center align-items-start mb-5">
                    <div className="col-12 col-sm-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={pathfinders} alt="Mustachio Pathfinders" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">MUSTACHIOS #1 to #100</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">The First 100 Mustachios or the <b>"Genesis Set"</b>.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={marauders} alt="Mustachio Marauders" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">MUSTACHIOS #101 to #300</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">Get 20% off our Mustachio Marauder NFT using OWN.&nbsp;
                            <button className="btn link-color-2 p-0 font-size-100" style={{"marginTop": "-6px"}}>MINT NOW!</button></p>
                            {/*<p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">Stake 15M OWN for 60 Days to earn a Marauder.*/}
                            {/*    /!* <a href="https://ownly.io/ownmarauder" className="link-color-2 fw-bold" target="_blank" rel="noreferrer">STAKE NOW!</a> *!/*/}
                            {/*</p>*/}
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="mq-table-types">
                            <div className="mq-table-types-img">
                                <img className="w-100" src={rascals} alt="Mustachio Rascals" />
                            </div>

                            <p className="mq-table-types-sub gotham-semibold font-size-130 text-white text-center mb-2">10,000 MUSTACHIOS</p>
                            <p className="mq-table-types-sub gotham-light font-size-120 text-white text-center">10,000 Generative 3D Mustachios launching this October 8, 2022</p>
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
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">
                                        Pathfinders (<a href="https://ownly.market/pathfinders2d" target="_blank" rel="noreferrer" className="link-color-2">2D</a> and <a href="https://ownly.market/pathfinders3d" target="_blank" rel="noreferrer" className="link-color-2">3D</a>)
                                    </th>
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">
                                        <a href="https://ownly.market/marauders" target="_blank" rel="noreferrer" className="link-color-2">Marauders</a>
                                    </th>
                                    <th className="text-center align-middle gotham-bold text-white font-size-150">
                                        <a href="#" target="_blank" rel="noreferrer" className="link-color-2">Rascals</a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">3D Playable Character</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">
                                        <a href="/ar" className="link-color-2" target="_blank" rel="noreferrer">Mustachio Instagram AR Filter</a>
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">
                                        <a href="https://my.mustachioverse.com" className="link-color-2" target="_blank" rel="noreferrer">Mustachio NFT Visualizer Experience</a>
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">
                                        <a href="https://mustachioverse.com/discord" className="link-color-2" target="_blank" rel="noreferrer">Exclusive Discord Channel</a>
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Access to <a href="https://amac.ph" className="link-color-2" target="_blank" rel="noreferrer">AMAC</a> and <a href="https://bicolblockchain.com" className="link-color-2" target="_blank" rel="noreferrer">BBC</a></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Intricately Hand-drawn 2D PFP by Boii Mustache</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Hand-drawn 3D PFP by Boii Mustache</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr>
                                {/* <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">MustachioVerse Land Sale Discount</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr> */}
                                {/* <tr>
                                    <td className="align-middle gotham-light text-white font-size-100"><a href="https://ownly.io/ar" target="_blank" className="text-white" rel="noreferrer">Augmented Reality Filter on Instagram</a></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr> */}
                                {/* <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Exclusive Land Access within Mustachio Quest</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr> */}
                                {/*<tr>*/}
                                {/*    <td className="align-middle gotham-light text-white font-size-100">10% Cryptoback in OWN</td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100">*/}
                                {/*        <img src={greenCheck} alt="check" className="mq-table-check" />*/}
                                {/*    </td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100"></td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100"></td>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                {/*    <td className="align-middle gotham-light text-white font-size-100">Quarterly OWN Airdrop</td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100">*/}
                                {/*        <img src={greenCheck} alt="check" className="mq-table-check" />*/}
                                {/*    </td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100"></td>*/}
                                {/*    <td className="text-center align-middle gotham-light text-white font-size-100"></td>*/}
                                {/*</tr>*/}
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100"><a href="https://tales.mustachioverse.com" className="link-color-2" target="_blank" rel="noreferrer">The First NFT Tales Behind Each Mustachio</a></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={greenCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Discount when using $OWN token as payment</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={orangeCheck} alt="check" className="mq-table-check" />
                                    </td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Generative 3D Art</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">$OWN Token Airdrop for holders</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100"></td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">
                                        <img src={goldCheck} alt="check" className="mq-table-check" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-middle gotham-light text-white font-size-100">Maximum Supply of Mustachios</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">100</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">200</td>
                                    <td className="text-center align-middle gotham-light text-white font-size-100">10,000</td>
                                </tr>
                                <tr>
                                    <td className="border-left-none"></td>
                                    <td className="border-bottom text-center">
                                        <p className="gotham-bold text-white font-size-100 font-size-sm-140 mb-0">SOLD OUT</p>
                                    </td>
                                    <td className="border-bottom text-center">
                                        <button className="d-block d-md-none mx-auto btn link-color-2 p-0 font-size-100 font-size-sm-140" onClick={mintMarauder}>MINT<br />NOW</button>
                                        <button className="d-none d-md-block mx-auto btn link-color-2 p-0 font-size-100 font-size-sm-140" onClick={mintMarauder}>MINT NOW</button>
                                    </td>
                                    <td className="border-bottom align-middle text-center">
                                        <p className="gotham-bold text-white font-size-100 font-size-sm-140 mb-0">LAUNCHING OCT 2022</p>
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
