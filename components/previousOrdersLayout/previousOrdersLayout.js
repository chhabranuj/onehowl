import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import LoaderLayout from "../loaderLayout/loaderLayout";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import previousOrdersLayoutStyle from "./previousOrdersLayout.module.css";

const PreviousOrdersLayout = (props) => {
    const router = useRouter();
    const {data: session} = useSession();
    const [orderData, setOrderData] = useState([]);
    const [showHomeLoader, setShowHomeLoader] = useState(false);

    useEffect(() => {
        if(!props.data || !session) {
            setShowHomeLoader(true);
            router.push("/");
        }
        else {
            for(let i=0; i<props.data.length; i++) {
                for (let j=0; j<props.data.length; j++) {
                    if(moment(props.data[i].date).isAfter(moment(props.data[j].date))) {
                        let temp = props.data[i];
                        props.data[i] = props.data[j];
                        props.data[j] = temp;
                    }
                }
            }
            setOrderData(props.data);
        }
    })
    
    return (
        <div className={previousOrdersLayoutStyle.previousOrdersParent}>
            <PageAboutLayout title="Your Orders" path={<span>Previous Orders</span>} />
            <div className={previousOrdersLayoutStyle.previousOrdersChild}>
                {
                    orderData.map((item, index) => {
                        return (
                            <div key={index} className={previousOrdersLayoutStyle.previousOrdersContainer}>
                                <div className={previousOrdersLayoutStyle.orderImageTitleAndDeliveryStatus}>
                                    <div className={previousOrdersLayoutStyle.orderImageAndTitle}>
                                        <img 
                                            src={item.image}
                                            alt="Order Image"
                                            className={previousOrdersLayoutStyle.orderImage}
                                        />
                                        <div className={previousOrdersLayoutStyle.orderFrom}>
                                            <p className={previousOrdersLayoutStyle.orderFromTitle} style={{color: "grey", fontSize: "smaller"}}>From the desk of</p>
                                            <p className={previousOrdersLayoutStyle.orderFromTitle} style={{fontWeight: "bold", fontSize: "large"}}>OneHowl</p>
                                        </div>
                                    </div>
                                    <p style={{margin: "0", textAlign: "center", fontSize: "0.8rem"}}><strong>Order Status:</strong><br/>{props.orderStatus? <span style={{color: "#3bb77e"}}>Delivered</span>: <span style={{color: "red"}}>On the way</span>}</p>
                                </div>
                                <div style={{width: "100%", overflowY: "auto"}}>
                                    <p className={previousOrdersLayoutStyle.previousOrdersContainerContent}><span style={{color: "grey", fontWeight: "bold"}}>ADDRESS:</span><br/>&nbsp;{item.address}</p>
                                    <p className={previousOrdersLayoutStyle.previousOrdersContainerContent}><span style={{color: "grey", fontWeight: "bold"}}>ORDER DATE:</span><br/>&nbsp;{item.date.slice(0,10)}</p>
                                    <p className={previousOrdersLayoutStyle.previousOrdersContainerContent}><span style={{color: "grey", fontWeight: "bold"}}>COUPON APPLIED:</span><br/>&nbsp;{item.coupon} &nbsp;{item.coupon == "No Coupon Applied"? "": `[₹${item.couponDiscount}]`}</p>
                                    <p className={previousOrdersLayoutStyle.previousOrdersContainerContent}><span style={{color: "grey", fontWeight: "bold"}}>TOTAL PRICE:</span><br/>&nbsp;₹{item.totalPrice}</p>
                                    <p style={{margin: "0"}} className={previousOrdersLayoutStyle.previousOrdersContainerContent}><span style={{color: "grey", fontWeight: "bold"}}>ITEMS:</span></p>
                                    {
                                        item.items.map((itemData, itemIndex) => {
                                            return (
                                                <p key={itemIndex} style={{margin: "0 0 0.15rem 0"}} className={previousOrdersLayoutStyle.previousOrdersContainerContent}>&nbsp;{itemData.name} [{itemData.quantity} x ₹{itemData.price}] &nbsp;&#8594;&nbsp; ₹{itemData.quantity* itemData.price}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default PreviousOrdersLayout;