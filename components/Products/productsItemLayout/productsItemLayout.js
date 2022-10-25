import { GiStaryu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ButtonLayout from "../../Attributes/buttonLayout/buttonLayout";
import productsItemLayoutStyle from "./productsItemLayout.module.css";

const ProductsItemLayout = (props) => {

    const navigateTo = () => {

    }

    return (
        <div className={productsItemLayoutStyle.itemParent}>
            <img 
                src={props.data.image}
                alt="Brand Image"
                className={productsItemLayoutStyle.itemImage}
            />
            <div className={productsItemLayoutStyle.itemInfo}>
                <div className={productsItemLayoutStyle.titleAndRatingContainer}>
                    <p className={productsItemLayoutStyle.itemTitle}>{props.data.title}</p>
                    {
                        props.data.isVeg?
                            <div className={productsItemLayoutStyle.typeAndRatingContainer} style={{backgroundColor: "#def9ec"}}>
                                <p className={productsItemLayoutStyle.itemType} style={{color: "#3bb77e"}}>Veg</p>
                                <div className={productsItemLayoutStyle.ratingContainer}>
                                    <p className={productsItemLayoutStyle.rating} style={{color: "#3bb77e"}}>{props.data.rating}</p>
                                    <GiStaryu  style={{color: "#3bb77e", fontSize: "small"}} />
                                </div>
                            </div>:
                            <div className={productsItemLayoutStyle.typeAndRatingContainer} style={{backgroundColor: "#f9ebea"}}>
                                <p className={productsItemLayoutStyle.itemType} style={{color: "#d98880"}}>NonVeg</p>
                                <div className={productsItemLayoutStyle.ratingContainer}>
                                    <p className={productsItemLayoutStyle.rating} style={{color: "#d98880"}}>{props.data.rating}</p>
                                    <GiStaryu  style={{color: "#d98880", fontSize: "small"}} />
                                </div>
                            </div>
                    }
                </div>
                <div className={productsItemLayoutStyle.priceAndAddContainer}>
                    <div>
                        <p className={productsItemLayoutStyle.price}>Now At ₹{Math.floor((100-props.data.discount)*props.data.realPrice*0.01)}</p>
                        <p className={productsItemLayoutStyle.discount}><span style={{textDecoration: "line-through"}}>₹{props.data.realPrice}</span> ({props.data.discount}% Off)</p>
                    </div>
                    <ButtonLayout buttonText="Add" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<AiOutlineShoppingCart style={{maginRight: "5px"}} />} handleButtonClick={navigateTo} />
                </div>
            </div>
        </div>
    );
}

export default ProductsItemLayout;

{/* <div className={productsItemLayoutStyle.titleAndRatingContainer}>
                    <div>
                        <p className={productsItemLayoutStyle.itemTitle}>{props.data.title}</p>
                        {props.data.isVeg? <p className={productsItemLayoutStyle.itemType}>Veg<span className={productsItemLayoutStyle.itemTypeIcon} style={{backgroundColor: "green"}}></span></p>: <p className={productsItemLayoutStyle.itemType}>NonVeg<span className={productsItemLayoutStyle.itemTypeIcon} style={{backgroundColor: "darkred"}}></span></p>}
                    </div>
                    <div className={productsItemLayoutStyle.ratingContainer}>
                        <p className={productsItemLayoutStyle.rating}>{props.data.rating}</p>
                        <GiStaryu  style={{color: "#FDC040", fontSize: "small"}}/>
                    </div>
                </div> */}