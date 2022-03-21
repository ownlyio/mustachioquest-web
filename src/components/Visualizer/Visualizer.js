import './Visualizer.css'

import visualizerBG from '../../images/visualizer.png'
import mqLogo from '../../images/visualizer-logo.png'

export default function Visualizer() {
    return (
        <section id="visualizer" style={{"backgroundImage": `url(${visualizerBG})`}}>
            <div className="container h-100">
                <div className="visualizer-wrap d-flex flex-column align-items-center justify-content-center justify-content-lg-start align-items-lg-start h-100 pt-lg-5">
                    <div className="text-center pt-lg-4">
                        <div style={{"width": "280px"}}>
                            <img src={mqLogo} alt="MQ Logo" className="w-100 mb-2" />
                            <a href="https://my.mustachioverse.com" target="_blank" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-130 px-4 mx-3">LAUNCH IT NOW!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
