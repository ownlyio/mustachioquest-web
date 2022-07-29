import './Game.css'
import { useState, useEffect } from 'react'

// images
import mainbanner from '../../images/banner.jpg'
import mobileBanner from '../../images/mq_new_banner_tab.jpg'
import portal from '../../images/banner-portal.png'
import mustachios from '../../images/mustachios.png'
import logo from '../../images/MQ_logo_banner.png'

export default function Game() {
    const [width, setWidth] = useState(0)

    const getBG = devWidth => {
        if (devWidth > 991) return {"backgroundImage": `url('${mainbanner}')`, "backgroundSize": "cover", "backgroundPosition": "top center"}
        return {"backgroundImage": `url('${mobileBanner}')`, "backgroundSize": "cover", "backgroundPosition": "top center"}
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        // for debug purposes
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
    },[])

    return (
        <section id="game" className="py-5" style={getBG(width)}>
            <div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-lg-6 px-xl-4 px-xxl-5">
						<div className="mq-banner-logo">
							<img className="w-100" src={logo} alt="MQ Logo" />
						</div>
						<div className="text-white text-center font-size-100 font-size-sm-120 font-size-md-130 font-size-lg-140 mb-3">
                            <span className="neo-black">Put your power to the test with Mustachio Quest!</span>
                        </div>
						<div className="text-white text-center font-size-100 font-size-sm-120 font-size-md-130 font-size-lg-140 mb-3">Inspired by the tales and adventures of the Mustachios in The Sages Rant, Mustachio Quest is Ownly’s first 3D Open World Metaverse Game created inside MustachioVerse where players can play around using the 3D versions of their Mustachios.</div>
						<div className="text-center">
                            <a href="/game" className="btn btn-custom-2 gotham-black font-size-130 px-4">LEARN MORE</a>
						</div>
					</div>
					<div className="d-none d-lg-block col-lg-6">
						<div className="mq-banner-assets">
							<div className="mq-banner-portal">
								<img className="w-100" src={portal} alt="MQ Portal" />
							</div>
							<div className="mq-banner-mustachios">
								<img className="w-100" src={mustachios} alt="MQ Mustachios" />
							</div>
						</div>
					</div>
				</div>
			</div>
        </section>
    )
}