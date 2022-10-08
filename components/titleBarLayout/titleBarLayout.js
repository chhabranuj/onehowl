import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import TitleBarMenuLayout from "../titleBarMenuLayout/titleBarMenuLayout";

const TitleBarLayout = (props) => {
    const brandsMenuContent = ["Mc Donald's", "Pizza Hut", "Starbucks", "Dunkin Donuts", "Burger King", "Kfc", "Domino's", "Subway", "Cafe Coffee Day"];
    const [brandsMenu, setBrandsMenu] = useState(false);

    const handleBrandsMenu = () => {
        setBrandsMenu(!brandsMenu);
    }

    return (
        <div className={titleBarLayoutStyle.titleBarParent} style={{boxShadow: `${props.boxShadow}`}}>
            {/* For big screens */}
            <div className={titleBarLayoutStyle.bigScreenContainer}>
                <p className={titleBarLayoutStyle.title}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div className={titleBarLayoutStyle.titleBarMenuParent}>
                    <div>
                        <p className={titleBarLayoutStyle.titleBarMenuContent} onClick={handleBrandsMenu}>Brands</p>
                        {brandsMenu && <TitleBarMenuLayout menu={brandsMenuContent} />}
                    </div>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Offers</p>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Cart</p>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Profile</p>
                </div>
            </div>
            {/* For small screens */}
            <div className={titleBarLayoutStyle.smallScreenContainer}>
                <div style={{display: "flex"}}>
                    <IoMdHelpCircle className={titleBarLayoutStyle.menuIcons} />
                    <div>
                        <GiHamburger className={titleBarLayoutStyle.menuIcons} onClick={handleBrandsMenu} />
                        {brandsMenu && <TitleBarMenuLayout menu={brandsMenuContent} />}
                    </div>
                </div>
                <p className={titleBarLayoutStyle.title}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div>
                    <BsFillCartFill className={titleBarLayoutStyle.menuIcons} />
                    <FaUserAlt className={titleBarLayoutStyle.menuIcons} />
                </div>
            </div>
        </div>
    );
}

export default TitleBarLayout;