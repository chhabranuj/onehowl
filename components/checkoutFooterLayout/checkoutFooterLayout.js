import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { cartSelector } from "../store/reducers/cartReducer";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import checkoutFooterLayoutStyle from "./checkoutFooterLayout.module.css";

const CheckoutFooterLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    useEffect(() => {
        let tempTotalPrice = 0;
        let tempTotalDiscount = 0;

        setTotalItems(cart.length);
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + ((Math.round(item.realPrice * (100 - item.discount) * 0.01) * item.quantity));
            tempTotalDiscount = tempTotalDiscount + (Math.round(item.realPrice * item.discount * 0.01 )* item.quantity);
        });
        setTotalPrice(tempTotalPrice);
        setTotalDiscount(tempTotalDiscount);
    })

    const navigateToCart = () => {
        router.push("/cart");
    }

    return (
        <div className={checkoutFooterLayoutStyle.checkoutFooterParent}>
            {
                cart.length > 0 &&
                    <div className={checkoutFooterLayoutStyle.checkoutFooterContainer}>
                        <div className={checkoutFooterLayoutStyle.itemAndPriceContainer}>
                            <p className={checkoutFooterLayoutStyle.totalItems}>{totalItems}<br/><span className={checkoutFooterLayoutStyle.discount}>Items</span></p>
                            <span className={checkoutFooterLayoutStyle.divider}></span>
                            <p className={checkoutFooterLayoutStyle.totalPrice}>₹{totalPrice}<br /><span className={checkoutFooterLayoutStyle.discount}>(Saved ₹{totalDiscount})</span></p>
                        </div>
                        <p className={checkoutFooterLayoutStyle.checkoutSlogan}>A fresh kind of fast food for a new generation.</p>
                        <ButtonLayout buttonText="CHECKOUT" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="darkgreen" buttonBgHoverColor="rgb(0, 100, 0, 0.75)" rightButtonIcon={<BsArrowRight />} handleButtonClick={navigateToCart} />
                    </div>
            }
        </div>
    );
}

export default CheckoutFooterLayout;