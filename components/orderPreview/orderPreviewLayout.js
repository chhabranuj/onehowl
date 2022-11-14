import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartSelector } from "../store/reducers/cartReducer";
import orderPreviewLayoutStyle from "./orderPreviewlayout.module.css";

const OrderPreview = () => {
    const cart = useSelector(cartSelector);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let tempTotalPrice = 0;
        cart.map(item => {
            tempTotalPrice = tempTotalPrice + (Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity);
        })
        setTotalPrice(tempTotalPrice);
    })

    return (
        <div className={orderPreviewLayoutStyle.container}>
            <p className={orderPreviewLayoutStyle.title}>Your Order</p>
            <table className={orderPreviewLayoutStyle.productTable} cellSpacing="0">
                <thead>
                    <tr>
                        <th style={{borderRadius: "1rem 0 0 1rem", width: "80%"}} className={orderPreviewLayoutStyle.tableTitle}>Product</th>
                        <th style={{borderRadius: " 0 1rem 1rem 0", width: "20%"}} className={orderPreviewLayoutStyle.tableTitle}>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cart.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{color: "#3bb77e", fontWeight: "bold"}} className={orderPreviewLayoutStyle.tableContent}>{item.name}<br /><span style={{fontSize: "small", color: "grey"}}>X {item.quantity}</span></td>
                                        <td className={orderPreviewLayoutStyle.tableContent}>₹{Math.floor(item.realPrice * (100 - item.discount) * 0.01) * item.quantity}</td>
                                    </tr>
                                );
                            })
                        }
                        <tr>
                            <td className={orderPreviewLayoutStyle.totalTitle}>Total</td>
                            <td style={{color: "grey", fontWeight: "500"}} className={orderPreviewLayoutStyle.totalTitle}>₹{totalPrice}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderPreview;