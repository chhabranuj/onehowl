import { Link } from "react-scroll";
import hungryBannerLayoutStyle from "./hungryBannerLayout.module.css";
import landingLayoutStyle from "../landingLayout/landingLayout.module.css";

const HungryBannerLayout = () => {

    return (

        <div className={hungryBannerLayoutStyle.bannerParent}>
            <div className={hungryBannerLayoutStyle.bannerStyle}>
                <p className={hungryBannerLayoutStyle.title}>AREN'T &nbsp;YOU<br/>HUNGRY?</p>
                <button className={landingLayoutStyle.orderNowButton}>
                    <Link  to="orderLayout" smooth={true}>Order Now</Link>
                </button>
            </div>
        </div> 
    );
}

export default HungryBannerLayout;