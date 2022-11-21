import { useRouter } from "next/router";
import { GiStaryu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonLayout from "../../Attributes/buttonLayout/buttonLayout";
import categoriesItemLayoutStyle from "./categoriesItemLayout.module.css";
import { addItem, deleteItem, cartSelector } from "../../store/reducers/cartReducer";

const CategoriesItemLayout = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector);
    const [productId, setProductId] = useState("");
    const [addDeleteButton, setAddDeleteButton] = useState({
        title: "Add",
        bgColor: "#3BB77E"
    });

    useEffect(() => {
        setProductId(props.data.id);
        cart.map(item => {
            if(item.id == props.data.id) {
                setAddDeleteButton({
                    title: "Remove",
                    bgColor: "#E74C3C"
                });
            }
        })
    }, [])

    const navigateToProductDetails = () => {
        cart.map(item => {
            if(item.id == productId) {
                router.push({
                    pathname: "/productDetails",
                    query: { 
                        productData: JSON.stringify(props.data),
                        categoryId: props.categoryId
                    }
                }, "/productDetails")
            }
        })
    }

    const addToCart = () => {
        let productInCart = false;
        cart.map(item => {
            if(item.id == productId) {
                productInCart = true;
            }
        })
        if(!productInCart) {
            dispatch(addItem({id: productId, name: props.data.title, image: props.data.image, realPrice: props.data.realPrice, discount: props.data.discount, quantity: 1}));
            setAddDeleteButton({
                title: "Remove",
                bgColor: "#E74C3C"
            });
        }
        else {
            dispatch(deleteItem({id: productId}));
            setAddDeleteButton({
                title: "Add",
                bgColor: "#3bb77e"
            });
        }
    }

    return (
        <div className={categoriesItemLayoutStyle.itemParent}>
            <img 
                src={props.data.image}
                alt="Product Image"
                className={categoriesItemLayoutStyle.itemImage}
            />
            <div className={categoriesItemLayoutStyle.itemInfo}>
                <div className={categoriesItemLayoutStyle.titleAndRatingContainer}>
                    <p className={categoriesItemLayoutStyle.itemTitle} onClick={navigateToProductDetails}>{props.data.title}</p>
                    {
                        props.data.isVeg?
                            <div className={categoriesItemLayoutStyle.typeAndRatingContainer} style={{backgroundColor: "#def9ec"}}>
                                <p className={categoriesItemLayoutStyle.itemType} style={{color: "#3bb77e"}}>Veg</p>
                                <div className={categoriesItemLayoutStyle.ratingContainer}>
                                    <p className={categoriesItemLayoutStyle.rating} style={{color: "#3bb77e"}}>{props.data.rating}</p>
                                    <GiStaryu  style={{color: "#3bb77e", fontSize: "small"}} />
                                </div>
                            </div>:
                            <div className={categoriesItemLayoutStyle.typeAndRatingContainer} style={{backgroundColor: "#f9ebea"}}>
                                <p className={categoriesItemLayoutStyle.itemType} style={{color: "#d98880"}}>NonVeg</p>
                                <div className={categoriesItemLayoutStyle.ratingContainer}>
                                    <p className={categoriesItemLayoutStyle.rating} style={{color: "#d98880"}}>{props.data.rating}</p>
                                    <GiStaryu  style={{color: "#d98880", fontSize: "small"}} />
                                </div>
                            </div>
                    }
                </div>
                <div className={categoriesItemLayoutStyle.priceAndAddContainer}>
                    <div>
                        <p className={categoriesItemLayoutStyle.price}>Now At ₹{Math.floor((100-props.data.discount)*props.data.realPrice*0.01)}</p>
                        <p className={categoriesItemLayoutStyle.discount}><span style={{textDecoration: "line-through"}}>₹{props.data.realPrice}</span> ({props.data.discount}% Off)</p>
                    </div>
                    <ButtonLayout buttonText={addDeleteButton.title} buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor={addDeleteButton.bgColor} buttonBgHoverColor="#FDC040" leftButtonIcon={<AiOutlineShoppingCart style={{maginRight: "5px"}} />} handleButtonClick={addToCart} />
                </div>
            </div>
        </div>
    );
}

export default CategoriesItemLayout;