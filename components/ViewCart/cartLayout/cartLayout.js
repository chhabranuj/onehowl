import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import cartLayoutStyle from "./cartLayout.module.css";
import LoaderLayout from "../../loaderLayout/loaderLayout";
import { cartSelector } from "../../store/reducers/cartReducer";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../../Attributes/buttonLayout/buttonLayout";
import CartLayoutTableContent from "../cartLayoutTableContent/cartLayoutTableContent";

const CartLayout = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const cart = useSelector(cartSelector);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loginError, setLoginError] = useState(false);
    const [showHomeLoader, setShowHomeLoader] = useState(false);
    const [showProceedLoader, setShowProceedLoader] = useState(false);
    const [loginErrorContent, setLoginErrorContent] = useState("");
    const [showSaveCartLoader, setShowSaveCartLoader] = useState(false);

    useEffect(() => {
        if(!cart.length) {
            setShowHomeLoader(true);
            router.push("/");
        }
        else {
            price();
        }
    })

    const price = () => {
        let tempTotalPrice = 0;
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + (Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity);
        });
        setTotalPrice(tempTotalPrice);
    }

    const handleSaveCart = () => {
        if(session) {
            setShowSaveCartLoader(true);
            const cartItems = [];
            cart.map(item => {
                const orderItem = {};
                orderItem.id = item.id;
                orderItem.quantity = item.quantity;
                orderItem.category = item.category;
                cartItems.push(orderItem);
            });
            const body = {
                _id: session.user.email,
                cart : cartItems
            }
            axios.post("api/updateCart", body)
                .then((response) => {
                    if(response.data.result) {
                        setShowSaveCartLoader(false);
                    }
                    else {
                        console.log("Error occured!!!");
                    }
                })
        }
        else {
            setLoginErrorContent("Please Login and save your cart anytime anywhere.")
            setLoginError(true);
            setInterval(() => {
                setLoginError(false);
            }, 5000)
        }
    }

    const navigateToAddress = () => {
        if(session) {
            setShowProceedLoader(true);
            router.push("/address");
        }
        else {
            setLoginErrorContent("Please Login and order as much as you want.");
            setLoginError(true);
            setInterval(() => {
                setLoginError(false);
            }, 5000)
        }
    }

    return (
        <div className={cartLayoutStyle.cartParent}>
            <PageAboutLayout title="Your Cart" path={<span>Cart</span>}  />
            <div className={cartLayoutStyle.cartChild}>
                <div className={cartLayoutStyle.tableContainer}>
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
                </div>
                <p style={{width: "100%", textAlign: "center"}} className={cartLayoutStyle.totalTitleMobile}><span style={{fontWeight: "bold"}}>Total Price:- </span>&nbsp;₹{totalPrice}</p>
                <div className={cartLayoutStyle.footerParent}>
                    <ButtonLayout buttonText="SAVE CART" buttonWidth="auto" buttonPadding="0.75rem 1rem" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={handleSaveCart} />
                    <p style={{margin: "0"}} className={cartLayoutStyle.totalTitle}><span style={{fontWeight: "bold"}}>Total Price:- </span>&nbsp;₹{totalPrice}</p>
                    <ButtonLayout buttonText="PROCEED&nbsp;&nbsp;&#8594;" buttonWidth="auto" buttonPadding="0.75rem 1rem" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={navigateToAddress} />
                </div>
            </div>
            {showProceedLoader && <LoaderLayout title="Please Wait. Getting your address." />}
            {showSaveCartLoader && <LoaderLayout title="Please Wait. Saving your cart." />}
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
            {
                loginError && 
                    <div className={cartLayoutStyle.loginError}>
                        <p className={cartLayoutStyle.loginErrorContent}>You&apos;re not Logged In.<br/>{loginErrorContent}</p>
                    </div>
            }
        </div>
    );
}

export default CartLayout;