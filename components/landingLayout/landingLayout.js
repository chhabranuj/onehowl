import axios from "axios";
import { useEffect, useState } from "react";
import {useSession } from "next-auth/react";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import LoaderLayout from "../loaderLayout/loaderLayout";
import landingLayoutStyle from "./landingLayout.module.css";
import { productSelector } from "../store/reducers/productReducer";
import { addItem, cartSelector } from "../store/reducers/cartReducer";
import { addUser, userSelector } from "../store/reducers/userReducer";

const LandingLayout = () => {
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const user = useSelector(userSelector);
    const cart = useSelector(cartSelector);
    const [bottom, setBottom] = useState("5%");
    const products = useSelector(productSelector);
    const [showHomeLoader, setShowHomeLoader] = useState(false);
    const landingImages = [
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing1.png",
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing2.png",
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing3.png",
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing4.png",
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing5.png",
        "https://onehowl-bucket.s3.ap-south-1.amazonaws.com/others/landingImages/landing6.png"
    ];

    useEffect(() => {
        if(session && !user.firstName) {
            setShowHomeLoader(true);
            const body = { data: session.user.email }
            axios.post("/api/getUserData", body)
            .then((response) => {
                dispatch(addUser({data: response.data.result.info}));
                response.data.result.cart.map(cartItem => {
                    products.map(productData => {
                        if(productData.category == cartItem.category) {
                            productData.items.map(productItem => {
                                if(productItem.id == cartItem.id) {
                                    dispatch(addItem({id: productItem.id, name: productItem.title, realPrice: productItem.realPrice, discount: productItem.discount, category: productData.categoryId, quantity: cartItem.quantity}));
                                }
                            })
                        }
                    })
                })
                setShowHomeLoader(false);
            })
        }
        cart.length? setBottom("13%"): setBottom("5%");
    })

    return (
        <div  className={landingLayoutStyle.landingParentContainer}>
            <div className={landingLayoutStyle.imagesContainer}>
                {
                    landingImages.map((item, index) => <img key={index} src={item} className={landingLayoutStyle.images} />)
                }
            </div>
            <div className={landingLayoutStyle.chatWithUsConatiner} style={{bottom: bottom}}onClick={() => {window.open("https://wa.me/7217746275", "_blank");}}>
                <FaWhatsapp />
                <p className={landingLayoutStyle.chatWithUsTitle}>CHAT WITH US</p>
            </div>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default LandingLayout;