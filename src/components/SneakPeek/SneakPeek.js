import './SneakPeek.css'

// images
import sneak12 from '../../images/sneakpeeks/9-squarehead.jpg'
import sneak11 from '../../images/sneakpeeks/8-hotdog.jpg'
import sneak10 from '../../images/sneakpeeks/7-loonywise.jpg'
import sneak9 from '../../images/sneakpeeks/6-mexico-strength.png'
import sneak8 from '../../images/sneakpeeks/5-sludgie.jpg'
import sneak7 from '../../images/sneakpeeks/4-abracadoobie.jpg'
import sneak6 from '../../images/sneakpeeks/3-mexico.png'
import sneak5 from '../../images/sneakpeeks/2-desert-pit.png'
import sneak4 from '../../images/sneakpeeks/1-menu-update.png'
import sneak3 from '../../images/sneakpeeks/sneakpeek-forge.png'
import sneak2 from '../../images/sneakpeeks/sneakpeek-blacksmith.jpg'
import sneak1 from '../../images/sneakpeeks/sneakpeek-mainmenu.png'

import bordertop from '../../images/sneakpeek-top.png'
import borderbot from '../../images/sneakpeek-bot.png'

export default function SneakPeek() {
    const sneak = [
        {
            id: 12,
            thumbnail: sneak12,
            link: "https://twitter.com/mustachioverse/status/1502973290066825216",
            title: "Say Hi to Squarehead!"
        },
        {
            id: 11,
            thumbnail: sneak11,
            link: "https://twitter.com/mustachioverse/status/1502528629305409536",
            title: "Hotdog Prince will teach you how to sprint and meet the other Mustachios!",
        },
        {
            id: 10,
            thumbnail: sneak10,
            link: "https://twitter.com/mustachioverse/status/1501070428122808320",
            title: "Here's Loonywise to say GM to y'all."
        },
        {
            id: 9,
            thumbnail: sneak9,
            link: "https://twitter.com/mustachioverse/status/1499172708009103369",
            title: "It seems like Mexico's strength is returning. Not a lot, but enough."
        },
        {
            id: 8,
            thumbnail: sneak8,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/948472489049210960",
            title: "Sludgie on the Forge"
        },
        {
            id: 7,
            thumbnail: sneak7,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/948221757607788594",
            title: "Abracadoobie Looking at the Horizon"
        },
        {
            id: 6,
            thumbnail: sneak6,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/946207407271469076",
            title: "Mexico on the Desert"
        },
        {
            id: 5,
            thumbnail: sneak5,
            link: "https://discord.com/channels/878131568806334464/935073739878563840/945292032870580225",
            title: "Sneak Peek on the Desert Pit"
        },
        {
            id: 4,
            thumbnail: sneak4,
            link: "https://twitter.com/mustachioverse/status/1495748029005320198",
            title: "Dev Update: MetaMask wallet integration, Loading Mustachio NFTs, and Start Page and Character Selection"
        },
        {
            id: 3,
            thumbnail: sneak3,
            link: "https://twitter.com/mustachioverse/status/1495748029005320198",
            title: "Enter the Forge!"
        },
        {
            id: 2,
            thumbnail: sneak2,
            link: "https://twitter.com/mustachioverse/status/1494212165213233152",
            title: "Take your pick, you'll find no second-rate items with the Blacksmith"
        },
        {
            id: 1,
            thumbnail: sneak1,
            link: "https://www.youtube.com/watch?v=eLce8nuH0Yo",
            title: "Dev Update: Temporary Main Menu, Loading Bar and Transitions, and Loading to Different Scenes"
        },
    ]

    return (
        <section id="progress">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="sneakpeeks-title gotham-black text-white text-center font-size-170 mb-5">TAKE A PEEK AT OUR PROGRESS</p>
                    { sneak.map(x => (
                        <div className="col-12 col-md-6 col-xl-4 mb-3" key={x.id}>
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
