import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import LoaderLayout from "../loaderLayout/loaderLayout";
import { cartSelector } from "../store/reducers/cartReducer";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import checkoutFooterLayoutStyle from "./checkoutFooterLayout.module.css";

const CheckoutFooterLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showLoader, setShowLoader] = useState(false);
    const [totalDiscount, setTotalDiscount] = useState(0);
    const [isItemsInCart, setIsItemsInCart] = useState(false);

    useEffect(() => {
        let tempTotalPrice = 0;
        let tempTotalDiscount = 0;

        setTotalItems(cart.length);
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + ((Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity));
            tempTotalDiscount = tempTotalDiscount + (Math.round(item.realPrice * item.discount * 0.01 )* item.quantity);
        });
        setTotalPrice(tempTotalPrice);
        setTotalDiscount(tempTotalDiscount);
        cart.length > 0? setIsItemsInCart(true): setIsItemsInCart(false);
    })

    const navigateToCart = () => {
        setShowLoader(true);
        router.push("/cart");
    }

    return (
        <>
            {
                isItemsInCart &&
                    <div className={checkoutFooterLayoutStyle.checkoutFooterParent}>
                        <div className={checkoutFooterLayoutStyle.checkoutFooterContainer}>
                            <div className={checkoutFooterLayoutStyle.itemAndPriceContainer}>
                                <p className={checkoutFooterLayoutStyle.totalItems}>{totalItems}<br/><span className={checkoutFooterLayoutStyle.discount}>Items</span></p>
                                <span className={checkoutFooterLayoutStyle.divider}></span>
                                <p className={checkoutFooterLayoutStyle.totalPrice}>₹{totalPrice}<br /><span className={checkoutFooterLayoutStyle.discount}>(Saved ₹{totalDiscount})</span></p>
                            </div>
                            <p className={checkoutFooterLayoutStyle.checkoutSlogan}>A fresh kind of fast food for a new generation.</p>
                            <ButtonLayout buttonText="CHECKOUT" buttonWidth="auto" buttonPadding="0.65rem 1.2rem" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" rightButtonIcon={<BsArrowRight />} handleButtonClick={navigateToCart} />
                        </div>
                        {showLoader && <LoaderLayout title="Please wait. Your cart is getting ready." />}
                    </div>
            }
        </>
    );
}

export default CheckoutFooterLayout;