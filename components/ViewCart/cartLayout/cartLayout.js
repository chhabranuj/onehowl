import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import cartLayoutStyle from "./cartLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../../Attributes/buttonLayout/buttonLayout";
import { addItem, removeItem, cartSelector } from "../../store/reducers/cartReducer";
import CartLayoutTableContent from "../cartLayoutTableContent/cartLayoutTableContent";

const CartLayout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector);
    const [isCartEmpty, setIsCartEmpty] = useState (false);

    useEffect(() => {
        cartEmpty();
        console.log(cart)
    })

    const cartEmpty = () => {
        cart.length? setIsCartEmpty(false): setIsCartEmpty(true);
    }


    const navigateTo = () => {
        console.log("Complete the name of button click");
    }

    return (
        <div className={cartLayoutStyle.cartParent}>
            <PageAboutLayout title="Your Cart" path="Cart" />
            {
                !isCartEmpty?
                    <table className={cartLayoutStyle.cartTable} cellSpacing="0">
                        <thead>
                            <tr>
                                <th className={cartLayoutStyle.cartTableTitle} style={{borderRadius: "20px 0 0 20px"}}></th>
                                <th className={cartLayoutStyle.cartTableTitle}>Product</th>
                                <th className={cartLayoutStyle.cartTableTitle}>Price</th>
                                <th className={cartLayoutStyle.cartTableTitle}>Quantity</th>
                                <th className={cartLayoutStyle.cartTableTitle} style={{borderRadius: "0 20px 20px 0"}}>Subtotal</th>
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
                    </table>:
                    <div className={cartLayoutStyle.emptyCartContainer}>
                        <p className={cartLayoutStyle.emptyCartContent} style={{margin: "0"}}>It looks like you didn't add any item in cart.</p>
                        <p className={cartLayoutStyle.emptyCartContent}>Why don't we find something for you?</p>
                        <ButtonLayout buttonText="HOME" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<BiArrowBack />} handleButtonClick={navigateTo} />
                    </div>
            }
        </div>
    );
}

export default CartLayout;