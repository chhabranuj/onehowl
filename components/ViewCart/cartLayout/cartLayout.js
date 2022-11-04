import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import cartLayoutStyle from "./cartLayout.module.css";
import { cartSelector } from "../../store/reducers/cartReducer";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../../Attributes/buttonLayout/buttonLayout";
import CartLayoutTableContent from "../cartLayoutTableContent/cartLayoutTableContent";

const CartLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const [tableWidth, setTableWidth] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState (false);

    useEffect(() => {
        cartEmpty();
        let tempTotalPrice = 0;
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + (Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity);
        })
        setTotalPrice(tempTotalPrice);
        setTableWidth(document.getElementById("table").offsetWidth);
    })

    const handleSaveCart = () => {}

    const navigateToAddress = () => {
        router.push("/address");
    }

    const cartEmpty = () => {
        cart.length? setIsCartEmpty(false): setIsCartEmpty(true);
    }

    return (
        <div className={cartLayoutStyle.cartParent}>
            <PageAboutLayout title="Your Cart" path="Cart" />
            {
                !isCartEmpty?
                    <div className={cartLayoutStyle.cartChild}>
                        <table id="table" className={cartLayoutStyle.cartTable} cellSpacing="0">
                            <thead>
                                <tr>
                                    <th className={cartLayoutStyle.cartTableTitle} style={{borderRadius: "1.2rem 0 0 1.2rem"}}></th>
                                    <th className={cartLayoutStyle.cartTableTitle}>Product</th>
                                    <th className={cartLayoutStyle.cartTableTitle}>Price</th>
                                    <th className={cartLayoutStyle.cartTableTitle}>Quantity</th>
                                    <th className={cartLayoutStyle.cartTableTitle} style={{borderRadius: "0 1.2rem 1.2rem 0"}}>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => {
                                        return (
                                            <CartLayoutTableContent data={item} key={index} />
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <div style={{width: `${tableWidth}px`}} className={cartLayoutStyle.footerParent}>
                            <ButtonLayout buttonText="SAVE CART" buttonWidth="auto" buttonPadding="0.75rem 1rem" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={handleSaveCart} />
                            <div className={cartLayoutStyle.footerTotalPrice}>
                                <p style={{margin: "0", fontWeight: "bold"}} className={cartLayoutStyle.totalTitle}>Total Price:-</p>
                                <p style={{margin: "0"}} className={cartLayoutStyle.totalTitle}>&nbsp;₹{totalPrice}</p>
                            </div>
                            <ButtonLayout buttonText="PROCEED&nbsp;&nbsp;&#8594;" buttonWidth="auto" buttonPadding="0.75rem 1rem" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={navigateToAddress} />
                        </div>
                    </div>:
                    <div className={cartLayoutStyle.emptyCartContainer}>
                        <p className={cartLayoutStyle.emptyCartContent} style={{margin: "0"}}>It looks like you didn't add any item in cart.</p>
                        <p className={cartLayoutStyle.emptyCartContent}>Why don't we find something for you?</p>
                        <ButtonLayout buttonText="HOME" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<BsArrowLeft />} handleButtonClick={() => router.push("/")} />
                    </div>
            }
        </div>
    );
}

export default CartLayout;