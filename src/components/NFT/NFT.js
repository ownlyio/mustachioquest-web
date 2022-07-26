import './NFT.css'

import mustachios from '../../images/Mustachios_Banner.jpg'
import borderTop from '../../images/faq-top.png'
import mexico from "../../images/mexico-3d.png";

export default function NFT() {
    return (
        <section id="mustachios">
            <div className="mustachios-wrap">
                <p className="sneakpeeks-title gotham-black text-white text-center font-size-200 pt-2 mb-4">WHAT ARE THE MUSTACHIOS?</p>
                <div className="container">
                    <div className="mustachio-image mb-4">
                        <img src={mustachios} alt="Mustachios" className="w-100" />
                    </div>
                    <p className="mustachios-sub font-size-130 text-center text-white line-height-170 mt-2 mb-4">With his mighty pen and a slight quiver on his shoulders, Boii Mustache have yet created another masterpiece... in the form of The Mustachios, the first-ever NFT Tales, that now comes with its own 3D Open World Metaverse Game, Mustachio Quest.</p>

                    <div className="bg-color-1 w-100 mb-4" style={{"height": "1px"}}></div>

                    <div className="mt-4 row align-items-center">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            <p className="mustachios-text-title font-size-150 font-size-lg-200 gotham-black text-center text-lg-start text-white mb-4">THE ARCHETYPES</p>
                            <div className="mustachios-text-item d-flex align-items-start mb-4">
                                <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">1</div>
                                <div className="mustachios-text-wrap">
                                    <p className="mustachios-text mt-2 mb-1">
                                        <a href="/pathfinders" className="font-size-130 font-size-lg-150 gotham-bold text-start text-white link-color-2">Pathfinders</a>
                                    </p>
                                    <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-white line-height-160">The Genesis Set of the Mustachios (#1-#100) with a maximum supply of 100 Mustachio Pathfinder NFTs.</p>
                                </div>
                            </div>
                            <div className="mustachios-text-item d-flex align-items-start mb-4">
                                <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">2</div>
                                <div className="mustachios-text-wrap">
                                    <p className="mustachios-text mt-2 mb-1">
                                        <a href="/marauders" className="font-size-130 font-size-lg-150 gotham-bold text-start text-white link-color-2">Marauders</a>
                                    </p>
                                    <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-white line-height-160">Second Generation of Mustachios (#101-#300) with a maximum supply of 200 Mustachio Marauder NFTs.</p>
                                </div>
                            </div>
                            <div className="mustachios-text-item d-flex align-items-start">
                                <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">3</div>
                                <div className="mustachios-text-wrap">
                                    <p className="mustachios-text font-size-130 font-size-lg-150 gotham-bold text-start text-white mt-2 mb-1">Rascals</p>
                                    <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-white line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>
                                </div>
                            </div>
                            <div className="mustachios-btn mt-3 text-center">
                                <a href="/#nft" className="btn btn-custom-2 gotham-black font-size-130 px-4">Learn More</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            <div className="mustachios-3d-wrap">
                                <img src={mexico} alt="Mexico" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={borderTop} className="faqs-border" alt="Border Top" />
        </section>
    )
}