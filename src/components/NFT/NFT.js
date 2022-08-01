import './NFT.css'

import mustachios from '../../images/mustachios-cover.png'
import mexico from "../../images/mexico-3d.webm";

export default function NFT() {
    return (
        <section id="mustachios">
            <div className="mustachio-image mb-2">
                <img src={mustachios} alt="Mustachios" className="w-100" />
            </div>
            <div className="container">
                <p className="mustachios-sub font-size-100 font-size-lg-130 text-center text-color-4 line-height-170 mt-2 mb-4">Boii Mustache crafted another masterpiece with his sturdy pen and a subtle tremble in his shoulders. The Mustachios, the first <a href="https://tales.mustachioverse.com" className="font-size-100 link-color-5">NFT Tales</a>, is a work of art that now integrates its own 3D Open World Metaverse Game, <a href="https://mustachio.quest" className="font-size-100 link-color-5">Mustachio Quest</a>.</p>

                <div className="bg-color-1 w-100 mb-4" style={{"height": "1px"}}></div>

                <div className="mt-4 row align-items-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <p className="mustachios-text-title font-size-150 font-size-lg-200 gotham-black text-center text-lg-start text-color-4 mb-4">THE ARCHETYPES</p>
                        <div className="mustachios-text-item d-flex align-items-start mb-4">
                            <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">1</div>
                            <div className="mustachios-text-wrap">
                                <p className="mustachios-text mt-2 mb-1">
                                    <a href="/pathfinders" className="font-size-130 font-size-lg-150 gotham-bold text-start link-color-5">Pathfinders</a>
                                </p>
                                <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-color-4 line-height-160">The Genesis Set of the Mustachios (#1-#100) with a maximum supply of 100 Mustachio Pathfinder NFTs.</p>
                            </div>
                        </div>
                        <div className="mustachios-text-item d-flex align-items-start mb-4">
                            <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">2</div>
                            <div className="mustachios-text-wrap">
                                <p className="mustachios-text mt-2 mb-1">
                                    <a href="/marauders" className="font-size-130 font-size-lg-150 gotham-bold text-start link-color-5">Marauders</a>
                                </p>
                                <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-color-4 line-height-160">Second Generation of Mustachios (#101-#300) with a maximum supply of 200 Mustachio Marauder NFTs.</p>
                            </div>
                        </div>
                        <div className="mustachios-text-item d-flex align-items-start">
                            <div className="mustachios-number bg-color-1 gotham-bold text-center text-white font-size-130 font-size-lg-150">3</div>
                            <div className="mustachios-text-wrap">
                                <p className="mustachios-text font-size-130 font-size-lg-150 gotham-bold text-start text-color-4 mt-2 mb-1">Rascals</p>
                                <p className="mustachios-text font-size-100 font-size-lg-120 text-start text-color-4 line-height-160">Generative 3D Mustachios with a maximum supply of 10,000 Mustachio Rascals NFTs.</p>
                            </div>
                        </div>
                        <div className="mustachios-btn mt-3 text-center">
                            <a href="/#nft" className="btn btn-custom-2 gotham-black font-size-130 px-4">LEARN MORE</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* <div className="mustachios-3d-wrap">
                            <img src={mexico} alt="Mexico" className="w-100" />
                        </div> */}
                        <video autoPlay={true} loop muted className="w-100 h-100" style={{"borderRadius": "10px"}}>
                            <source src={mexico} type="video/webm" />    
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}