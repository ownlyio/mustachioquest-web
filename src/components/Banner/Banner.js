import './Banner.css'

// images
import mainbanner from '../../images/banner.jpg'
import landscape from '../../images/landscape.png'
import portal from '../../images/banner-portal.png'
import mustachios from '../../images/mustachios.png'
import logo from '../../images/MQ_logo_banner.png'

export default function Banner() {
    return (
        <>
            {/* PC */}
            <section id="first-section" className="d-none d-lg-block" style={{"backgroundImage": `url(${mainbanner})`}}>
                <div className="banner mb-5">
                    <div className="banner-img portal-wrap">
                        <img src={portal} className="w-100 portal" alt="Portal" />
                    </div>
                    <div className="banner-img mustachio-wrap">
                        <img src={mustachios} className="w-100 mustachios" alt="Mustachios" />
                    </div>

                    <div className="logo">
                        <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                    </div>
                    <div className="banner-content">
                        <p className="font-w-hermann w-hermann-semibold text-1 text-center mb-0 font-size-140 text-color-1">Conquer the wild. Embrace the feat.</p>
                        <p className="font-w-hermann w-hermann-semibold text-2 text-center mb-0 font-size-140 text-color-1">Welcome to Ownly’s first Play-to-Earn NFT game.</p>
                    </div>
                </div>
                <div className="banner-2">
                    <div className="landscape">
                        <img src={landscape} className="w-100" alt="Landscape" />
                    </div>
                    <p className="font-w-hermann w-hermann-semibold text-3 text-center mb-0 font-size-140 text-color-1">Embark on an adventure in the land of Mustachios. Fulfill quests, collect artifacts, and play your heart out in this interactive game.</p>
                    <a href="http://discord.gg/rfypRx4cjh" target="_blank" rel="noreferrer" className="join-discord banner-2-btn btn btn-custom-1 gotham-black font-size-140">JOIN OUR DISCORD!</a>
                </div>
            </section>

            {/* Tab and Mobile  */}
            <section id="mobile-first-section" className="mobile-banner d-block d-lg-none" style={{"backgroundImage": `url(${mainbanner})`}}>
                <div className="mobile-1">
                    <div className="mobile-1-wrapper">
                        <div className="mobile-assets mobile-portal-wrap">
                            <img src={portal} className="w-100" alt="Portal" />
                        </div>
                        <div className="mobile-assets mobile-mustachio-wrap">
                            <img src={mustachios} className="w-100" alt="Mustachios" />
                        </div>

                        <div className="mobile-banner-content d-flex justify-content-center align-items-center flex-column">
                            <div className="mobile-logo">
                                <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                            </div>
                            <p className="font-w-hermann w-hermann-semibold text-1 text-center mb-0 font-size-140 text-color-1">Conquer the wild. Embrace the feat. Welcome to Ownly’s first Play-to-Earn NFT game.</p>
                        </div>
                    </div>
                </div>
                <div className="mobile-2">
                    <div className="mobile-landscape">
                        <img src={landscape} className="w-100" alt="Landscape" />
                    </div>
                    <p className="mobile-2-title font-w-hermann w-hermann-semibold text-center mb-0 font-size-140 text-color-1">Embark on an adventure in the land of Mustachios. Fulfill quests, collect artifacts, and play your heart out in this interactive game.</p>
                    <a href="http://discord.gg/rfypRx4cjh" target="_blank" rel="noreferrer" className="mobile-join-discord banner-2-btn btn btn-custom-1 gotham-black font-size-140">JOIN OUR DISCORD!</a>
                </div>
            </section>
        </>
    )
}
