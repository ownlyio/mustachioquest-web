import './Updates.css'

// images
import update12 from '../../images/updates/videos/the-mint-12.jpg'
import update11 from '../../images/updates/posts/4-pathfinders.png'
import update10 from '../../images/updates/articles/game-dev-3.jpg'
import update9 from '../../images/updates/articles/game-dev-2.jpg'
import update8 from '../../images/updates/posts/3-mexico-strength.png'
import update7 from '../../images/updates/posts/2-sludgie.jpg'
import update6 from '../../images/updates/videos/the-mint-10.jpg'
import update5 from '../../images/updates/videos/lnwk-mq.jpg'
import update4 from '../../images/updates/videos/the-mint-9.jpg'

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
            id: 12,
            thumbnail: update12,
            type: "video",
            link: "https://www.youtube.com/watch?v=Kzz6oXxBg0k",
            title: "The Mint Ep 12: Mustachio Quest Dev Updates #3 + Q1 Buyback and Burn Celebration"
        },
        {
            id: 11,
            thumbnail: update11,
            type: "post",
            link: "https://twitter.com/ownlyio/status/1513403976749879301",
            title: "3D Mustachio Pathfinders are now complete!"
        },
        {
            id: 10,
            thumbnail: update10,
            type: "article",
            link: "https://medium.com/ownlyio/mustachio-quest-updates-3-mustachio-nft-visualizer-2d-backgrounds-npc-template-and-more-4da7df2be3dd",
            title: "Mustachio Quest Updates #3: Mustachio NFT Visualizer, 2D Backgrounds, NPC Template, and More"
        },
        {
            id: 9,
            thumbnail: update9,
            type: "article",
            link: "https://medium.com/ownlyio/mustachio-quest-updates-2-basic-movements-game-backdrops-character-selection-and-more-22209e147030",
            title: "Mustachio Quest Updates #2: Basic Movements, Game Backdrops, Character Selection and More"
        },
        {
            id: 8,
            thumbnail: update8,
            type: "post",
            link: "https://twitter.com/mustachioverse/status/1499172708009103369",
            title: "It seems like Mexico's strength is returning. Not a lot, but enough."
        },
        {
            id: 7,
            thumbnail: update7,
            type: "post",
            link: "https://discord.com/channels/878131568806334464/935073739878563840/948472489049210960",
            title: "Sludgie on the Forge"
        },
        {
            id: 6,
            thumbnail: update6,
            type: "video",
            link: "https://www.youtube.com/watch?v=SnUtn6rWuSw",
            title: "The Mint Ep 10: Mustachio Quest Development Updates with Ismael and Toff"
        },
        {
            id: 5,
            thumbnail: update5,
            type: "video",
            link: "https://www.youtube.com/watch?v=wDZhFBNRSWs",
            title: "What’s Possible for Mustachio Quest? Future Features, and More by Kenny"
        },
        {
            id: 4,
            thumbnail: update4,
            type: "video",
            link: "https://www.youtube.com/watch?v=k_pb-gy9XNk&t=3398s",
            title: "The Mint Ep 09: A Closer Look at the Mustachio Quest Website"
        },
    ]

    return (
        <section id="updates">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="updates-title gotham-black text-white text-center font-size-170 mb-5">WHAT IS UP WITH THE MUSTACHIOS</p>

                    { updatesList.map(x => (
                        <div className="col-12 col-sm-6 col-xl-4 mb-3 updates-column" key={x.id}>
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

                <p className="updates-yt-link mt-4 text-center">
                    <a href="https://www.youtube.com/playlist?list=PLONck0-y6ITwBSne6p4RqN7sC_KLwIC1c" target="_blank" rel="noreferrer" className="gotham-black text-white font-size-90 font-size-md-110 font-size-lg-130 font-size-xl-150">Watch Mustachio Quest Videos on YouTube!</a>
                </p>
            </div>

            {/* Borders */}
            <img src={bordertl} className="updates-border updates-tl" alt="Border Top Left" />
            <img src={bordertr} className="updates-border updates-tr" alt="Border Top Right" />
            <img src={borderbl} className="updates-border updates-bl" alt="Border Bottom Left" />
            <img src={borderbr} className="updates-border updates-br" alt="Border Bottom Right" />
        </section>
    )
}
