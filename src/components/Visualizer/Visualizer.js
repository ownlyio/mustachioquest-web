import './Visualizer.css'

import visualizerBG from '../../images/visualizer-2.png'
import mqLogo from '../../images/visualizer-logo.png'

export default function Visualizer() {
    return (
        <section id="visualizer" style={{"backgroundImage": `url(${visualizerBG})`}}>
            <div className="container h-100">
                <div className="visualizer-wrap d-flex flex-column justify-content-center align-items-center h-100">
                    <div className="visualizer-img">
                        <img src={mqLogo} alt="MQ Logo" className="w-100 mb-2" />
                    </div>
                    <p className="visualizer-content text-white font-size-90 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">Introducing our Mustachio Visualizer where you can load your Genesis Set Mustachios, aka Mustachio Pathfinders, using your Metamask Wallet and test out your minted Mustachio!</p>
                    <p className="visualizer-content text-white font-size-90 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">Other 3D Mustachio Pathfinders will be loaded soon.</p>
                    <a href="https://my.mustachioverse.com" target="_blank" rel="noreferrer" className="visualizer-btn btn btn-custom-2 gotham-black font-size-130 px-4 mx-3">LAUNCH IT NOW!</a>
                </div>
            </div>
        </section>
    )
}
