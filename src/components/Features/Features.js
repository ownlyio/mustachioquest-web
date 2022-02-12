import './Features.css'

// images
import featIcon from '../../images/features-icon.png'
import compass from '../../images/features-compass.png'
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
                                <img src={featIcon} className="w-100" alt="Features Icon" />
                            </div>
                            <div className="feat-compass">
                                <img src={compass} className="w-100" alt="Compass" />
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
                                <img src={featIcon} className="w-100" alt="Features Icon" />
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
                                <img src={featIcon} className="w-100" alt="Features Icon" />
                            </div>
                            <div className="feat-compass">
                                <img src={compass} className="w-100" alt="Compass" />
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
