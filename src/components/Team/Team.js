import './Team.css'

// images
import abracadoobie from '../../images/team/abracadoobie.jpg'
import candyfloss from '../../images/team/candy-floss.jpg'
import grim from '../../images/team/grim.jpg'
import hotdogprince from '../../images/team/hotdog-prince.jpg'
import loonywise from '../../images/team/loonywise.jpg'
import kingstellar from '../../images/team/kingstellar.jpg'
import mexico from '../../images/team/mexico.jpg'
import mountainwarrior from '../../images/team/mountainwarrior.jpg'
import ninja from '../../images/team/ninja.jpg'
import slendie from '../../images/team/slendie.jpg'
import sludgie from '../../images/team/sludgie.jpg'
import squarehead from '../../images/team/squarehead.jpg'
import boiimustache from '../../images/team/boiimustache.jpg'

import bordertl from '../../images/team-tl.png'
import bordertr from '../../images/team-tr.png'
import borderbl from '../../images/team-bl.png'
import borderbr from '../../images/team-br.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArtstation, faBehance, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Team() {
    const team = [
        {
            id: 1,
            thumbnail: mexico,
            twitter: "https://twitter.com/ismaeljerusalem/",
            linkedin: "https://www.linkedin.com/in/ismaeljerusalem/",
            name: "ISMAEL JERUSALEM",
            position: "CEO"
        },
        {
            id: 2,
            thumbnail: slendie,
            twitter: "https://twitter.com/bernhistorillo/",
            linkedin: "https://www.linkedin.com/in/bernhistorillo/",
            name: "BERNARD HISTORILLO",
            position: "CTO"
        },
        {
            id: 3,
            thumbnail: squarehead,
            twitter: "https://twitter.com/smcanasco/",
            linkedin: "https://www.linkedin.com/in/theshiekina/",
            name: "SHIEKINA AÑASCO",
            position: "CMO"
        },
        {
            id: 4,
            thumbnail: loonywise,
            twitter: "https://twitter.com/itsToffeeLuck",
            linkedin: "https://www.linkedin.com/in/krcorral45/",
            name: "KRISTOFFER RAY CORRAL",
            position: "LEAD GAME DEVELOPER"
        },
        {
            id: 5,
            thumbnail: abracadoobie,
            twitter: "https://twitter.com/markiibundalian",
            linkedin: "https://www.linkedin.com/in/mjmarkii",
            name: "MARK JERLY BUNDALIAN",
            position: "FULL STACK DEVELOPER"
        },
        {
            id: 7,
            thumbnail: sludgie,
            twitter: "https://twitter.com/0xKJ_",
            linkedin: "https://www.linkedin.com/in/kylejaynaron",
            name: "KYLE JAY NARON",
            position: "MARKETING SPECIALIST"
        },
        {
            id: 8,
            thumbnail: boiimustache,
            twitter: "https://twitter.com/BoiiMustache",
            artstation: "https://www.artstation.com/sphinx1232",
            name: "BOII MUSTACHE",
            position: "MUSTACHIO/3D ARTIST"
        },
        {
            id: 9,
            thumbnail: candyfloss,
            twitter: "https://twitter.com/LoperaKendra",
            linkedin: "https://www.linkedin.com/in/kendralivmelgar/",
            name: "KENDRA LOPERA",
            position: "CONTENT CREATOR"
        },
        {
            id: 10,
            thumbnail: kingstellar,
            twitter: "https://twitter.com/itsmicahgrace",
            linkedin: "https://www.linkedin.com/in/micah-grace-rico/",
            name: "MICAH GRACE RICO",
            position: "CONTENT SPECIALIST"
        },
        {
            id: 11,
            thumbnail: hotdogprince,
            twitter: "https://twitter.com/yashaaachan",
            linkedin: "https://www.linkedin.com/in/flor-pacatang-26229218a/",
            name: "YASHA-CHAN",
            position: "COMMUNITY MANAGER"
        },
        {
            id: 12,
            thumbnail: grim,
            twitter: "https://twitter.com/ricozuniga",
            linkedin: "https://www.linkedin.com/in/ricoz/",
            name: "RICO ZUÑIGA",
            position: "TECHNICAL ADVISOR"
        },
        {
            id: 13,
            thumbnail: mountainwarrior,
            behance: "http://behance.net/rafbanzuela",
            name: "RAF BANZUELA",
            position: "CREATIVE ADVISOR"
        },
    ]

    return (
        <section id="team">
            <div className="container">
                <div className="row justify-content-center align-items-start">
                    <p className="team-title text-color-2 gotham-black text-center font-size-170 mb-3">MEET THE TEAM</p>
                    <p className="text-color-2 team-sub font-w-hermann w-hermann-reg text-center font-size-140 mb-5">With a combined 70 years of experience in software development, education, marketing, art, and design, the same team that won 13th place in Decentraland's Global Game Jam in 2019 launches its first play-to-earn NFT game in 2022.</p>
                    
                    {/* Temporary only till we have 12 in the team */}
                    {/* Refactor depending on the number of employees */}
                    <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                            { team.map(x => (
                                <div className="team-wrap" key={x.id}>
                                    <div className="team-thumbnail w-100">
                                        <img src={x.thumbnail} className="w-100" alt={`${x.name}'s Mustachio`} />
                                    </div>
                                    <div className="team-content">
                                        <p className="team-name text-color-2 gotham-bold mb-0">{x.name}</p>
                                        <p className="team-name gotham-light text-color-2 gotham-bold mb-0">{x.position}</p>
                                        <div className="team-links d-flex justify-content-start align-items-center">
                                            {x.twitter !== undefined && (
                                                <a href={x.twitter} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.linkedin !== undefined && (
                                                <a href={x.linkedin} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.artstation !== undefined && (
                                                <a href={x.artstation} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faArtstation} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.behance !== undefined && (
                                                <a href={x.behance} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faBehance} color="white" size="lg" />
                                                </a>
                                            )}                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                            { team.filter(x => x.id >= 12).map(x => (
                                <div className="team-wrap" key={x.id}>
                                    <div className="team-thumbnail w-100">
                                        <img src={x.thumbnail} className="w-100" alt={`${x.name}'s Mustachio`} />
                                    </div>
                                    <div className="team-content">
                                        <p className="team-name text-color-2 gotham-bold mb-0">{x.name}</p>
                                        <p className="team-name gotham-light text-color-2 gotham-bold mb-0">{x.position}</p>
                                        <div className="team-links d-flex justify-content-start align-items-center">
                                            {x.twitter !== undefined && (
                                                <a href={x.twitter} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.linkedin !== undefined && (
                                                <a href={x.linkedin} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.artstation !== undefined && (
                                                <a href={x.artstation} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faArtstation} color="white" size="lg" />
                                                </a>
                                            )}
                                            {x.behance !== undefined && (
                                                <a href={x.behance} target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faBehance} color="white" size="lg" />
                                                </a>
                                            )} 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>

                    {/* For width less than 992px */}
                    <div className="d-flex d-lg-none justify-content-evenly align-items-center flex-wrap">
                        { team.map(x => (
                            <div className="team-wrap" key={x.id}>
                                <div className="team-thumbnail w-100">
                                    <img src={x.thumbnail} className="w-100" alt={`${x.name}'s Mustachio`} />
                                </div>
                                <div className="team-content">
                                    <p className="team-name text-color-2 gotham-bold mb-0">{x.name}</p>
                                    <p className="team-name gotham-light text-color-2 gotham-bold mb-0">{x.position}</p>
                                    <div className="team-links d-flex justify-content-start align-items-center">
                                        {x.twitter !== undefined && (
                                            <a href={x.twitter} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
                                            </a>
                                        )}
                                        {x.linkedin !== undefined && (
                                            <a href={x.linkedin} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
                                            </a>
                                        )}
                                        {x.artstation !== undefined && (
                                            <a href={x.artstation} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faArtstation} color="white" size="lg" />
                                            </a>
                                        )}
                                        {x.behance !== undefined && (
                                            <a href={x.behance} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faBehance} color="white" size="lg" />
                                            </a>
                                        )} 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Borders */}
            <img src={bordertl} className="team-border team-tl" alt="Border Top Left" />
            <img src={bordertr} className="team-border team-tr" alt="Border Top Right" />
            <img src={borderbl} className="team-border team-bl" alt="Border Bottom Left" />
            <img src={borderbr} className="team-border team-br" alt="Border Bottom Right" />
        </section>
    )
}
