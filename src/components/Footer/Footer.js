import { faDiscord, faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export default function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <a className="footer-item cursor-pointer" href="https://facebook.com/mustachioverse" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon color="white" icon={faFacebook} size="3x" />
                    </a>
                    <a className="footer-item cursor-pointer" href="https://instagram.com/mustachioverse" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon color="white" icon={faInstagram} size="3x" />
                    </a>
                    <a className="footer-item cursor-pointer" href="https://mustachioverse.com/discord" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon color="white" icon={faDiscord} size="3x" />
                    </a>
                    <a className="footer-item cursor-pointer" href="https://twitter.com/mustachioverse" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon color="white" icon={faTwitter} size="3x" />
                    </a>
                    <a className="footer-item cursor-pointer" href="https://www.tiktok.com/@mustachioverse" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon color="white" icon={faTiktok} size="3x" />
                    </a>
                </div>
            </div>
        </section>
    )
}
