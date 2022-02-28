import './Updates.css'

// images
import update4 from '../../images/updates/spaces/lets-talk-mq.png'
import update3 from '../../images/updates/articles/mq-article.jpg'
import update2 from '../../images/updates/articles/mustachios-article.jpg'
import update1 from '../../images/updates/articles/boii-mustache.jpg'
import video5 from '../../images/updates/videos/lnwk-mq.jpg'
import video4 from '../../images/updates/videos/the-mint-9.jpg'
import video3 from '../../images/updates/videos/sneakpeek-1.png'
import video2 from '../../images/updates/videos/mint-ep7.jpg'
import video1 from '../../images/updates/videos/yt-sneakpeek.jpg'

import bordertl from '../../images/updates-tl.png'
import bordertr from '../../images/updates-tr.png'
import borderbl from '../../images/updates-bl.png'
import borderbr from '../../images/updates-br.png'

export default function Updates() {
    const updatesVideos = [
        {
            id: 5,
            thumbnail: video5,
            link: "https://www.youtube.com/watch?v=wDZhFBNRSWs",
            title: "What’s Possible for Mustachio Quest? Future Features, and More by Kenny"
        },
        {
            id: 4,
            thumbnail: video4,
            link: "https://www.youtube.com/watch?v=k_pb-gy9XNk&t=3398s",
            title: "The Mint Ep 09: A Closer Look at the Mustachio Quest Website"
        },
        {
            id: 3,
            thumbnail: video3,
            link: "https://twitter.com/mustachioverse/status/1488298584563138562",
            title: "Game Sneak Peek #1"
        },
        {
            id: 2,
            thumbnail: video2,
            link: "https://www.youtube.com/watch?v=q_VkBbLkipY&t=784s",
            title: "The Mint Ep 07: Mustachio Quest Play-to-Earn NFT Game Sneak Peek"
        },
        {
            id: 1,
            thumbnail: video1,
            link: "https://www.youtube.com/watch?v=eLce8nuH0Yo",
            title: "The Mustachio Quest Sneak Peek is Out!"
        },
    ]

    const updatesArticles = [
        {
            id: 4,
            thumbnail: update4,
            link: "https://twitter.com/ownlyio/status/1496828506553999365",
            title: "Twitter Space: Let's Talk About All Things Mustachio Quest"
        },
        {
            id: 3,
            thumbnail: update3,
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
            id: 1,
            thumbnail: update1,
            link: "https://medium.com/ownlyio/meet-the-secretive-artist-behind-the-mustachios-e94a9c335774",
            title: "Meet the Secretive Artist Behind The Mustachios"
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

                    {/* Videos */}
                    <p className="updates-type text-center gotham-bold text-white font-size-140 mb-2">Videos and Sneak Peeks</p>
                    { updatesVideos.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3" key={x.id}>
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

                    {/* Articles */}
                    <p className="updates-type text-center gotham-bold text-white font-size-140 mt-5 mb-2">Articles and Twitter Spaces</p>
                    { updatesArticles.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3" key={x.id}>
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
