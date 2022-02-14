import './Features.css'

// images
import feat1 from '../../images/feature-1.png'
import feat2 from '../../images/feature-2.png'
import feat3 from '../../images/feature-3.png'
import compass from '../../images/features-compass.png'
import squarehead from '../../images/feature-3-mustachio.png'
import must2d from '../../images/feature-1-2d.png'
import must3d from '../../images/feature-1-3d.png'
import borderTop from '../../images/feat-top.png'
import borderBottom from '../../images/feat-bot.png'

export default function Features() {
  return (
    <section id="features">
        <div className="container">
            <div className="row justify-content-center align-items-start">
                <div className="col-12 col-md-4">
                    <div className="feat px-3 text-center">
                        <div className="feat-wrapper">
                            <div className="feat-icon">
                                <img src={feat1} className="w-100" alt="Features Icon" />
                            </div>
                            <div className="feat-2d">
                                <img src={must2d} className="w-100" alt="2D Mustachio" />
                            </div>
                            <div className="feat-3d">
                                <img src={must3d} className="w-100" alt="3D Mustachio" />
                            </div>
                        </div>
                        <p className="feat-title font-size-170 text-white mb-3">The Mustachios are in motion.</p>
                        <p className="feat-sub font-size-140 text-white font-w-hermann w-hermann-reg mb-0">2D Mustachio NFTs to 3D playable in-game avatars.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feat px-3 text-center">
                        <div className="feat-wrapper">
                            <div className="feat-icon">
                                <img src={feat2} className="w-100" alt="Features Icon" />
                            </div>
                            <div className="feat-compass">
                                <img src={compass} className="w-100" alt="Compass" />
                            </div>
                        </div>
                        <p className="feat-title font-size-170 text-white mb-3">Evoke a sense of discovery.</p>
                        <p className="feat-sub font-size-140 text-white font-w-hermann w-hermann-reg mb-0">Move freely, find your fortune, and craft your own experience in this open world game.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="feat px-3 text-center">
                        <div className="feat-wrapper">
                            <div className="feat-icon">
                                <img src={feat3} className="w-100" alt="Features Icon" />
                            </div>
                            <div className="feat-mustachio">
                                <img src={squarehead} className="w-100" alt="Featured Mustachio" />
                            </div>
                        </div>
                        <p className="feat-title font-size-170 text-white mb-3">Build a fictional world with us.</p>
                        <p className="feat-sub font-size-140 text-white font-w-hermann w-hermann-reg mb-0">Get involved in our Discord community as we brainstorm ideas and develop the game.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Borders */}
        <img src={borderTop} className="feat-border feat-t" alt="Border Top" />
        <img src={borderBottom} className="feat-border feat-b" alt="Border Bottom" />
    </section>
  )
}
