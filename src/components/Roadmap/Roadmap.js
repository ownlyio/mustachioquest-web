import './Roadmap.css'

// images
import roadmapBG from '../../images/roadmap-bg.jpg'
import logo from '../../images/MQ_logo_white.png'

export default function Roadmap() {
  return (
    <section id="roadmap" style={{"backgroundImage": `url(${roadmapBG})`}}>
        <div className="roadmap-logo">
            <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
        </div>
        <p className="roadmap-title text-color-3 gotham-black font-size-280 text-center mb-5 pb-3">ROADMAP</p>

        {/*<div className="container">*/}
        {/*    <div className="d-flex justify-content-center mb-5">*/}
        {/*        <div className="card px-3 position-relative" style={{"backgroundColor":"#ffb800", "borderRadius":"10px", "zIndex":"1"}}>*/}
        {/*            <div className="card-body py-1">*/}
        {/*                <p className="text-color-6 gotham-black font-size-200 text-center mb-0">2021</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="row mb-5">*/}
        {/*        <div className="col-auto" style={{"width":"46%"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffb800", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffb800"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffb800", "borderRadius":"50%", "border":"3px solid #333333"}}>Q3</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Creation of Mustachios*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Mustachio Presale (Genesis Set - 100 Mustachios)*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Mustachio Official Launch*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Beginning of NFT Tales (Gen. 1)*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%", "marginTop":"-60px"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="bg-white" style={{"borderRadius":"10px 10px 10px 10px", "height":"330px", "width":"30px"}}>*/}
        {/*                    <div className="h-100" style={{"backgroundColor":"#ffb800", "width":"30px", "borderRadius":"10px 10px 10px 10px"}}>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"100px"}}>*/}
        {/*            <div className="card position-relative w-100" style={{"backgroundColor":"#ffb800", "borderRadius":"10px", "minHeight":"160px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffb800", "borderRadius":"50%", "border":"3px solid #333333"}}>Q2</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffb800"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4 d-flex align-items-center">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            OWN Token Airdrop to Mustachio Holders*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Launch of The Sages Rant Collectibles*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="d-flex justify-content-center mb-5">*/}
        {/*        <div className="card px-3 position-relative" style={{"backgroundColor":"#ffb800", "borderRadius":"10px", "zIndex":"1"}}>*/}
        {/*            <div className="card-body py-1">*/}
        {/*                <p className="text-color-6 gotham-black font-size-200 text-center mb-0">2022</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="row mb-5">*/}
        {/*        <div className="col-auto" style={{"width":"46%"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffb800", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffb800"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffb800", "borderRadius":"50%", "border":"3px solid #333333"}}>Q1</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Mustachio Quest Concept and Gameplay Announcement*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Mustachio Quest Early Preview Launch*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Launch of the Stake-to-Own Mustachio Marauder NFT Program*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Launch of 3D Mustachio Visualizer*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%", "marginTop":"-60px"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="bg-white" style={{"borderRadius":"10px 10px 0 0", "height":"330px", "width":"30px"}}>*/}
        {/*                    <div className="" style={{"backgroundColor":"#ffb800", "width":"30px", "height":"200px"}}>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"100px"}}>*/}
        {/*            <div className="card position-relative w-100" style={{"backgroundColor":"#ffb800", "borderRadius":"10px", "minHeight":"160px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffb800", "borderRadius":"50%", "border":"3px solid #333333"}}>Q2</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffb800"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4 d-flex align-items-center">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle-check font-size-120"></i>*/}
        {/*                            Closed Beta Testing for Genesis Holders*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li fa fa-circle font-size-120"></i>*/}
        {/*                            Minting of Mustachio Marauder NFT*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"-50px"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q3</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Launch of the 10,000 3D Mustachio Rascals*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest NFT Land Sale*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: 1.0 Launch*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest Marketplace via Ownly Market*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="card" style={{"backgroundColor":"#ffffff", "borderRadius":"0 0 10px 10px", "height":"260px", "width":"30px"}}>*/}
        {/*                    <div className="card-body p-4">*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"50px"}}>*/}
        {/*            <div className="card w-100 position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "minHeight":"160px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q4</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4 d-flex align-items-center">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest Play-and-Earn Launch*/}
        {/*                        </li>*/}

        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            $QUEST Reward Token Launch*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="d-flex justify-content-center mb-5">*/}
        {/*        <div className="card px-3 position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "zIndex":"1"}}>*/}
        {/*            <div className="card-body py-1">*/}
        {/*                <p className="text-color-6 gotham-black font-size-200 text-center mb-0">2023</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="row mb-5">*/}
        {/*        <div className="col-auto" style={{"width":"46%"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q1</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Automated Scholarships*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%", "marginTop":"-60px"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="card" style={{"backgroundColor":"#ffffff", "borderRadius":"10px 10px 0 0", "height":"330px", "width":"30px"}}>*/}
        {/*                    <div className="card-body p-4">*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"100px"}}>*/}
        {/*            <div className="card position-relative w-100" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "minHeight":"104px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q2</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Continuous Development*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"-50px"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q3</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Continuous Development*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="card" style={{"backgroundColor":"#ffffff", "borderRadius":"0 0 10px 10px", "height":"220px", "width":"30px"}}>*/}
        {/*                    <div className="card-body p-4">*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"50px"}}>*/}
        {/*            <div className="card w-100 position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "minHeight":"104px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q4</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Continuous Development*/}
        {/*                        </li>*/}

        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="d-flex justify-content-center mb-5">*/}
        {/*        <div className="card px-3 position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "zIndex":"1"}}>*/}
        {/*            <div className="card-body py-1">*/}
        {/*                <p className="text-color-6 gotham-black font-size-200 text-center mb-0">2024</p>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    <div className="row mb-5">*/}
        {/*        <div className="col-auto" style={{"width":"46%"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q1</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Automated Scholarships*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%", "marginTop":"-60px"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="card" style={{"backgroundColor":"#ffffff", "borderRadius":"10px 10px 0 0", "height":"330px", "width":"30px"}}>*/}
        {/*                    <div className="card-body p-4">*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"100px"}}>*/}
        {/*            <div className="card position-relative w-100" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "minHeight":"104px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q2</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Continuous Development*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"-50px"}}>*/}
        {/*            <div className="card position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "right":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q3</div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Continuous Development*/}
        {/*                        </li>*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"8%"}}>*/}
        {/*            <div className="d-flex justify-content-center px-4">*/}
        {/*                <div className="card" style={{"backgroundColor":"#ffffff", "borderRadius":"0 0 10px 10px", "height":"220px", "width":"30px"}}>*/}
        {/*                    <div className="card-body p-4">*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        <div className="col-auto" style={{"width":"46%", "marginTop":"50px"}}>*/}
        {/*            <div className="card w-100 position-relative" style={{"backgroundColor":"#ffffff", "borderRadius":"10px", "minHeight":"104px"}}>*/}
        {/*                <div className="d-flex align-items-center position-absolute" style={{"top":"-25px", "left":"-100px", "zIndex":"1"}}>*/}
        {/*                    <div className="d-flex justify-content-center align-items-center fw-bold font-size-150" style={{"width":"70px", "height":"70px", "backgroundColor":"#ffffff", "borderRadius":"50%", "border":"3px solid #333333"}}>Q4</div>*/}
        {/*                    <div className="" style={{"width":"100px", "height":"20px", "backgroundColor":"#ffffff"}}></div>*/}
        {/*                </div>*/}

        {/*                <div className="card-body p-4">*/}
        {/*                    <ul className="fa-ul ms-4 mb-0">*/}
        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Integration with OwnChain*/}
        {/*                        </li>*/}

        {/*                        <li className="d-flex align-items-center mb-1">*/}
        {/*                            <i className="fa-li far fa-circle font-size-120"></i>*/}
        {/*                            Mustachio Quest: Quarterly World Tournament*/}
        {/*                        </li>*/}
        {/*                    </ul>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="roadmap-border my-3"></div>
        <div className="roadmap-wrapper d-flex justify-content-start">
            {/* 2022 */}
            <div id="2022-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2022 Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="now q-pointer"></div>
                        <div className="now q-content gotham-light text-black font-size-110">Launch of the 10,000 3D Mustachio Rascals</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest NFT Land Sale</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: 1.0 Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Marketplace via Ownly Market</div>
                    </div>
                </div>
            </div>
            <div id="2022-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest Play-and-Earn Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">$QUEST Reward Token Launch</div>
                    </div>
                </div>
            </div>

            {/* 2023 */}
            <div id="2023-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2023 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Automated Scholarships</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2023-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>

            {/* 2024 */}
            <div id="2024-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column year">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2024 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Automated Scholarships</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Continuous Development</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>
            <div id="2024-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Integration with OwnChain</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="soon q-pointer"></div>
                        <div className="soon q-content gotham-light text-black font-size-110">Mustachio Quest: Quarterly World Tournament</div>
                    </div>
                </div>
            </div>

            {/* PAST ROADMAPS */}
            {/* 2021 */}
            <div id="past-roadmaps" className="roadmap-quarter">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column past">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">PAST ROADMAPS</p>
                    </div>
                </div>
            </div>
            <div id="2021-q3" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column after-past">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2021 Q3</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Creation of Mustachios</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Presale (Genesis Set - 100 Mustachios)</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Official Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Beginning of NFT Tales (Gen. 1)</div>
                    </div>
                </div>
            </div>
            <div id="2021-q4" className="roadmap-quarter year-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q4</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">OWN Token Airdrop to Mustachio Holders</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Launch of The Sages Rant Collectibles</div>
                    </div>
                </div>
            </div>

            {/* 2022 */}
            <div id="2022-q1" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">2022 Q1</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest Concept and Gameplay Announcement</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Mustachio Quest Early Preview Launch</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Launch of the Stake-to-Own Mustachio Marauder NFT Program</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Launch of 3D Mustachio Visualizer</div>
                    </div>
                </div>
            </div>
            <div id="2022-q2" className="roadmap-quarter q-margin">
                <div className="d-flex justify-content-evenly align-items-start">
                    <div className="q-column quarter">
                        <p className="text-color-3 gotham-black font-size-170 mb-0">Q2</p>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Closed Beta Testing for Genesis Holders</div>
                    </div>
                    <div className="q-column quarter-mr">
                        <div className="done q-pointer"></div>
                        <div className="done q-content gotham-light text-black font-size-110">Minting of Mustachio Marauder NFTs</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
