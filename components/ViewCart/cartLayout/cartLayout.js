import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BsArrowLeft } from "react-icons/bs";
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
    const [orderData, setOrderData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState (false);
    const [showProceedLoader, setShowProceedLoader] = useState(false);
    const [showSaveCartLoader, setShowSaveCartLoader] = useState(false);

    useEffect(() => {
        cartEmpty();
        let tempTotalPrice = 0;
        const cartItems = [];
        cart.map(item => {
            const orderItem = {};
            orderItem.name = item.name;
            orderItem.quantity = item.quantity;
            cartItems.push(orderItem);
            tempTotalPrice = tempTotalPrice + (Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity);
        });
        setOrderData(cartItems);
        setTotalPrice(tempTotalPrice);
    }, [])

    const handleSaveCart = () => {
        setShowSaveCartLoader(true);
        const body = {
            _id: session.user.email,
            cart : orderData
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

    const navigateToAddress = () => {
        setShowProceedLoader(true);
        router.push("/address");
    }

    const cartEmpty = () => {
        cart.length? setIsCartEmpty(false): setIsCartEmpty(true);
    }

    return (
        <div className={cartLayoutStyle.cartParent}>
            <PageAboutLayout title="Your Cart" path={<span>Cart</span>}  />
            {
                !isCartEmpty?
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
                    </div>:
                    <div className={cartLayoutStyle.emptyCartContainer}>
                        <p className={cartLayoutStyle.emptyCartContent} style={{margin: "0"}}>It looks like you didn't add any item in cart.</p>
                        <p className={cartLayoutStyle.emptyCartContent}>Why don't we find something for you?</p>
                        <ButtonLayout buttonText="HOME" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<BsArrowLeft />} handleButtonClick={() => router.push("/")} />
                    </div>
            }
            {showProceedLoader && <LoaderLayout title="Please Wait. Getting your address." />}
            {showSaveCartLoader && <LoaderLayout title="Please Wait. Saving your cart." />}
        </div>
    );
}

export default CartLayout;