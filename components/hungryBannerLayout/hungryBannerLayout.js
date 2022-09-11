import hungryBannerLayoutStyle from "./hungryBannerLayout.module.css";
import landingLayoutStyle from "../landingLayout/landingLayout.module.css";

const HungryBannerLayout = () => {

    return (

        <div className={hungryBannerLayoutStyle.bannerParent}>
            <div className={hungryBannerLayoutStyle.bannerStyle}>
                <p className={hungryBannerLayoutStyle.title}>AREN'T<br/>YOU<br/>HUNGRY?</p>
                <button className={landingLayoutStyle.orderNowButton}>Order Now</button>
            </div>
        </div> 
    );
}

export default HungryBannerLayout;