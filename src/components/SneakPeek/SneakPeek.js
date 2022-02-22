import './SneakPeek.css'

// images
import sneak1 from '../../images/sneakpeeks/sneakpeek-forge.png'
import sneak2 from '../../images/sneakpeeks/sneakpeek-blacksmith.jpg'
import sneak3 from '../../images/sneakpeeks/sneakpeek-mainmenu.png'

import bordertop from '../../images/sneakpeek-top.png'
import borderbot from '../../images/sneakpeek-bot.png'

export default function SneakPeek() {
    const sneak = [
        {
            id: 1,
            thumbnail: sneak1,
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
            id: 3,
            thumbnail: sneak3,
            link: "https://www.youtube.com/watch?v=eLce8nuH0Yo",
            title: "Dev Update: Temporary Main Menu, Loading Bar and Transitions, and Loading to Different Scenes"
        },
    ]

    return (
        <section id="sneakpeek">
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
