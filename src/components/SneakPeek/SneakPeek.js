import './SneakPeek.css'

// images
import sneak16 from '../../images/sneakpeeks/16-candyfloss.png'
import sneak15 from '../../images/sneakpeeks/15-mountainwarrior.png'
import sneak14 from '../../images/sneakpeeks/14-ninja.png'
import sneak13 from '../../images/sneakpeeks/13-kingstellar.png'
import sneak12 from '../../images/sneakpeeks/12-abracadoobie.jpg'
import sneak11 from '../../images/sneakpeeks/11-gif-slendie.png'
import sneak10 from '../../images/sneakpeeks/10-gif-squarehead.png'
import sneak9 from '../../images/sneakpeeks/9-gif-slendie.jpg'
import sneak8 from '../../images/sneakpeeks/8-gif-sludgie.jpg'
import sneak7 from '../../images/sneakpeeks/7-squarehead.jpg'
import sneak6 from '../../images/sneakpeeks/6-hotdog.jpg'
import sneak5 from '../../images/sneakpeeks/5-loonywise.jpg'

import bordertop from '../../images/sneakpeek-top.png'
import borderbot from '../../images/sneakpeek-bot.png'

export default function SneakPeek() {
    const sneak = [
        
        {
            id: 16,
            thumbnail: sneak16,
            link: "https://twitter.com/mustachioverse/status/1519958861397909504",
            title: "Candy Floss is here to let you check this part of MustachioVerse land!"
        },
        {
            id: 15,
            thumbnail: sneak15,
            link: "https://twitter.com/mustachioverse/status/1518484278094733313",
            title: "Mountain Warrior is here to give you a 360 view!"
        },
        {
            id: 14,
            thumbnail: sneak14,
            link: "https://twitter.com/mustachioverse/status/1517374024523083776",
            title: "Would you call this a Ninja Run?"
        },
        {
            id: 13,
            thumbnail: sneak13,
            link: "https://twitter.com/mustachioverse/status/1516679230628970498",
            title: "We got King Stellar today for you guys!"
        },
        {
            id: 12,
            thumbnail: sneak12,
            link: "https://twitter.com/mustachioverse/status/1513449276763885569",
            title: "Abracadoobie is serving you this 'aerial shot'",
        },
        {
            id: 11,
            thumbnail: sneak11,
            link: "https://twitter.com/mustachioverse/status/1508074752350429185",
            title: "Slendie getting an awesome pose by the king's throne",
        },
        {
            id: 10,
            thumbnail: sneak10,
            link: "https://twitter.com/mustachioverse/status/1506948618242367488",
            title: "Squarehead giving us 'Adventure Vibe'",
        },
        {
            id: 9,
            thumbnail: sneak9,
            link: "https://twitter.com/mustachioverse/status/1505148327440134150",
            title: "Wondering what Slendie is looking for this weekend?",
        },
        {
            id: 8,
            thumbnail: sneak8,
            link: "https://twitter.com/mustachioverse/status/1503384073959624710",
            title: "Just dropping a 360 degree tour with Sludgie.",
        },
        {
            id: 7,
            thumbnail: sneak7,
            link: "https://twitter.com/mustachioverse/status/1502973290066825216",
            title: "Say Hi to Squarehead!"
        },
        {
            id: 6,
            thumbnail: sneak6,
            link: "https://twitter.com/mustachioverse/status/1502528629305409536",
            title: "Hotdog Prince will teach you how to sprint and meet the other Mustachios!",
        },
        {
            id: 5,
            thumbnail: sneak5,
            link: "https://twitter.com/mustachioverse/status/1501070428122808320",
            title: "Here's Loonywise to say GM to y'all."
        },
    ]

    return (
        <section id="progress">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="sneakpeeks-title gotham-black text-white text-center font-size-170 mb-5">TAKE A PEEK AT OUR PROGRESS</p>
                    { sneak.map(x => (
                        <div className="col-12 col-sm-6 col-xl-4 mb-3" key={x.id}>
                            <a href={x.link} target="_blank" rel="noreferrer">
                                <div className="cursor-pointer sneakpeek-thumbnail mb-3">
                                    <img src={x.thumbnail} className="w-100" alt={x.title} />
                                </div>
                            </a>
                            <p className="cursor-pointer mb-3">
                                <a className="sneakpeek-title font-w-hermann w-hermann-reg text-white font-size-150" href={x.link} target="_blank" rel="noreferrer">
                                    {x.title}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Borders */}
            <img src={bordertop} className="sneakpeek-border sneakpeek-top" alt="Border Top" />
            <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
        </section>
    )
}
