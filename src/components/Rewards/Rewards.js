import './Rewards.css'

// images
import rewardsBG from '../../images/rewards-bg.jpg'
import marauders from '../../images/marauders20x10.png'
import maraudersTab from '../../images/marauders25x8.jpg'
import bordertop from "../../images/sneakpeek-top.png";
import borderbot from "../../images/sneakpeek-bot.png";

export default function Rewards() {
    return (
        <section id="rewards" style={{"backgroundImage": `url(${rewardsBG})`}}>
            <div className="container text-center pb-2 pb-lg-5">
                <p className="rewards-title gotham-black text-white text-center font-size-170 mt-0 mt-xl-5 mb-3 mb-lg-5">EARN A MUSTACHIO MARAUDER&nbsp;NFT</p>
            </div>

            <div className="d-block d-lg-none">
                <div className="w-100 mb-3 mb-sm-4 mb-md-5">
                    <img src={maraudersTab} className="w-100" alt="Mustachio PathfindersMarauders 2D" />
                </div>
            </div>

            <div className="container text-center pb-5">
                <div className="row align-items-center pb-4">
                    <div className="col-12 col-lg-5">
                        <p className="text-white gotham-bold text-left font-size-100 font-size-md-130 font-size-lg-150 mb-3">HOW TO PARTICIPATE:</p>
                        <ul>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">Stake 15 Million OWN for 60 days at <a href="https://ownly.io/ownmarauder" className="link-color-3 gotham-light font-size-80 font-size-md-100" target="_blank" rel="noreferrer">Ownly's Staking Platform</a> and earn one Mustachio Marauder NFT. Only one Marauder NFT per address.</p>
                            </li>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">Unstaking/withdrawing before the 60-day period will reset your staking. You need to complete the full 60 days to earn the Mustachio NFT.</p>
                            </li>
                        </ul>

                        <p className="text-white gotham-bold text-left font-size-100 font-size-md-130 font-size-lg-150 mb-3 mt-5">PERKS:</p>
                        <ul>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">3D Playable Character in Mustachio Quest</p>
                            </li>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">Intricately Hand-drawn 2D PFP by Boii Mustache</p>
                            </li>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">MustachioVerse Land Sale Discount</p>
                            </li>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">Maximum supply of only 200 Pathfinders</p>
                            </li>
                            <li className="text-white">
                                <p className="text-white text-left gotham-light font-size-90 font-size-md-110 font-size-lg-120 mb-2">Exclusive Discord Channel</p>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <a href="https://ownly.io/ownmarauder" target="_blank" rel="noreferrer" className="rewards-btn btn btn-custom-2 gotham-black font-size-130 font-size-md-170">STAKE OWN NOW!</a>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-12 col-lg-7 mb-0 ps-5">
                        <div className="rewards-img">
                            <img src={marauders} className="w-100" alt="Mustachio Pathfinders 2D" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Borders */}
            <img src={bordertop} className="sneakpeek-border sneakpeek-top" alt="Border Top" />
            <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
        </section>
    )
}
