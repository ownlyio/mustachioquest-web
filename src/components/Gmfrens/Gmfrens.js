import './Gmfrens.css'

// images
import imgGmfrens from '../../images/gmfrens.png'
import imgYgg from '../../images/ygg.png'
import imgOpGames from '../../images/OPGames_Blue.png'

export default function Gmfrens() {
    return (
        <section id="gmfrens">
            <div className="gmfrens-bg-color">
                <div className="container py-5">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="px-sm-5 px-lg-0 mx-3 mx-sm-5 mx-lg-0 mb-3">
                                <a href="https://www.gmfrens.games" target="_blank" rel="noreferrer">
                                    <img src={imgGmfrens} className="w-100" alt="GM Frens" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="ps-lg-3 mb-5 pb-3 mb-lg-0 pb-lg-0">
                                <h2 className="text-white text-center text-lg-start fw-bold font-size-xl-250 font-size-xxl-300 mb-4 pb-2">Mustachio Quest took part in GM&nbsp;Frens's acceleration program.</h2>
                                <p className="text-white text-center text-lg-start font-size-xl-140 mb-4">The GM Frens Accelerator is a 3-month program that provides aspiring developers with the building blocks to create fun, profitable Web3 games in partnership with YGG and OP Games.</p>

                                <div className="text-center text-lg-start">
                                    <a href="https://yieldguild.io/" target="_blank" rel="noreferrer">
                                        <img src={imgYgg} className="px-2" height="60" />
                                    </a>
                                    <a href="https://www.opgames.org/" target="_blank" rel="noreferrer">
                                        <img src={imgOpGames} className="px-2" height="60" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
