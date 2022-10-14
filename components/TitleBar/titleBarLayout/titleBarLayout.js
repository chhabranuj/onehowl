import {  useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import TitleBarMenuLayout from "../titleBarMenuLayout/titleBarMenuLayout";

const TitleBarLayout = (props) => {
    const navigateToLanding = () => {
        window.location.href = "/";
    }

    const handleProfile = () => {
        window.location.href = "/login";
    }

    return (
        <div className={titleBarLayoutStyle.titleBarParent} style={{boxShadow: `${props.boxShadow}`}}>
            {/* For big screens */}
            <div className={titleBarLayoutStyle.bigScreenContainer}>
                <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div className={titleBarLayoutStyle.titleBarMenuParent}>
                    <div className={titleBarLayoutStyle.brandsParent}>
                        <p className={titleBarLayoutStyle.titleBarMenuContent}>Brands</p>
                        <div className={titleBarLayoutStyle.brandsToggle}>
                            <TitleBarMenuLayout menu={props.brandsData} />
                        </div>
                    </div>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Offers</p>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Cart</p>
                    <div>
                        <p className={titleBarLayoutStyle.titleBarMenuContent} onClick={handleProfile}>Profile</p>
                    </div>
                </div>
            </div>
            {/* For small screens */}
            <div className={titleBarLayoutStyle.smallScreenContainer}>
                <div style={{display: "flex"}}>
                    <IoMdHelpCircle className={titleBarLayoutStyle.menuIcons} />
                    <div className={titleBarLayoutStyle.brandsParent}>
                        <GiHamburger className={titleBarLayoutStyle.menuIcons} />
                        <div className={titleBarLayoutStyle.brandsToggle}>
                            <TitleBarMenuLayout menu={props.brandsData} />
                        </div>
                    </div>
                </div>
                <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div>
                    <BsFillCartFill className={titleBarLayoutStyle.menuIcons} />
                    <FaUserAlt className={titleBarLayoutStyle.menuIcons}  onClick={handleProfile} />
                </div>
            </div>
        </div>
    );
}

export default TitleBarLayout;