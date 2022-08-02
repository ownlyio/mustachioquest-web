import { faInstagram, faArtstation, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Artist.css'

// images 
import bmWide from '../../images/artist/bm_wide.png'
import bmSquare from '../../images/artist/bm_square.png'
import bmMobile from '../../images/artist/bm_mobile.png'
import boiiMustache from '../../images/artist/Mustache-Boii.webp'

export default function Artist() {
    return (
        <section id="artist">
            <div className="artist-banner d-none d-sm-none d-lg-block h-screen w-100" style={{"backgroundImage": `url(${bmWide})`}}></div>
            <div className="artist-banner d-none d-sm-block d-lg-none h-screen w-100" style={{"backgroundImage": `url(${bmSquare})`}}></div>
            <div className="artist-banner d-block d-sm-none d-lg-none h-screen w-100" style={{"backgroundImage": `url(${bmMobile})`}}></div>

            <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-8 order-1 order-lg-0">
                        <div className="pe-lg-3">
                            <p className="gotham-black text-center text-lg-start font-size-240 font-size-md-270 mb-4">Meet the Artist: Boii Mustache</p>

                            <div className="bg-color-1 w-100 mb-4" style={{"height":"1px"}}></div>

                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">Boii Mustache was created a few years back. It was a sketch given by someone special and was later developed by the artist as his own character.</p>
                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">The character Boii Mustache is the artist himself, a long-haired guy with a nevus in his lower left eye and of course, the legendary mustache.</p>
                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">With the idea of becoming whoever we want to be, he started creating different mustaches unique to each other, from colors to mood to concept.</p>
                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-4">It's a never-ending creative collaboration between the artist, what he sees, what he thinks, and what he feels.</p>   
                             

                            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                                <a className="footer-item cursor-pointer" href="https://twitter.com/BoiiMustache" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon color="black" icon={faTwitter} size="3x" />
                                </a>
                                <a className="footer-item cursor-pointer" href="https://www.instagram.com/mustache.boii/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon color="black" icon={faInstagram} size="3x" />
                                </a>
                                <a className="footer-item cursor-pointer" href="https://www.artstation.com/sphinx1232" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon color="black" icon={faArtstation} size="3x" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 order-0 order-lg-1 mb-5 mb-lg-0">
                        <div className="ps-lg-4">
                            <div className="mx-4 mx-sm-5 mx-lg-0 px-sm-5 px-lg-0">
                                <div className="mx-md-5 mx-lg-0 px-md-5 px-lg-0">
                                    <div className="background-image-cover w-100" style={{"paddingTop":"100%", "borderRadius":"50%", "backgroundImage":`url(${ boiiMustache})`}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}