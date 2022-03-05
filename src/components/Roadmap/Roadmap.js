import './Roadmap.css'

// images
import roadmapBG from '../../images/roadmap-bg.jpg'
import logo from '../../images/MQ_logo_white.png'

export default function Roadmap() {
  return (
    <section id="roadmap" style={{"backgroundImage": `url(${roadmapBG})`}}>
        <div className="roadmap-logo">
            <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
        </div>
        <p className="roadmap-title text-color-3 gotham-black font-size-230 text-center">ROADMAP</p>
        
        <div className="roadmap-border my-3"></div>
        <div className="roadmap-wrapper d-flex justify-content-start">
            {/* 2022 */}
            <div id="2022-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2022 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest Concept and Gameplay Announcement</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest Early Preview Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="now q-pointer"></div>
                        <div className="now q-content gotham-light text-black font-size-110">Launch of 3D Mustachio Visualizer</div>
                    </div>
                </div>
            </div>
            <div id="2022-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Launch of the 10,000 3D Mustachio Redeemers</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest NFT Land Sale</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Beta Launch</div>
                    </div>
                </div>
            </div>
            <div id="2022-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: 1.0 Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Marketplace via Ownly Market</div>
                    </div>
                </div>
            </div>
            <div id="2022-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Play-To-Earn Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">$QUEST Reward Token Launch</div>
                    </div>
                </div>
            </div>

            {/* 2023 */}
            <div id="2023-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2023 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Automated Scholarships</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>

            {/* 2024 */}
            <div id="2024-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2024 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Automated Scholarships</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Integration with OwnChain</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>

            {/* PAST ROADMAPS */}
            {/* 2021 */}
            <div id="past-roadmaps" className="roadmap-quarter">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column past">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">PAST ROADMAPS</p>
                    </div>
                </div>
            </div>
            <div id="2021-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column after-past">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2021 Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Creation of Mustachios</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Presale (Genesis Set - 100 Mustachios)</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Official Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Beginning of NFT Tales (Gen. 1)</div>
                    </div>
                </div>
            </div>
            <div id="2021-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">OWN Token Airdrop to Mustachio Holders</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Launch of The Sages Rant Collectibles</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
