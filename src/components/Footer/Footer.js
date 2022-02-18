import { faDiscord, faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export default function Footer() {
    const redirectPage = url => {
        window.open(url, "_blank")
    }

    return (
        <section id="footer">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="footer-item cursor-pointer" onClick={() => redirectPage("https://facebook.com/mustachioverse")}>
                        <FontAwesomeIcon color="white" icon={faFacebook} size="3x" />
                    </div>
                    <div className="footer-item cursor-pointer" onClick={() => redirectPage("https://instagram.com/mustachioverse")}>
                        <FontAwesomeIcon color="white" icon={faInstagram} size="3x" />
                    </div>
                    <div className="footer-item cursor-pointer" onClick={() => redirectPage("http://discord.gg/rfypRx4cjh")}>
                        <FontAwesomeIcon color="white" icon={faDiscord} size="3x" />
                    </div>
                    <div className="footer-item cursor-pointer" onClick={() => redirectPage("https://twitter.com/mustachioverse")}>
                        <FontAwesomeIcon color="white" icon={faTwitter} size="3x" />
                    </div>
                    <div className="footer-item cursor-pointer" onClick={() => redirectPage("https://www.tiktok.com/@mustachioverse")}>
                        <FontAwesomeIcon color="white" icon={faTiktok} size="3x" />
                    </div>
                </div>
            </div>
        </section>
    )
}
