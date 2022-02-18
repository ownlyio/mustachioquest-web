import './Updates.css'

// images
import update1 from '../../images/updates/mq-article.jpg'
import update2 from '../../images/updates/mustachios-article.jpg'
import update3 from '../../images/updates/boii-mustache.jpg'
import update4 from '../../images/updates/mint-ep7.jpg'
import update5 from '../../images/updates/sneak-peek.jpg'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Updates() {
    const updates = [
        {
            id: 1,
            thumbnail: update1,
            link: "https://medium.com/ownlyio/mustachio-quest-concept-announcement-and-updates-b9009b3f6743",
            title: "Mustachio Quest: 3D Open World Metaverse Play-to-Earn Game Announcement"
        },
        {
            id: 2,
            thumbnail: update2,
            link: "https://medium.com/ownlyio/three-reasons-why-you-should-mint-a-mustachio-now-5ddbf4424d3d",
            title: "The Mustachios: From Features and Rewards to the Project Roadmap"
        },
        {
            id: 3,
            thumbnail: update3,
            link: "https://medium.com/ownlyio/meet-the-secretive-artist-behind-the-mustachios-e94a9c335774",
            title: "Meet the Secretive Artist Behind The Mustachios"
        },
        {
            id: 4,
            thumbnail: update4,
            link: "https://www.youtube.com/watch?v=q_VkBbLkipY&t=784s",
            title: "The Mint Ep 07: Mustachio Quest Play-to-Earn NFT Game Sneak Peek"
        },
        {
            id: 5,
            thumbnail: update5,
            link: "https://www.youtube.com/watch?v=eLce8nuH0Yo",
            title: "The Mustachio Quest Sneak Peek is Out!"
        },
    ]

    const redirectPage = url => {
        window.open(url, "_blank")
    }

    return (
        <section id="updates">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="updates-title gotham-black text-white text-center font-size-170 mb-5">WHAT IS UP WITH THE MUSTACHIOS</p>
                    { updates.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3" key={x.id}>
                            <div onClick={() => redirectPage(x.link)} className="cursor-pointer updates-thumbnail mb-3">
                                <img src={x.thumbnail} className="w-100" alt={x.title} />
                            </div>
                            <p onClick={() => redirectPage(x.link)} className="cursor-pointer update-title font-w-hermann w-hermann-reg text-white font-size-150 mb-3">
                                {x.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Borders */}
            <img src={bordertl} className="updates-border updates-tl" alt="Border Top Left" />
            <img src={bordertr} className="updates-border updates-tr" alt="Border Top Right" />
            <img src={borderbl} className="updates-border updates-bl" alt="Border Bottom Left" />
            <img src={borderbr} className="updates-border updates-br" alt="Border Bottom Right" />
        </section>
    )
}
