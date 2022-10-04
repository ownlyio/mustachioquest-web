// images
import rascals from '../../images/rascal-pic.jpg'

// import axios from 'axios'
// import $ from 'jquery'
// import {Button, Modal} from "react-bootstrap";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// import {useState} from "react";
import './AboutRascals.css'

export default function AboutRascals() {
    return (
        <section id="about-rascals">
            <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-8 order-1 order-lg-0">
                        <div className="pe-lg-3">
                            <p className="gotham-black text-center text-lg-start font-size-240 font-size-md-270 mb-4">What are the Rascals?</p>

                            <div className="bg-color-1 w-100 mb-4" style={{"height":"1px"}}></div>
                            
                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">Another set of Mustachio adventurers are joining the Pathfinders (<a href="https://ownly.market/pathfinders2d" className="link-color-4" target="_blank" rel="noreferrer">2D</a> and <a href="https://ownly.market/pathfinders3d" className="link-color-4" target="_blank" rel="noreferrer">3D</a> Genesis Mustachios) and <a href="https://ownly.market/marauders" className="link-color-4" target="_blank" rel="noreferrer">Marauders</a> (Second Generation Mustachios) as they explore the Metaverse! Here comes the Mustachio Rascals, the next generation of our Mustachios.</p>
                            <p className="font-size-120 text-center text-lg-start line-height-150 pt-2 mb-2">With a maximum supply of 10,000 Generated 3D NFTs, the Mustachio Rascals are the third generation of Mustachios. Of course, you may explore and play Mustachio Quest with your 3D Mustachio Rascal.</p>
                            <p className="font-size-120 text-center text-lg-start gotham-bold line-height-150 pt-2 mb-2 pb-3">Launching this October 8, 2022 at AMAC 2022.</p>

                            {/* <div className="text-center text-lg-start">
                                <button className="btn btn-custom-2 font-size-120 px-5 py-2 fw-bold" style={{"width":"initial", "marginRight": "5px"}} onClick={props.mintBtn}>MINT NOW!</button>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-lg-4 order-0 order-lg-1 mb-5 mb-lg-0">
                        <div className="ps-lg-4">
                            <div className="mx-4 mx-sm-5 mx-lg-0 px-sm-5 px-lg-0">
                                <div className="mx-md-5 mx-lg-0 px-md-5 px-lg-0">
                                    <div className="background-image-cover w-100" style={{"paddingTop":"100%", "borderRadius":"50%", "backgroundImage":"url(" + rascals + ")"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
