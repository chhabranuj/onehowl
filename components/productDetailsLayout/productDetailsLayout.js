import { useRouter } from "next/router";
import { GiStaryu } from "react-icons/gi";
import { BiUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../store/reducers/productReducer";
import productDetailsLayoutStyle from "./productDetailsLayout.module.css";
import { addItem, cartSelector, removeItem } from "../store/reducers/cartReducer";

const ProductDetailsLayout = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const products = useSelector(productSelector);

    useEffect(() => {
        if(!props.productId) {
            router.push("/");
        }
        else {
            let tempId = props.productId;
            products.map(productData => {
                if(productData.category == props.categoryId) {
                    productData.items.map(productItem => {
                        if(productItem.id == tempId) {
                            setProduct(productItem);
                        }
                    })
                }
            })
            cart.map(item => {
                if(item.id == tempId) {
                    setQuantity(item.quantity);
                }
            })
        }
    })

    const handleAddItem = () => {
        quantity < 1?  dispatch(addItem({id: product.id, name: product.title, realPrice: product.realPrice, discount: product.discount, category: props.categoryId, quantity: 1})): dispatch(addItem({id: product.id}));
        setQuantity(quantity + 1);
    }

    const handleRemoveItem = () => {
        if(quantity > 0) {
            dispatch(removeItem({id: product.id}));
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className={productDetailsLayoutStyle.productDetailsParent}>
            <div className={productDetailsLayoutStyle.routeContainer}>
                <p className={productDetailsLayoutStyle.route}><span className={productDetailsLayoutStyle.from} onClick={() => router.push("/")}>Home &#8658;&nbsp;</span> <span style={{color: "#77a464"}}>Products &#8658;&nbsp;</span> {product.title}</p>
            </div>
            <div className={productDetailsLayoutStyle.productDetailsChild}>
                <div className={productDetailsLayoutStyle.productDetailsChildLeft}>
                    <img 
                        src={product.image}
                        alt="Product Image"
                        className={productDetailsLayoutStyle.productImage}
                    />
                    {product.info &&
                        <div className={productDetailsLayoutStyle.additionalDetails}>
                            {
                                Object.keys(product.info).map((item, index) => {
                                    return (
                                        item != "about" && <p className={productDetailsLayoutStyle.additionalDetailsChild} key={index}><span style={{color: "#3bb77e", fontWeight: "bold"}}>{item.charAt(0).toUpperCase() + item.slice(1)}</span> : {product.info[item]}</p>
                                    );
                                })
                            }
                        </div>
                    }
                </div>
                <div className={productDetailsLayoutStyle.productDetailsChildRight}>
                    <div className={productDetailsLayoutStyle.saleContainer}>
                        <p className={productDetailsLayoutStyle.saleTitle}>Sale!</p>
                    </div>
                    <div className={productDetailsLayoutStyle.titleTypeAndRatingContainer}>
                        <p className={productDetailsLayoutStyle.title}>{product.title}</p>
                        <div className={productDetailsLayoutStyle.typeAndRatingContainer}>
                            { product.isVeg? <p className={productDetailsLayoutStyle.type} style={{color: "#3bb77e"}}>Veg</p>: <p className={productDetailsLayoutStyle.type} style={{color: "#d98880"}}>NonVeg</p> }
                            <div className={productDetailsLayoutStyle.ratingContainer}>
                                <p className={productDetailsLayoutStyle.rating}>{product.rating}</p>
                                <GiStaryu style={{color: "#3bb77e"}} />
                            </div>
                        </div>
                    </div>
                    <div className={productDetailsLayoutStyle.priceContainer}>
                        <p className={productDetailsLayoutStyle.sellingPrice}>₹{Math.floor((100-product.discount)*product.realPrice*0.01)}</p>
                        <div className={productDetailsLayoutStyle.discountAndOriginalPriceContainer}>
                            <p className={productDetailsLayoutStyle.discount}>{product.discount}%</p>
                            <p className={productDetailsLayoutStyle.originalPrice}>₹{product.realPrice}</p>
                        </div>
                    </div>
                    {product.info && <p className={productDetailsLayoutStyle.description}>{product.info.about}</p>}
                    {
                        product.info &&
                            <div className={productDetailsLayoutStyle.additionalDetailsMobile}>
                            {
                                Object.keys(product.info).map((item, index) => {
                                    return (
                                        item != "about" && <p className={productDetailsLayoutStyle.additionalDetailsChild} key={index}><span style={{color: "#3bb77e", fontWeight: "bold"}}>{item.charAt(0).toUpperCase() + item.slice(1)}</span> : {product.info[item]}</p>
                                    );
                                })
                            }
                        </div>
                    }
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