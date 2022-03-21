import './Visualizer.css'

import visualizerBG from '../../images/visualizer.jpg'
import mqLogo from '../../images/visualizer-logo.png'

export default function Visualizer() {
    return (
        <section id="visualizer" style={{"backgroundImage": `url(${visualizerBG})`}}>
            <div className="container h-100">
                <div className="visualizer-wrap d-flex flex-column justify-content-center h-100">
                    <div className="visualizer-img">
                        <img src={mqLogo} alt="MQ Logo" className="w-100" />
                    </div>
                    <a href="https://my.mustachioverse.com" target="_blank" rel="noreferrer" className="visualizer-btn btn btn-custom-2 gotham-black font-size-140">LAUNCH IT NOW!</a>
                </div>
            </div>
        </section>
    )
}
