import './Updates.css'

// images
import update10 from '../../images/updates/articles/game-dev-2.jpg'
import update9 from '../../images/updates/videos/the-mint-10.jpg'
import update8 from '../../images/updates/videos/lnwk-mq.jpg'
import update7 from '../../images/updates/videos/the-mint-9.jpg'
import update6 from '../../images/updates/videos/sneakpeek-1.png'
import update5 from '../../images/updates/videos/mint-ep7.jpg'
import update4 from '../../images/updates/spaces/lets-talk-mq.png'
import update3 from '../../images/updates/articles/mq-article.jpg'
import update2 from '../../images/updates/articles/mustachios-article.jpg'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Updates() {
    const toCapitalWord = str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const updatesList = [
        {
            id: 10,
            thumbnail: update10,
            type: "article",
            link: "https://medium.com/ownlyio/mustachio-quest-updates-2-basic-movements-game-backdrops-character-selection-and-more-22209e147030",
            title: "Mustachio Quest Updates #2: Basic Movements, Game Backdrops, Character Selection and More"
        },
        {
            id: 9,
            thumbnail: update9,
            type: "video",
            link: "https://www.youtube.com/watch?v=SnUtn6rWuSw",
            title: "The Mint Ep 10: Mustachio Quest Development Updates with Ismael and Toff"
        },
        {
            id: 8,
            thumbnail: update8,
            type: "video",
            link: "https://www.youtube.com/watch?v=wDZhFBNRSWs",
            title: "What’s Possible for Mustachio Quest? Future Features, and More by Kenny"
        },
        {
            id: 7,
            thumbnail: update7,
            type: "video",
            link: "https://www.youtube.com/watch?v=k_pb-gy9XNk&t=3398s",
            title: "The Mint Ep 09: A Closer Look at the Mustachio Quest Website"
        },
        {
            id: 6,
            thumbnail: update6,
            type: "video",
            link: "https://twitter.com/mustachioverse/status/1488298584563138562",
            title: "Game Sneak Peek #1"
        },
        {
            id: 5,
            thumbnail: update5,
            type: "video",
            link: "https://www.youtube.com/watch?v=q_VkBbLkipY&t=784s",
            title: "The Mint Ep 07: Mustachio Quest Play-to-Earn NFT Game Sneak Peek"
        },
        {
            id: 4,
            thumbnail: update4,
            type: "space",
            link: "https://twitter.com/ownlyio/status/1496828506553999365",
            title: "Twitter Space: Let's Talk About All Things Mustachio Quest"
        },
        {
            id: 3,
            thumbnail: update3,
            type: "article",
            link: "https://medium.com/ownlyio/mustachio-quest-concept-announcement-and-updates-b9009b3f6743",
            title: "Mustachio Quest: 3D Open World Metaverse Play-to-Earn Game Announcement"
        },
        {
            id: 2,
            thumbnail: update2,
            type: "article",
            link: "https://medium.com/ownlyio/three-reasons-why-you-should-mint-a-mustachio-now-5ddbf4424d3d",
            title: "The Mustachios: From Features and Rewards to the Project Roadmap"
        },
    ]

    return (
        <section id="updates">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="updates-title gotham-black text-white text-center font-size-170 mb-5">WHAT IS UP WITH THE MUSTACHIOS</p>

                    { updatesList.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3 updates-column" key={x.id}>
                            <div className={`updates-label ${x.type} font-size-80`}>
                                {toCapitalWord(x.type)}
                            </div>
                            
                            <a href={x.link} target="_blank" rel="noreferrer">
                                <div className="cursor-pointer updates-thumbnail mb-3">
                                    <img src={x.thumbnail} className="w-100" alt={x.title} />
                                </div>
                            </a>
                            <p className="cursor-pointer mb-3">
                                <a className="update-title font-w-hermann w-hermann-reg text-white font-size-150" href={x.link} target="_blank" rel="noreferrer">
                                    {x.title}
                                </a>
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
