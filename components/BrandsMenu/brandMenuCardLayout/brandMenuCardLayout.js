import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import brandMenuCardLayoutStyle from "./brandMenuCardLayout.module.css";

const BrandMenuCardLayout = (props) => {
    const [quantity, setQuantity] = useState(0);
    const [cartData, setCartData] = useState([]);
    const bgColor = ["#F2D7D5", "#FADBD8", "#EBDEF0", "#E8DAEF", "#E8DAEF", "#D4E6F1", "#D6EAF8", "#D1F2EB", "#D0ECE7", "#D4EFDF", "#D5F5E3", "#FCF3CF", "#FDEBD0", "#FAE5D3", "#F6DDCC"];

    const randomBg = () => {
        return bgColor[Math.floor((Math.random() * 15) + 0)]
    }

    const handleAddRemoveItem = () => {
        setQuantity(1);
    }

    const handleAddItem = () => {
        setQuantity(++quantity);
    }

    const handleRemoveItem = () => {
        setQuantity(--quantity);
    }

    return (
        <div className={brandMenuCardLayoutStyle.brandMenuCardParent}>
            <div className={brandMenuCardLayoutStyle.leftContainer}>
                    <Image 
                        src={`/static${props.data.image}`}
                        alt="Item Image"
                        width={125}
                        height={125}
                        layout="fixed"
                        className={brandMenuCardLayoutStyle.itemImage}
                    />
            </div>
            <div className={brandMenuCardLayoutStyle.rigthContainer} style={{backgroundColor: randomBg()}}>
                <div className={brandMenuCardLayoutStyle.titleAndStarsContainer}>
                    <div className={brandMenuCardLayoutStyle.titleAndTypeContainer}>
                        <p className={brandMenuCardLayoutStyle.itemTitle}>{props.data.title}</p>
                        {props.data.isVeg? <span className={brandMenuCardLayoutStyle.itemType} style={{backgroundColor: "green"}}></span>:<span className={brandMenuCardLayoutStyle.itemType} style={{backgroundColor: "darkred"}}></span>}
                    </div>
                    <div className={brandMenuCardLayoutStyle.starsContainer}>
                        <p className={brandMenuCardLayoutStyle.rating}>{props.data.rating}</p>
                        <AiFillStar />
                    </div>
                </div>
                {
                    props.type != "drinks"?
                        <div className={brandMenuCardLayoutStyle.ingredients}>
                            <p className={brandMenuCardLayoutStyle.itemTitle} style={{fontSize: "small"}}>Ingriedients: <span style={{fontWeight: "normal"}}>{props.data.ingredients}</span></p>
                        </div>:
                        <></>
                }
                <div className={brandMenuCardLayoutStyle.addToCartAndPriceContainer}>
                    <div className={brandMenuCardLayoutStyle.priceContainer}>
                        <p className={brandMenuCardLayoutStyle.price}>Now at ₹{Math.round((100-props.data.discount)*props.data.realPrice*0.01)}</p>
                        <p className={brandMenuCardLayoutStyle.originalPrice}><span style={{textDecoration: "line-through"}}>₹{props.data.realPrice}</span>&nbsp;({props.data.discount}% Off)</p>
                    </div>
                    {
                        quantity==0?
                            <button className={brandMenuCardLayoutStyle.addToCartButton} onClick={handleAddRemoveItem}>
                                <AiOutlineShoppingCart style={{fontSize: "medium"}}/>
                                &nbsp;&nbsp;ADD TO CART
                            </button>:
                            <div className={brandMenuCardLayoutStyle.addRemoveConatiner}>
                                <IoMdRemoveCircle style={{fontSize: "xx-large", color: "rgb(255,111,111)"}} onClick={handleRemoveItem} />
                                <p className={brandMenuCardLayoutStyle.quantity}>{quantity}</p>
                                <IoMdAddCircle style={{fontSize: "xx-large", color: "rgb(255,111,111)"}} onClick={handleAddItem} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default BrandMenuCardLayout;