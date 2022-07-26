import './Tales.css'

import talesBanner from '../../images/tales-banner.jpg'
import taleImg from '../../images/tale-img.png'

export default function Tales() {
    return (
        <section id="tales" style={{"backgroundImage": `url(${talesBanner})`}}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-7 col-12 h-100">
                        <div className="tales-wrap d-flex flex-column justify-content-center align-items-center h-100">
                            <p className="tales-content text-white font-size-130 font-size-md-180 font-size-lg-220 font-size-xl-250 text-center">The Tale of the Prospector</p>
                            <p className="tales-content text-white font-size-100 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">O, when the Mustachios dwell in the MustachioVerse, there is but one Mustachio who stood out among the rest.</p>
                            <p className="tales-content text-white font-size-100 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">The Prospector, supreme beyond all MustachioKind, who bore in his mighty hands all 9 artifacts from the fabled Grooming Kit.</p>
                            <p className="tales-content text-white font-size-100 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">He who dared seek success and happiness through audacious exploits that moved mountains and changed the courses of the rivers.</p>
                            <p className="tales-content text-white font-size-100 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">The Prospector.</p>
                            <p className="tales-content text-white font-size-100 font-size-md-100 font-size-lg-110 font-size-xl-120 text-center">You'll hear more about this noble legend who brought honour to the land of mustached beings and born explorers in two ticks.</p>

                            <a href="https://tales.mustachioverse.com" target="_blank" rel="noreferrer" className="tales-btn btn btn-custom-2 gotham-black font-size-130 px-4 mx-3">READ THE TALES</a>
                        </div>
                    </div>
                    <div className="tales-wrapper col-lg-5 col-12 d-none d-lg-block h-100">
                        <img className="w-100" src={taleImg} alt="Tale" />
                    </div>
                </div>
            </div>
        </section>
    )
}