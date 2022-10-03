import './AR.css'

// images
import fighters from '../../images/ar/Fighters.png'
import fighters2 from '../../images/ar/Fighters 2.png'
import hobbyists from '../../images/ar/Hobbyists.png'
import horrorIcons from '../../images/ar/Horror Icons.png'
import magicUsers from '../../images/ar/Magic Users.png'
import mustachioTime from '../../images/ar/Mustachio Time.png'
import mustachioTime2 from '../../images/ar/Mustachio Time 2.png'
import mythsAndMysteries from '../../images/ar/Myths & Mysteries.png'
import oddballs from '../../images/ar/Oddballs.png'
import oddities from '../../images/ar/Oddities.png'
import players from '../../images/ar/Players.png'
import recreationists from '../../images/ar/Recreationists.png'
import royalties from '../../images/ar/Royalties.png'
import royalties2 from '../../images/ar/Royalties 2.png'
import teamMustachios from '../../images/ar/Team Mustachios.png'
import weirdos from '../../images/ar/Weirdos.png'
import bordertop from "../../images/sneakpeek-top.png";
import borderbot from "../../images/sneakpeek-bot.png";

import mainbanner from '../../images/banner.jpg'

import arMexico from '../../images/ar/ar-mexico.mp4'
import arLoonywise from '../../images/ar/ar-loonywise.mp4'
import arCandyfloss from '../../images/ar/ar-candyfloss.mp4'
import arGrim from '../../images/ar/ar-grim.mp4'
import arCheetah from '../../images/ar/ar-cheetah.mp4'
import arSlendie from '../../images/ar/ar-slendie.mp4'
import imgAR from "../../images/ar/AR.gif";
import videoAR from "../../images/ar/AR.mp4";

export default function Ar() {
    const batches = [
        {
            image: teamMustachios,
            link: "https://www.instagram.com/ar/527038545471073/?ch=NmExYmVkODJhZWI0YzRjYjgxYmFmMWY4NWRmOGVkNzQ%3D",
            title: "Team Mustachios",
            description: "Try out Mexico, Slendie, Squarehead, Abracadoobie, Grim, Loonywise, Sludgie and Candy Floss."
        }, {
            image: mustachioTime,
            link: "https://www.instagram.com/ar/351165700431866",
            title: "Mustachio Time",
            description: "Try out Dwinn, BubbleGum, Gamer Boi, King Stellar, Lich King, Magic Man, Marci, Peppermint Butler and Simone."
        }, {
            image: mustachioTime2,
            link: "https://www.instagram.com/ar/563211898766195/?ch=YWE0ZTRiZTc3NmEzYTM0Mzg2YjNlNTM1MmU4NDlkZWY%3D",
            title: "Mustachio Time 2",
            description: "Try out Shoko, Candy Cane, Rench, Ghost Clarence, Penny, Door Keeper, Dummy, Lisby and Spirit Dream."
        }, {
            image: horrorIcons,
            link: "https://www.instagram.com/ar/532090108612350/",
            title: "Horror Icons",
            description: "Try out Shucks, DaKu, Eddie Crog, Frankie Stan, Jason D Killer, Leather Face, Ghostface, Creepy Strawhat and Scare Crow."
        }, {
            image: magicUsers,
            link: "https://www.instagram.com/ar/696533481410782/?ch=NjI2MzUzMGNkYTBiMDgzYjU3NTYyMzNkNTdkMjg5YzI%3D",
            title: "Magic Users",
            description: "Try out Candy Witch, Caster, Cave Wizzard, EVL Guy, Faun, Ghost, Turfy Wizard, Incubus and Crimson."
        }, {
            image: mythsAndMysteries,
            link: "https://www.instagram.com/ar/765770718195968/?ch=NDM2YzE5MGYxNDZhNWEyOTQ0MDI5NjMwODE3ZjJhZjY%3D",
            title: "Myths & Mysteries",
            description: "Try out Cairo, Inka, Leprechaun, Merman Warrior, Neos, Onku, Space Man, Swamp Monster and Tsuku."
        }, {
            image: oddballs,
            link: "https://www.instagram.com/ar/768262871016874/?ch=NDYzYmJiMjhhOWMzMzJjMTEwNTZkZjJkMjI2NzJhYzQ%3D",
            title: "Oddballs",
            description: "Try out Aster, Farmer, Pilot, Pumpkin Man and Towns People."
        }, {
            image: oddities,
            link: "https://www.instagram.com/ar/407279684669590/?ch=NzM3ZTg5OGQ5ODUzNTFiNTAwOGEwNWJkOTM5YmI1NmY%3D",
            title: "Oddities",
            description: "Try out Bug, Carabao Head, Carbon, Fire Cracker Jack, Frosty, Ninja, Paddle, Peco Rider and Space Pirate."
        }, {
            image: recreationists,
            link: "https://www.instagram.com/ar/1006748593375859/?ch=ZWVlZWVkYTYyYmRlY2NkMDQ4YTc0Njk5ODZmZWRlMGM%3D",
            title: "Recreationists",
            description: "Try out Catch A Wave, Climber, Paratrooper, Laya, Sign Maker, Skate Zone, Stan March, Stop Over and The Violinist."
        }, {
            image: royalties,
            link: "https://www.instagram.com/ar/1079074843033355/?ch=MjNkOGM4MGQwNDkzODQyYmZlYWE4NDExMmYxYTk5Yzk%3D",
            title: "Royalties",
            description: "Try out Berry, LSP, Hotdog Prince, Frozen Sundae, Bee Lee, Ghost Prince, Raggedy Prince, Skeleton Prince and Verdant Greed."
        }, {
            image: royalties2,
            link: "https://www.instagram.com/ar/594578318647850/?ch=NzRmODJhMjg4MTU2Y2NmODg4NzcyNzA1NDhhYTdjYTg%3D",
            title: "Royalties 2",
            description: "Try out Bandwip, Bacon Prince, Jungle, King Hobgoblin, Lizzard Prince, Lullaby, Nightmare, Pan Cake Prince and Pulsar."
        }, {
            image: fighters,
            link: "https://www.instagram.com/ar/566589575081776/",
            title: "Fighters",
            description: "Try out Frontline, Dark Knight, Forest Lord, Forest Warrior, Mountain Warrior and Mountain Warrior 2."
        }, {
            image: fighters2,
            link: "https://www.instagram.com/ar/566589575081776/",
            title: "Fighters 2",
            description: "Try out Fishman Prince, Forest Medic, Forest Ranger, Gladiator, Igorot, Jedi, Midas, Royal Gladiator and Warrior."
        }, {
            image: hobbyists,
            link: "https://www.instagram.com/ar/1093172514953420/",
            title: "Hobbyists",
            description: "Try out Bird Watcher, Farm Man Afro, Gardener, Grave Keeper, Guitar Man, Hatcher, Insurance Man, Mushroom Picker and Paper Plane Maker."
        }, {
            image: players,
            link: "https://www.instagram.com/ar/445360823648781/",
            title: "Players",
            description: "Try out Football Player 26, Hip Hop and Ice Hockey Player."
        }, {
            image: weirdos,
            link: "https://www.instagram.com/ar/1062796600994936/",
            title: "Weirdos",
            description: "Try out Alien, Chee, Cheesy Hair, Dino Hoodie, Elvi, Humanoid, Jester, Mech Suit and Merchant."
        }
    ]

    return (
        <div>
            <section className="position-relative overflow-hidden py-5" id="ar" style={{"background-color":"#008080"}}>
                <div className="container pb-5">
                    <div className="row align-items-center mt-3 mb-5 py-lg-5">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="px-sm-5 px-lg-0 mx-3 mx-sm-5 mx-lg-0 mb-3">
                                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                                    <video autoPlay loop muted preload className="h-100">
                                        <source src={videoAR} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="ps-lg-5 mb-4 mb-lg-0 pb-lg-0">
                                <h2 className="text-white text-center text-lg-start fw-bold font-size-xl-250 font-size-xxl-300 mb-4 pb-2">Augmented Reality Filter</h2>
                                <p className="text-white text-center text-lg-start font-size-xl-130 mb-4">Can your PFP immerse in your day-to-day activities? Well, these Mustachios can! Try out our <a href="#filters" className="link-color-2" >Mustachio filter on Instagram</a> to see ‘em dancing IRL.</p>
                                <p className="text-white text-center text-lg-start font-size-xl-130 mb-4">Over 100 Mustachios have been loaded so you can see your very own Mustachios in action.</p>
                                <p className="text-white text-center text-lg-start font-size-xl-130 mb-4 pb-3">Make sure you use the hashtag <b>#CanYourJPEG</b> and/or <b>#CanYourPFP</b> so we can track your entries and have them featured on our website and social media platforms.</p>

                                <div className="text-center text-lg-start">
                                    <a href="#filters" rel="noreferrer" className="btn btn-custom-2 gotham-black font-size-130 px-4">TRY THEM OUT NOW!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
            </section>

            <section id="first-section" style={{"backgroundImage": `url(${mainbanner})`}}>
                <div className="container">
                    <div className="py-5">
                        <div className="mt-4 mb-5 py-5">
                            <h1 className="gotham-black text-center text-white mt-0 pb-5">SEE THE FILTERS IN ACTION</h1>

                            <div className="row mt-3">
                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                        <source src={arMexico} type="video/mp4" />
                                    </video>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <div className="w-100 shadow-sm border-1 position-relative bg-color-7" style={{"borderRadius":"10px"}}>
                                        <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                            <source src={arLoonywise} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <div className="w-100 shadow-sm border-1 position-relative bg-color-7" style={{"borderRadius":"10px"}}>
                                        <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                            <source src={arCandyfloss} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <div className="w-100 shadow-sm border-1 position-relative bg-color-7" style={{"borderRadius":"10px"}}>
                                        <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                            <source src={arGrim} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <div className="w-100 shadow-sm border-1 position-relative bg-color-7" style={{"borderRadius":"10px"}}>
                                        <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                            <source src={arCheetah} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-4 col-lg-2 mb-4">
                                    <div className="w-100 shadow-sm border-1 position-relative bg-color-7" style={{"borderRadius":"10px"}}>
                                        <video autoPlay loop muted preload controls className="w-100" style={{"borderRadius":"10px"}}>
                                            <source src={arSlendie} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden position-relative" id="filters" style={{"paddingTop":"100px!important", "background-color":"#008080"}}>
                <div className="container my-5 py-5">
                    <h1 className="gotham-black text-center text-white mt-5">AR FILTERS</h1>

                    <div className="row justify-content-center py-5">
                        { batches.map(x => (
                            <div className="col-sm-6 col-lg-4 mb-5">
                                <div className="px-3 px-sm-2 px-md-4 px-xxl-5">
                                    <div className="mb-4">
                                        <a href={x.link} target="_blank" rel="noreferrer">
                                            <img src={x.image} className="w-100"/>
                                        </a>
                                    </div>

                                    <p className="neo-bold text-center font-size-130 text-white fw-bold">{x.title}</p>

                                    <div className="d-flex align-items-center mb-4 ar-description">
                                        <p className="text-center text-white mb-0">{x.description}</p>
                                    </div>

                                    <div className="text-center mb-4">
                                        <a href={x.link} className="btn btn-custom-2 px-5" style={{"width":"initial"}}>Try Filter</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <img src={bordertop} className="sneakpeek-border sneakpeek-top" alt="Border Top" />
                <img src={borderbot} className="sneakpeek-border sneakpeek-bot" alt="Border Bottom" />
            </section>
        </div>
    )
}
