import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import LoaderLayout from "../loaderLayout/loaderLayout";
import { insertCart } from "../store/reducers/cartReducer";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import orderSummaryLayoutStyle from "./orderSummaryLayout.module.css";

const OrderSummaryLayout = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const [showHomeLoader, setShowHomeLoader] = useState(false);

    useEffect(() => {
        if(!props.priceToPay || !session) {
            setShowHomeLoader(true);
            router.push("/");
        }
        else if(session) {
            dispatch(insertCart({data: []}));
            const body = {
                _id: session.user.email,
                cart: []
            }
            axios.post("/api/updateCart", body)
                .then((response) => {
                })
        }
    })

    const navigateToHome = () => {
        setShowHomeLoader(true);
        router.push("/");
    }
    
    const currentDate = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date;
    }

    return (
        <div className={orderSummaryLayoutStyle.summaryParent}>
            <PageAboutLayout title="Summary" path={<span><span style={{color: "rgb(119, 164, 100)"}}>Cart &#8658;&nbsp;Address &#8658;&nbsp;Order &#8658;&nbsp;</span> <span>Summary</span></span>} />
            <div className={orderSummaryLayoutStyle.thankYouContainer}>
                <p className={orderSummaryLayoutStyle.thankYouText}>Thank you. Your order has been received.</p>
            </div>
            <div className={orderSummaryLayoutStyle.additionalInfoContainer}>
                <p className={orderSummaryLayoutStyle.additionalInfoContent}>Order Number: <br /><span style={{color: "#3bb77e", fontWeight: "bold", letterSpacing: "0.1rem"}}>{Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}</span></p>
                <p className={orderSummaryLayoutStyle.additionalInfoContent}>Payment Method: <br /><span style={{color: "#3bb77e", fontWeight: "bold", letterSpacing: "0.1rem"}}>Cash on delivery</span></p>
                <p className={orderSummaryLayoutStyle.additionalInfoContent}>Date: <br /><span style={{color: "#3bb77e", fontWeight: "bold", letterSpacing: "0.1rem"}}>{currentDate()}</span></p>
                <p className={orderSummaryLayoutStyle.additionalInfoContent} style={{borderRight: "none"}}>Total: <br /><span style={{color: "#3bb77e", fontWeight: "bold", letterSpacing: "0.1rem"}}>₹{props.priceToPay? props.priceToPay:0}</span></p>
            </div>
            <div className={orderSummaryLayoutStyle.goToHomeContainer}>
                <div className={orderSummaryLayoutStyle.childContainer}>
                    <img
                        src="/static/summaryImage.svg"
                        alt="Summary Image"
                        className={orderSummaryLayoutStyle.summaryImage}
                    />
                </div>
                <div className={orderSummaryLayoutStyle.childContainer}>
                    <p className={orderSummaryLayoutStyle.homeContent}  style={{fontSize: "medium", color: "#3BB77E", margin: "0"}}>Our chefs are preparing your food.</p>
                    <p className={orderSummaryLayoutStyle.homeContent}>Why don't you prepare your next order.</p>
                    <ButtonLayout buttonText="Home" buttonWidth="80%" buttonPadding="1rem 0" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<HiArrowNarrowLeft />} handleButtonClick={navigateToHome} />
                </div>
            </div>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default OrderSummaryLayout;