import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ReactConfetti from "react-confetti"; 
import { useEffect, useState } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { MdLocalOffer } from "react-icons/md";
import LoaderLayout from "../loaderLayout/loaderLayout";
import { cartSelector } from "../store/reducers/cartReducer";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import OrderPreview from "../orderPreviewLayout/orderPreviewLayout";
import confirmOrderLayoutStyle from "./confirmOrderLayout.module.css";
import addressLayoutStyle from "../addressLayout/addressLayout.module.css";
import inputLayoutStyle from "../Attributes/inputLayout/inputLayout.module.css";

const ConfirmOrderLayout = (props) => {
    const DELIVERY_PERCENTAGE = 20;
    const router = useRouter();
    const {data: session} = useSession();
    const cart = useSelector(cartSelector);
    const [coupons, setCoupons] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [addressData, setAddressData] = useState({});
    const [showLoader, setShowLoader] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [toggleCoupon, setToggleCoupon] = useState(false);
    const [showTacLoader, setShowTacLoader] = useState(false);
    const [offerCantAvailError, setOfferCantAvailError] = useState({
        isError: false,
        value: ""
    });
    const [couponApplied, setCouponApplied] = useState({
        coupon: "",
        discount: "",
        minOrder: "",
        isApplied: false
    });
    const [priceSummary, setPriceSummary] = useState({
        totalPrice: 0,
        discount: 0,
        deliveryCharges: 0,
        offer: 0,
        priceToPay: 0
    });

    useEffect(() => {
        if(cart.length == 0) {
            router.push("/");
        }
        setCoupons(JSON.parse(props.data));
        setAddressData(JSON.parse(props.addressData));
        let tempDiscount = 0;
        let tempTotalPrice = 0;
        let tempDeliveryCharges = 0;
        const cartItems = [];
        cart.map(item => {
            const orderItem = {};
            orderItem.name = item.name;
            orderItem.quantity = item.quantity;
            orderItem.price = item.realPrice;
            cartItems.push(orderItem);
            tempTotalPrice = tempTotalPrice + Math.floor(item.realPrice * item.quantity);
            tempDiscount = tempDiscount + Math.round(item.realPrice * item.discount * 0.01 * item.quantity);
        })
        setOrderData(cartItems);
        tempDeliveryCharges = Math.round(tempTotalPrice * DELIVERY_PERCENTAGE * 0.01);
        setPriceSummary({
            ...priceSummary,
            totalPrice: tempTotalPrice,
            discount: tempDiscount,
            deliveryCharges: tempDeliveryCharges,
            priceToPay: tempTotalPrice - tempDiscount + tempDeliveryCharges
        });
    }, [])

    const toggleCouponContainer = () => {
        setToggleCoupon(!toggleCoupon);
        setOfferCantAvailError({
            isError: false,
            value: ""
        });
        setCouponApplied({
            coupon: "Coupon Code...",
            discount: "",
            minOrder: "",
            isApplied: false
        })
    }

    const handleCoupon = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        if(couponApplied.coupon != "Coupon Code...") {
            let tempOffer = 0;
            tempOffer = Math.round(priceSummary.totalPrice * couponApplied.discount * 0.01);
            setPriceSummary({
                ...priceSummary,
                offer: tempOffer,
                priceToPay: priceSummary.totalPrice - priceSummary.discount + priceSummary.deliveryCharges - tempOffer
            })
            setToggleCoupon(false);
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
        else {
            setToggleCoupon(false);
        }
    }

    const naviagteToTermsAndCondition = () => {
        setShowTacLoader(true);
        router.push({
            pathname: "/documentation/terms&Conditions",
            query: {title: "Terms & Condition"}
        }, "/documentation/terms&Conditions");
    }

    const navigateToOrderSummary = () => {
        const wholeAddress = addressData.address + ", " + addressData.state + ", " + addressData.city + ", " + addressData.pinCode;
        setShowLoader(true);
        const body = {
            _id: session.user.email,
            orders: {
                orderStatus: false,
                address: wholeAddress,
                date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
                items: orderData,
                totalPrice: priceSummary.priceToPay,
                image: cart[0]["image"],
                couponDiscount: priceSummary.offer,
                coupon: couponApplied.coupon != "Coupon Code..." && couponApplied.coupon? couponApplied.coupon: "No Coupon Applied"
            }
        }
        axios.post("/api/addOrderData", body)
            .then((response) => {
                if(response.data.error) {
                    setShowLoader(false);
                    console.log("Something went wrong. Please try again.");
                }
                else {
                    router.push({
                        pathname: "/orderSummary",
                        query: {priceToPay: priceSummary.priceToPay}
                    }, "/orderSummary");
                }
            })
    }

    return (
        <div className={confirmOrderLayoutStyle.confirmOrderParent}>
            <PageAboutLayout title="Order" path={<span><span style={{color: "rgb(119, 164, 100)"}}>Cart &#8658;&nbsp;Address &#8658;&nbsp;</span> <span>Order</span></span>} />
            <div className={addressLayoutStyle.addressChild}>
                <div className={addressLayoutStyle.containerParent}>
                    <div className={addressLayoutStyle.container}>
                        <p className={addressLayoutStyle.title}>Order Summary</p>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{padding: "0", margin: "0"}} className={addressLayoutStyle.totalTitle}>Total Price:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>₹{priceSummary.totalPrice}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{padding: "0", margin: "0"}} className={addressLayoutStyle.totalTitle}>Discount:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small", display: "flex"}}>-&nbsp;₹{priceSummary.discount}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{padding: "0", margin: "0"}} className={addressLayoutStyle.totalTitle}>Delivery Charge:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>₹{priceSummary.deliveryCharges}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails} style={{borderBottom: "2px solid #ececec", paddingBottom: "0.5rem"}}>
                            <p style={{padding: "0", margin: "0"}} className={addressLayoutStyle.totalTitle}>Offer:</p>
                            <p style={{color: "grey", fontWeight: "500", fontSize: "small"}}>-&nbsp;₹{priceSummary.offer}</p>
                        </div>
                        <div className={confirmOrderLayoutStyle.orderDetails}>
                            <p style={{padding: "0", margin: "0"}} className={addressLayoutStyle.totalTitle}>Price To Pay:</p>
                            <p style={{fontWeight: "500"}}>₹{priceSummary.priceToPay}</p>
                        </div>
                    </div>
                    <div style={{padding: "0 0.5rem"}}>
                        <div className={confirmOrderLayoutStyle.couponButtonContainer}>
                            <FaTicketAlt style={{color: "#3bb77e", fontSize: "x-large"}}/>
                            <p className={confirmOrderLayoutStyle.couponTitle}>Everything feels good with a discount. <span className={confirmOrderLayoutStyle.couponButtonText} onClick={toggleCouponContainer}>Click here to apply for coupon.</span></p>
                        </div>
                    </div>
                    {
                        toggleCoupon &&
                            <div className={addressLayoutStyle.container}>
                                <p className={addressLayoutStyle.title} style={{marginBottom: "0.5rem"}}>Apply Coupon</p>
                                <div className={confirmOrderLayoutStyle.couponParent}>
                                    <div className={confirmOrderLayoutStyle.couponInputAndErrorContainer}>
                                        <div className={inputLayoutStyle.input} style={{padding: "0.2rem 0.8rem", width: "100%", marginTop: "0.6rem"}}>
                                            {!couponApplied.isApplied || offerCantAvailError.isError? <p className={confirmOrderLayoutStyle.inputText}>Coupon Code...</p>: <p className={confirmOrderLayoutStyle.inputText} style={{color: "black"}}>{couponApplied.coupon}</p>}
                                        </div>
                                        {offerCantAvailError.isError && <p style={{fontSize: "small", margin: "0", color: "red", marginLeft: "0.3rem"}}>Sorry, offer can't avail on order less than ₹{offerCantAvailError.value}.</p>}
                                    </div>
                                    <ButtonLayout buttonText="Apply" buttonWidth="30%" buttonPadding="1rem 0 " buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={handleCoupon} />
                                </div>
                                <div className={confirmOrderLayoutStyle.couponContainerDiv}>
                                    {
                                        coupons.map((item, index) => {
                                            if(item.minimumOrder <= priceSummary.totalPrice) {
                                                return (
                                                    <div className={confirmOrderLayoutStyle.couponContainer} key={index}>
                                                        <div className={confirmOrderLayoutStyle.couponDiv} onClick={() => {setCouponApplied({coupon: item.couponCode, discount: item.discount, minOrder: item.minimumOrder, isApplied: true}); setOfferCantAvailError({isError: false, value: ""})}}>
                                                            <MdLocalOffer style={{color: "#3bb77e"}} />
                                                            <p className={confirmOrderLayoutStyle.coupon}>{item.couponCode}</p>
                                                        </div>
                                                        <p className={confirmOrderLayoutStyle.couponDetail}>{item.couponDetail} &nbsp;<span style={{color: "grey", fontSize: "smaller", cursor: "pointer"}} onClick={naviagteToTermsAndCondition}>T&C apply</span></p>
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div className={confirmOrderLayoutStyle.couponContainer} style={{backgroundColor: "#f9ebea"}} key={index}>
                                                        <div className={confirmOrderLayoutStyle.couponDiv} onClick={() => {setOfferCantAvailError({isError: true, value: item.minimumOrder})}}>
                                                            <MdLocalOffer style={{color: "#CD6155"}} />
                                                            <p className={confirmOrderLayoutStyle.coupon}>{item.couponCode}</p>
                                                        </div>
                                                        <p className={confirmOrderLayoutStyle.couponDetail}>{item.couponDetail} &nbsp;<span style={{color: "grey", fontSize: "smaller"}} onClick={naviagteToTermsAndCondition}>T&C apply</span></p>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
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
            {showLoader && <LoaderLayout title="Please Wait. Confirming your order." />}
            {showTacLoader && <LoaderLayout title="Please Wait. Loading Terms & Conditionse" />}
            {showConfetti && <ReactConfetti recycle={false} numberOfPieces={800} tweenDuration={4800} />}
            {
                showConfetti &&
                    <div className={confirmOrderLayoutStyle.couponAppliedContainer}>
                        <FaTicketAlt style={{marginRight: "0.5rem"}}/>
                        <p>Coupon Applied Successfully.</p>
                    </div>
            }
        </div>
    );
}

export default ConfirmOrderLayout;