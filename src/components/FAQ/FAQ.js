import './FAQ.css'
import border from '../../images/faq-top.png'

export default function FAQ() {
  return (
    <section id="faqs">
        <div className="container">
            <p className="faq-title gotham-black text-center text-white font-size-170 mb-5">FREQUENTLY ASKED QUESTIONS</p>

            <div className="accordion accordion-flush" id="app-faqs-accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-1">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                            What is a Mustachio?
                        </button>
                    </h2>
                    <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented Boii Mustache, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings. Now, the concept is solidified through our play-and-earn game, Mustachio Quest, where our Mustachio holders can fulfill quests in an open world NFT game as their 3D Mustachio avatar.</p>
                            <p className="font-size-120 gotham-light">There's a total of 10,000 3D Mustachios Rascals, these are generative Mustachios. Our first 100 Mustachios from our Genesis set are called Mustachio Pathfinders. Our second generation of Mustachios from 101-300 are called Mustachio Marauders.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-1a">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1a">
                            How many Mustachio Rascals are there?
                        </button>
                    </h2>
                    <div id="flush-collapse-1a" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">Mustachio Rascals are 3D generative mustachios, we only have a maximum supply of 10,000 Mustachio Rascal available for minting.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-2">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                            How do I get a Mustachio?
                        </button>
                    </h2>
                    <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light mt-3">Unfortunately, our Mustachio Pathfinders are already sold out, but you can still get your own Mustachio by any of the following:</p>

                            <p className="font-size-120">To get a Mustachio Marauder NFT:</p>
                            <ol>
                                <li className="font-size-120 gotham-light">Click MINT NOW at the lower part of the <a className="font-size-100 gotham-light link-color-1" href="/#nft">"What Mustachios can I Own?"</a> section</li>
                                <li className="font-size-120 gotham-light">Connect your MetaMask wallet (BNB Chain Network).</li>
                                <li className="font-size-120 gotham-light">Mint your Mustachio Marauder and pay the gas fee.</li>
                                <li className="font-size-120 gotham-light">Check your <a className="font-size-100 gotham-light link-color-1" href="https://ownly.market" target="_blank" rel="noreferrer">Ownly Market</a> account, and there you go! You now OWN a Mustachio Marauder.</li>
                            </ol>

                            <p className="font-size-120 mt-4">To get a Mustachio Rascal NFT:</p>
                            <ol>
                                <li className="font-size-120 gotham-light">Click MINT NOW at the upper right corner of the Navigation Menu.</li>
                                <li className="font-size-120 gotham-light">Connect your MetaMask wallet (Ethereum Network).</li>
                                <li className="font-size-120 gotham-light">Add the quantity of Rascals you wanted to mint.</li>
                                <li className="font-size-120 gotham-light">Mint your Mustachio Rascal/s and pay the gas fee.</li>
                                <li className="font-size-120 gotham-light">Check your minted NFT at <a className="font-size-100 gotham-light link-color-1" href="https://opensea.io/collection/mustachiorascals" target="_blank" rel="noreferrer">OpenSea</a>, and there you go! You now OWN a Mustachio Rascal/s.</li>
                            </ol>

                            {/*<p className="font-size-120 mt-4">To earn a Mustachio Marauder NFT:</p>*/}
                            {/*<ol>*/}
                            {/*    <li className="font-size-120 gotham-light">Get your OWN Tokens at <a className="font-size-100 gotham-light link-color-1" href="http://ownly.io/pancake" target="_blank" rel="noreferrer">ownly.io/pancake</a> or <a className="font-size-100 gotham-light link-color-1" href="http://ownly.io/swap" target="_blank" rel="noreferrer">ownly.io/swap</a>.</li>*/}
                            {/*    <li className="font-size-120 gotham-light">Visit <a className="font-size-100 gotham-light link-color-1" href="http://ownly.io/ownmarauder" target="_blank" rel="noreferrer">ownly.io/ownmarauder</a>.</li>*/}
                            {/*    <li className="font-size-120 gotham-light">Connect your MetaMask wallet and add 15 Million OWN, the required amount to earn a Mustachio Marauder NFT.</li>*/}
                            {/*    <li className="font-size-120 gotham-light">Approve and stake your OWN tokens.</li>*/}
                            {/*    <li className="font-size-120 gotham-light">Hodl your OWN Tokens for 60 days without unstaking or withdrawing to earn 1 Mustachio Marauder NFT.<span className="fst-italic">Note: 1 Mustachio NFT reward per wallet address only.</span></li>*/}
                            {/*    <li className="font-size-120 gotham-light">Self-Mint your Mustachio Marauder NFT and claim back your OWN Tokens after 60 Days of staking.</li>*/}
                            {/*</ol>*/}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-3">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                            Do I get to pick which Mustachio I can own?
                        </button>
                    </h2>
                    <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">To add the element of surprise, you will enter the portal to MustachioVerse as a random Mustachio.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-4">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
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
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                            How do I contact the Mustachio team?
                        </button>
                    </h2>
                    <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io" className="link-color-1">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                            <p className="font-size-120 gotham-light">Facebook: <a href="https://www.facebook.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://www.facebook.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Instagram: <a href="https://www.instagram.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Twitter: <a href="https://twitter.com/mustachioverse" className="link-color-1" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                            <p className="font-size-120 gotham-light">Telegram: <a href="https://ownly.io/telegram" className="link-color-1" target="_blank" rel="noreferrer">https://ownly.io/telegram</a></p>
                            <p className="font-size-120 gotham-light">Discord: <a href="https://mustachioverse.com/discord" className="link-color-1" target="_blank" rel="noreferrer">https://mustachioverse.com/discord</a></p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-header-6">
                        <button className="accordion-button gotham-light text-center font-size-70 justify-content-center collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                            What else can I do with my Mustachios?
                        </button>
                    </h2>
                    <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                        <div className="accordion-body">
                            <p className="font-size-120 gotham-light">There are so many possibilities on how you can make use of your Mustachio Rascals! You'll get to own a 3D Playable Character plus a Mustachio Instagram AR Filter, an access ti Mustachio NFT Visualizer Experience, access to our IRL events such as AMAC and BBC! Learn more about our utilities <a href="/#nft" className="link-color-1" target="_blank" rel="noreferrer">here</a>.</p>
                            <p className="font-size-120 gotham-light">For the Mustachio Pathfinders and Mustachio Marauders they get a playable 3D avatar version of their 2D Mustachio. They also get a quarterly OWN token airdrop until our marketing and community airdrops wallet runs out.</p>
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
