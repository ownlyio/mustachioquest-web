import './CTA.css'

export default function CTA() {
    const redirectPage = url => {
        window.open(url, "_blank")
    }

    return (
        <section id="cta">
            <div className="container text-center">
                <p className="gotham-black text-color-1 font-size-150">Join our Discord community to take part in building this open world NFT game.</p>
                <button onClick={() => redirectPage("https://mustachioverse.com/discord")} type="button" className="btn btn-custom-1 gotham-black font-size-140">JOIN OUR DISCORD!</button>
            </div>
        </section>
    )
}
