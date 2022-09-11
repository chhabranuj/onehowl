import landingLayoutStyle from "./landingLayout.module.css";

const LandingLayout = () => {

    return (
        <div className={landingLayoutStyle.landingParentContainer}>
                <div className={landingLayoutStyle.landing}>
                    <div className={landingLayoutStyle.catchySlogan}>
                        <div>
                            <div>
                                <span style={{"--i":"1"}}>T</span>
                                <span style={{"--i":"2"}}>A</span>
                                <span style={{"--i":"3"}}>S</span>
                                <span style={{"--i":"4"}}>T</span>
                                <span style={{"--i":"5"}}>E</span>
                            </div>
                            <div>
                                <span style={{"--i":"6"}}>&nbsp;&nbsp;T</span>
                                <span style={{"--i":"7"}}>H</span>
                                <span style={{"--i":"8"}}>E</span>
                            </div>
                            <div>
                                <span style={{"--i":"9"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"10"}}>O</span>
                                <span style={{"--i":"11"}}>R</span>
                                <span style={{"--i":"12"}}>L</span>
                                <span style={{"--i":"13"}}>D</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span style={{"--i":"14"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"15"}}>I</span>
                                <span style={{"--i":"16"}}>T</span>
                                <span style={{"--i":"17"}}>H</span>
                                <span style={{"--i":"18"}}>O</span>
                                <span style={{"--i":"19"}}>U</span>
                                <span style={{"--i":"20"}}>T</span>
                            </div>
                            <div>
                                <span style={{"--i":"21"}}>&nbsp;&nbsp;L</span>
                                <span style={{"--i":"22"}}>E</span>
                                <span style={{"--i":"23"}}>A</span>
                                <span style={{"--i":"24"}}>V</span>
                                <span style={{"--i":"25"}}>I</span>
                                <span style={{"--i":"26"}}>N</span>
                                <span style={{"--i":"27"}}>G</span>
                            </div>
                            <div>
                                <span style={{"--i":"28"}}>&nbsp;&nbsp;Y</span>
                                <span style={{"--i":"29"}}>O</span>
                                <span style={{"--i":"30"}}>U</span>
                                <span style={{"--i":"31"}}>R</span>
                            </div>
                            <div>
                                <span style={{"--i":"32"}}>&nbsp;&nbsp;C</span>
                                <span style={{"--i":"33"}}>H</span>
                                <span style={{"--i":"34"}}>A</span>
                                <span style={{"--i":"35"}}>I</span>
                                <span style={{"--i":"36"}}>R</span>
                            </div>
                        </div>
                    </div>
                    <button className={landingLayoutStyle.orderNowButton}>Order Now</button>
                </div>
        </div>
    );
}

export default LandingLayout;