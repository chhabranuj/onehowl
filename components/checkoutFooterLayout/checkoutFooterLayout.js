import { BsArrowRight } from "react-icons/bs";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import checkoutFooterLayoutStyle from "./checkoutFooterLayout.module.css";

const CheckoutFooterLayout = () => {

    const handleBackButton = () => {

    }

    return (
        <div className={checkoutFooterLayoutStyle.checkoutFooterParent}>
            <div className={checkoutFooterLayoutStyle.totalPriceContainer}>
                <p className={checkoutFooterLayoutStyle.totalPrice}>₹1500</p>
                <p className={checkoutFooterLayoutStyle.discount}>(Saved ₹500)</p>
            </div>
            <p className={checkoutFooterLayoutStyle.checkoutSlogan}>A fresh kind of fast food for a new generation.</p>
            <ButtonLayout buttonText="CHECKOUT" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="darkgreen" buttonBgHoverColor="rgb(0, 100, 0, 0.75)" buttonIcon={<BsArrowRight />} handleButtonClick={handleBackButton} />
        </div>
    );
}

export default CheckoutFooterLayout;