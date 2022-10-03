import { useEffect } from 'react'
import './Roadmap.css'

// images
import roadmapBG from '../../images/roadmap-bg.jpg'
import logo from '../../images/MQ_logo_white.png'

export default function Roadmap() {
    function is_touch_enabled() {
        return ( 'ontouchstart' in window ) ||
               ( navigator.maxTouchPoints > 0 ) ||
               ( navigator.msMaxTouchPoints > 0 )
    }

    function listenForTouchEvt() {
        const slider = document.querySelector('.roadmap-wrapper')
        let isDown = false, startX, scrollLeft

        slider.addEventListener('mousedown', (e) => {
            isDown = true
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
        })
    
        slider.addEventListener('mouseleave', () => {
            isDown = false
        })
    
        slider.addEventListener('mouseup', () => {
            isDown = false
        })
    
        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = (x - startX) * 3 //scroll-fast
            slider.scrollLeft = scrollLeft - walk
        })
    }
    
    useEffect(() => {
        if (!is_touch_enabled()) listenForTouchEvt()
    }, [])

    return (
        <section id="roadmap" style={{"backgroundImage": `url(${roadmapBG})`}}>
            <div className="roadmap-logo">
                <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
            </div>
            <p className="roadmap-title text-color-3 gotham-black font-size-280 text-center mb-5 pb-3">ROADMAP</p>

            <div className="roadmap-border my-3"></div>
            <div className="roadmap-wrapper d-flex justify-content-start">
                {/* 2022 */}
                <div id="2022-q4" className="roadmap-quarter year-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column year">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">2022 Q4</p>
                        </div>                    
                        <div className="q-column quarter-mr">
                            <div className="now q-pointer"></div>
                            <div className="now q-content gotham-light text-black font-size-110">Launch of 10,00 3D Mustachio Rascals NFT</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Multi-user Early Preview</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Metaverse Gallery Continuous Development</div>
                        </div>
                        {/* <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Mustachios Augmented Reality NFT</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: 1.0 Launch</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Play-and-Earn Launch</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">$QUEST Reward Token Launch</div>
                        </div> */}
                    </div>
                </div>

                {/* 2023 */}
                <div id="2023" className="roadmap-quarter year-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column year">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">2023</p>
                        </div>                    
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Multiuser Experience Development</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">TBD</div>
                        </div>
                    </div>
                </div>

                {/* <div id="2023-q1" className="roadmap-quarter q-margin">
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
                </div> */}

                {/* 2024 */}
                <div id="2023" className="roadmap-quarter year-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column year">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">2024</p>
                        </div>                    
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">Metaverse Experience continuous Development</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="soon q-pointer"></div>
                            <div className="soon q-content gotham-light text-black font-size-110">TBD</div>
                        </div>
                    </div>
                </div>
                {/* <div id="2024-q1" className="roadmap-quarter q-margin">
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
                </div> */}

                {/* PAST ROADMAPS */}
                {/* 2021 */}
                <div id="past-roadmaps" className="roadmap-quarter">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column past">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">ACCOMPLISHMENTS</p>
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

                {/* 2022 */}
                <div id="2022-q1" className="roadmap-quarter q-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column quarter">
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
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Launch of the Stake-to-Own Mustachio Marauder NFT Program</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Launch of 3D Mustachio Visualizer</div>
                        </div>
                    </div>
                </div>
                <div id="2022-q2" className="roadmap-quarter q-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column quarter">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Closed Beta Testing for Genesis Holders</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Minting of Mustachio Marauder NFTs</div>
                        </div>
                    </div>
                </div>
                <div id="2022-q3" className="roadmap-quarter q-margin">
                    <div className="d-flex justify-content-evenly align-items-start">
                        <div className="q-column quarter">
                            <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest Marketplace via Ownly Market</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest: 1.0 Launch change to Mustachio Quest: Public Beta</div>
                        </div>
                        <div className="q-column quarter-mr">
                            <div className="done q-pointer"></div>
                            <div className="done q-content gotham-light text-black font-size-110">MustachioVerse Metaverse Gallery</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
