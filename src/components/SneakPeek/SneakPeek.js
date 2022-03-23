import './SneakPeek.css'

// images
import sneak9 from '../../images/sneakpeeks/9-gif-slendie.jpg'
import sneak8 from '../../images/sneakpeeks/8-gif-sludgie.jpg'
import sneak7 from '../../images/sneakpeeks/7-squarehead.jpg'
import sneak6 from '../../images/sneakpeeks/6-hotdog.jpg'
import sneak5 from '../../images/sneakpeeks/5-loonywise.jpg'
import sneak4 from '../../images/sneakpeeks/4-abracadoobie.jpg'
import sneak3 from '../../images/sneakpeeks/3-mexico.png'
import sneak2 from '../../images/sneakpeeks/2-desert-pit.png'
import sneak1 from '../../images/sneakpeeks/sneakpeek-forge.png'

import bordertop from '../../images/sneakpeek-top.png'
import borderbot from '../../images/sneakpeek-bot.png'

export default function SneakPeek() {
    const sneak = [
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
        {
            id: 4,
            thumbnail: sneak4,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/948221757607788594",
            title: "Abracadoobie Looking at the Horizon"
        },
        {
            id: 3,
            thumbnail: sneak3,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/946207407271469076",
            title: "Mexico on the Desert"
        },
        {
            id: 2,
            thumbnail: sneak2,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/945292032870580225",
            title: "Sneak Peek on the Desert Pit"
        },
        {
            id: 1,
            thumbnail: sneak1,
            link: "https://twitter.com/mustachioverse/status/1495748029005320198",
            title: "Enter the Forge!"
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
