import { useRouter } from "next/router";
import { GiStaryu } from "react-icons/gi";
import { BiUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import productDetailsLayoutStyle from "./productDetailsLayout.module.css";
import { addItem, cartSelector, removeItem } from "../store/reducers/cartReducer";

const ProductDetailsLayout = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [data, setData] =  useState("");
    const cart = useSelector(cartSelector);
    const [quantity, setQuantity] = useState(1);
    const [additionalInfo, setAdditionalInfo] = useState({});

    useEffect(() => {
        if(!props.data) {
            router.push("/");
        }
        else {
            let productInCart = false;
            let tempData = JSON.parse(props.data);
            setData(tempData);
            setAdditionalInfo(tempData.info)
            cart.map(item => {
                if(item.id == tempData.id) {
                    setQuantity(item.quantity);
                    productInCart = true;
                }
            })
            if(!productInCart)  {
                router.push("/")
            }
        }
    }, [])

    const handleAddItem = () => {
        dispatch(addItem({id: data.id}));
        setQuantity(quantity + 1);
    }

    const handleRemoveItem = () => {
        if(quantity > 1) {
            dispatch(removeItem({id: data.id}));
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className={productDetailsLayoutStyle.productDetailsParent}>
            <div className={productDetailsLayoutStyle.routeContainer}>
                <p className={productDetailsLayoutStyle.route}><span className={productDetailsLayoutStyle.from} onClick={() => router.push("/")}>Home &#8658;&nbsp;</span> <span style={{color: "#77a464"}}>Products &#8658;&nbsp;</span> {data.title}</p>
            </div>
            <div className={productDetailsLayoutStyle.productDetailsChild}>
                <div className={productDetailsLayoutStyle.productDetailsChildLeft}>
                    <img 
                        src={data.image}
                        alt="Product Image"
                        className={productDetailsLayoutStyle.productImage}
                    />
                    <div className={productDetailsLayoutStyle.additionalDetails}>
                        {
                            Object.keys(additionalInfo).map((item, index) => {
                                return (
                                    item != "about" && <p className={productDetailsLayoutStyle.additionalDetailsChild} key={index}><span style={{color: "#3bb77e", fontWeight: "bold"}}>{item.charAt(0).toUpperCase() + item.slice(1)}</span> : {additionalInfo[item]}</p>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={productDetailsLayoutStyle.productDetailsChildRight}>
                    <div className={productDetailsLayoutStyle.saleContainer}>
                        <p className={productDetailsLayoutStyle.saleTitle}>Sale!</p>
                    </div>
                    <div className={productDetailsLayoutStyle.titleTypeAndRatingContainer}>
                        <p className={productDetailsLayoutStyle.title}>{data.title}</p>
                        <div className={productDetailsLayoutStyle.typeAndRatingContainer}>
                            { data.isVeg? <p className={productDetailsLayoutStyle.type} style={{color: "#3bb77e"}}>Veg</p>: <p className={productDetailsLayoutStyle.type} style={{color: "#d98880"}}>NonVeg</p> }
                            <div className={productDetailsLayoutStyle.ratingContainer}>
                                <p className={productDetailsLayoutStyle.rating}>{data.rating}</p>
                                <GiStaryu style={{color: "#3bb77e"}} />
                            </div>
                        </div>
                    </div>
                    <div className={productDetailsLayoutStyle.priceContainer}>
                        <p className={productDetailsLayoutStyle.sellingPrice}>₹{Math.floor((100-data.discount)*data.realPrice*0.01)}</p>
                        <div className={productDetailsLayoutStyle.discountAndOriginalPriceContainer}>
                            <p className={productDetailsLayoutStyle.discount}>{data.discount}%</p>
                            <p className={productDetailsLayoutStyle.originalPrice}>₹{data.realPrice}</p>
                        </div>
                    </div>
                    <p className={productDetailsLayoutStyle.description}>{additionalInfo.about}</p>
                    <div className={productDetailsLayoutStyle.additionalDetailsMobile}>
                        {
                            Object.keys(additionalInfo).map((item, index) => {
                                return (
                                    item != "about" && <p className={productDetailsLayoutStyle.additionalDetailsChild} key={index}><span style={{color: "#3bb77e", fontWeight: "bold"}}>{item.charAt(0).toUpperCase() + item.slice(1)}</span> : {additionalInfo[item]}</p>
                                );
                            })
                        }
                    </div>
                    <div className={productDetailsLayoutStyle.quantityContainer}>
                        <p className={productDetailsLayoutStyle.quantity}>{quantity}</p>
                        <div className={productDetailsLayoutStyle.addOrDelete}>
                            <BiUpArrow style={{color: "green", cursor: "pointer"}} onClick={handleAddItem} />
                            <BiDownArrow style={{color: "darkred", cursor: "pointer"}} onClick={handleRemoveItem} />
                        </div>
                    </div>
                </div>
            </div>
            <p className={productDetailsLayoutStyle.otherProductsTitle}>Other Products</p>
        </div>
    );
}

export default ProductDetailsLayout;