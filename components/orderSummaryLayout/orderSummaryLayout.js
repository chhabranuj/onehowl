import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/reducers/cartReducer";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import { productSelector } from "../store/reducers/productReducer";
import orderSummaryLayoutStyle from "./orderSummaryLayout.module.css";
import FeaturedCategoriesLayout from "../FeaturedCategories/featuredCategoriesLayout/featuredCategoiresLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";

const OrderSummaryLayout = (props) => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const products = useSelector(productSelector);

    useEffect(() => {
        if(cart.length == 0) {
            router.push("/");
        }
    })

    const navigateToHome = () => {}
    
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
                <p className={orderSummaryLayoutStyle.additionalInfoContent} style={{borderRight: "none"}}>Total: <br /><span style={{color: "#3bb77e", fontWeight: "bold", letterSpacing: "0.1rem"}}>₹{props.priceToPay}</span></p>
            </div>
            <div style={{width: "90%", marginTop: "3rem"}}>
                <FeaturedCategoriesLayout data={products} title="Lets Shop More" />
            </div>
        </div>
    );
}

export default OrderSummaryLayout;