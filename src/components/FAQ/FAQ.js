import './FAQ.css'
import border from '../../images/faq-top.png'

export default function FAQ() {
  return (
    <section id="faqs">
        <div className="container">
            <p className="gotham-black text-center text-white font-size-170 mb-5">FREQUENTLY ASKED QUESTIONS</p>

            <div className="accordion accordion-flush" id="app-faqs-accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-1">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                            What is a Mustachio?
                        </button>
                    </h2>
                    <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented Boii Mustache, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings. Now, the concept is solidified through our play-to-earn game, Mustachio Quest, where our Mustachio holders can fulfill quests in an open world NFT game as their 3D Mustachio avatar.</p>
                            <p className="font-size-120 gotham-light">There will be a total of 300 Mustachios that come with 2D Mustachio NFTs. Our first 100 Mustachios from our Genesis set are called Mustachio Royals, and 101-300 Mustachios are called Mustachio Rulers, and an additional 10,000 3D generative Mustachios soon to launch are called Mustachio Redeemers.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-2">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                            How do I get a Mustachio?
                        </button>
                    </h2>
                    <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <ol>
                                <li className="font-size-120 gotham-light">Visit <a href="/" className="link-color-1">mustachioverse.com</a>.</li>
                                <li className="font-size-120 gotham-light">Click MINT YOUR MUSTACHIO at the upper right corner.</li>
                                <li className="font-size-120 gotham-light">Connect your MetaMask wallet (Ethereum Network).</li>
                                <li className="font-size-120 gotham-light">Mint your Mustachio for 0.4 ETH + gas fee.</li>
                                <li className="font-size-120 gotham-light">Check your OpenSea or  <a className="font-size-120 gotham-light link-color-1" href="https://ownly.market/" target="_blank" rel="noreferrer">Ownly Market</a> account, and there you go! You now OWN a Mustachio.</li>
                            </ol>
                            <a className="font-size-120 gotham-light link-color-1" href="https://ownly.io/htmym" target="_blank" rel="noreferrer">Click here for a more detailed instruction.</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-3">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                            Do I get to pick which Mustachio I can own?
                        </button>
                    </h2>
                    <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">To add the element of surprise, you will enter the portal to MustachioVerse as a <b>random</b> Mustachio, each with a unique tale to be unraveled.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-4">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                            Why is the gas fee so high?
                        </button>
                    </h2>
                    <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">A gas fee is required to execute transactions within the Ethereum network. If your gas fee is high, you can try to lower your gas fees in your transaction settings. The lower the gas fee, the longer it takes for the transactions to process.</p>
                            <p className="font-size-120 gotham-light">Here’s the Etherscan link to our previously minted Mustachios for your reference on our past transactions: <a href="https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5" className="link-color-1" target="_blank" rel="noreferrer">https://etherscan.io/address/0x9e7a3a2...c544ef07620e5</a></p>
                            <p className="font-size-120 gotham-light">You can also monitor gas prices daily as they fluctuate here: <a href="https://ethgasstation.info/index.php" className="link-color-1" target="_blank" rel="noreferrer">https://ethgasstation.info/index.php</a></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-5">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                            How do I contact the Mustachio team?
                        </button>
                    </h2>
                    <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io" className="link-color-1">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                            <p className="font-size-120 gotham-light">Facebook: <a href="https://web.facebook.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://web.facebook.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Instagram: <a href="https://www.instagram.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Twitter: <a href="https://twitter.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Telegram: <a href="https://ownly.io/telegram" className="link-color-1" target="_blank" rel="noreferrer">https://ownly.io/telegram</a></p>
                            <p className="font-size-120 gotham-light">Discord: <a href="https://mustachioverse.com/discord" className="link-color-1" target="_blank" rel="noreferrer">https://mustachioverse.com/discord</a></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-6">
                        <button className="accordion-button gotham-light font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                            What else can I do with my Mustachios?
                        </button>
                    </h2>
                    <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">There are so many possibilities on how you can make use of your Mustachio!</p>
                            <p className="font-size-120 gotham-light">For the Mustachio holders of our genesis set, they get a playable 3D avatar version of their 2D Mustachio. They also get a quarterly OWN token airdrop until our marketing and community airdrops wallet runs out.</p>
                            <p className="font-size-120 gotham-light">Aside from partaking in our play-to-earn NFT game, Mustachio Quest, you can also own 9 single-edition artifacts at <a href="https://ownly.market/?collection=the-sages-rant-collectibles" className="link-color-1" target="_blank" rel="noreferrer">The Sages Rant Collectibles</a>. The Sages Rant is our official NFT Tales with 10 chapters that reveal the stories behind the genesis set of Mustachios on their quest to find the 9 valuable artifacts that are collectively called the Grooming Kit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Borders */}
        <img src={border} className="faqs-border" alt="Border Top" />
    </section>
  )
}
