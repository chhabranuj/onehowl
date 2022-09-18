import { AiFillStar } from "react-icons/ai";
import brandMenuCardLayoutStyle from "./brandMenuCardLayout.module.css";

const BrandMenuCardLayout = () => {

    return (
        <div className={brandMenuCardLayoutStyle.brandMenuCardParent}>
            <div className={brandMenuCardLayoutStyle.leftContainer}>
                <img 
                    src="/static/burgerImages/burgerCardImage.jpg"
                    width="50%"
                />
            </div>
            <div className={brandMenuCardLayoutStyle.rigthContainer}>
                <div className={brandMenuCardLayoutStyle.titleAndStarsContainer}>
                    <p className={brandMenuCardLayoutStyle.itemTitle}>Mc Aloo Tikki</p>
                    <div className={brandMenuCardLayoutStyle.starsContainer}>
                        <p className={brandMenuCardLayoutStyle.rating}>4.5</p>
                        <AiFillStar />
                    </div>
                </div>
                <div className={brandMenuCardLayoutStyle.titleAndStarsContainer}>
                    <p className={brandMenuCardLayoutStyle.ingredients}><span style={{fontWeight: "bold"}}>Ingredients:- </span>Chicken, tommato, green salad, pita, ketchup, maionese, ….</p>
                </div>
                <div className={brandMenuCardLayoutStyle.titleAndStarsContainer}>
                    <div className={brandMenuCardLayoutStyle.addToCartContainer}>
                        <button className={brandMenuCardLayoutStyle.addToCartButton}>Add</button>
                    </div>
                    <div className={brandMenuCardLayoutStyle.priceContainer}>
                        <p className={brandMenuCardLayoutStyle.originalPrice}><span style={{textDecoration: "line-through"}}>$800</span>&nbsp;(20% off)</p>
                        <p className={brandMenuCardLayoutStyle.price}>Now at $500</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandMenuCardLayout;