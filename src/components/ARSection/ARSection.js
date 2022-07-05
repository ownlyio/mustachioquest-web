import './ARSection.css'

// images
import imgAR from "../../images/ar/AR.gif";

import bordertop from '../../images/sneakpeek-top.png'
import borderbot from '../../images/sneakpeek-bot.png'

export default function ARSection() {
    return (
        <section className="position-relative overflow-hidden py-5" id="ar" style={{"background-color":"#008080"}}>
            <div className="container py-5">
                <div className="row align-items-center my-5 py-lg-5">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="px-sm-5 px-lg-0 mx-3 mx-sm-5 mx-lg-0 mb-3">
                            <img src={imgAR} className="w-100" alt="Augmented Reality" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="ps-lg-5 mb-4 mb-lg-0 pb-lg-0">
                            <h2 className="text-white text-center text-lg-start fw-bold font-size-xl-250 font-size-xxl-300 mb-4 pb-2">Augmented Reality Filter</h2>
                            <p className="text-white text-center text-lg-start font-size-xl-130 mb-4">#CanYourJPEG immerse in your day-to-day activities? Well, these Mustachios can! Try out our <a href="/ar" className="link-color-2" >Mustachio filter on Instagram</a> to see ‘em dancing IRL.</p>
                            <p className="text-white text-center text-lg-start font-size-xl-130 mb-4">Over 100 Mustachios have been loaded so you can see your very own Mustachios in action.</p>
                            <p className="text-white text-center text-lg-start font-size-xl-130 mb-4 pb-3">Make sure you use the hashtag #CanYourJPEG so we can track your entries and have them featured on our website and social media platforms.</p>

                            <div className="text-center text-lg-start">
                                <a href="/ar" className="btn btn-custom-2 gotham-black font-size-130 px-4">TRY THEM OUT NOW!</a>
                            </div>
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
