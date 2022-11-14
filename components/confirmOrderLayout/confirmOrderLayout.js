import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { cartSelector } from "../store/reducers/cartReducer";
import OrderPreview from "../orderPreview/orderPreviewLayout";
import InputLayout from "../Attributes/inputLayout/inputLayout";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import confirmOrderLayoutStyle from "./confirmOrderLayout.module.css";
import addressLayoutStyle from "../addressLayout/addressLayout.module.css";

const ConfirmOrderLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const [toggleCoupon, setToggleCoupon] = useState(false);
    const [priceSummary, setPriceSummary] = useState({
        totalPrice: 0,
        discount: 0,
        deliveryCharges: 0,
        offer: 0,
        priceToPay: 0
    });

    useEffect(() => {
        if(cart.length == 0) {
            router.push("/")
        }
        let tempTotalPrice = 0;
        let tempDiscount = 0;
        let tempDeliveryCharges = 0;
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + Math.floor(item.realPrice);
            tempDiscount = tempDiscount + Math.round(item.realPrice * item.discount * 0.01);
        })
        tempDeliveryCharges = tempTotalPrice - tempDiscount > 400? 30: tempTotalPrice - tempDiscount < 100? 50: Math.round(tempTotalPrice/10);
        setPriceSummary({
            ...priceSummary,
            totalPrice: tempTotalPrice,
            discount: tempDiscount,
            deliveryCharges: tempDeliveryCharges,
            priceToPay: tempTotalPrice - tempDiscount + tempDeliveryCharges
        });
    }, [])

    const navigateToOrderSummary = () => {
        router.push({
            pathname: "/orderSummary",
            query: {priceToPay: priceSummary.priceToPay}
        }, "/orderSummary");
    }

    return (
        <div className={confirmOrderLayoutStyle.confirmOrderParent}>
            <PageAboutLayout title="Order" path={<span><span style={{color: "rgb(119, 164, 100)"}}>Cart &#8658;&nbsp;Address &#8658;&nbsp;</span> <span>Order</span></span>} />
            <div className={addressLayoutStyle.addressChild}>
                <div className={addressLayoutStyle.containerParent}>
                    <div className={addressLayoutStyle.container}>
                        <p className={addressLayoutStyle.title}>Order Summary</p>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Total Price:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>₹{priceSummary.totalPrice}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Discount:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small", display: "flex"}}>-&nbsp;₹{priceSummary.discount}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Delivery Charge:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>₹{priceSummary.deliveryCharges}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails} style={{borderBottom: "2px solid #ececec", paddingBottom: "0.5rem"}}>
                            <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Offer:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>₹{priceSummary.offer}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Price To Pay:</p>
                            <p style={{fontWeight: "500"}}>₹{priceSummary.priceToPay}</p>
                        </div>
                    </div>
                    <div style={{padding: "0 0.5rem"}}>
                        <div className={confirmOrderLayoutStyle.couponButtonContainer}>
                            <FaTicketAlt style={{color: "#3bb77e", fontSize: "x-large"}}/>
                            <p className={confirmOrderLayoutStyle.couponTitle}>Have a coupon? <span className={confirmOrderLayoutStyle.couponButtonText} onClick={() => setToggleCoupon(!toggleCoupon)}>Click here to enter your code.</span></p>
                        </div>
                    </div>
                    {
                        toggleCoupon &&
                            <div className={addressLayoutStyle.container}>
                                <p className={addressLayoutStyle.title} style={{marginBottom: "0.5rem"}}>Apply Coupon</p>
                                <div className={confirmOrderLayoutStyle.couponContainer}>
                                    <InputLayout placeholder="Enter Coupon Code." type="text"  width="65%" getInputData={navigateToOrderSummary} />
                                    <ButtonLayout buttonText="Apply" buttonWidth="30%" buttonPadding="1rem 0 " buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={navigateToOrderSummary} />
                                </div>
                            </div>
                    }
                </div>
                <div className={addressLayoutStyle.containerParent}>
                    <OrderPreview />
                    <div style={{padding: "0 0.5rem"}}>
                        <ButtonLayout buttonText="Place Order" buttonWidth="100%" buttonPadding="1rem 0 " buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={navigateToOrderSummary} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrderLayout;