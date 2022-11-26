import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { GoPackage } from "react-icons/go";
import { useEffect, useState } from "react";
import { GiWolfHowl } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoaderLayout from "../loaderLayout/loaderLayout";
import { cartSelector } from "../store/reducers/cartReducer";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import { productSelector } from "../store/reducers/productReducer";

const TitleBarLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const productData = useSelector(productSelector);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [showHelpLoader, setShowHelpLoader] = useState(false);
    const [showCartLoader, setShowCartLoader] = useState(false);
    const [tagline, setTagline] = useState("");
    const [showPreviousOrdersLoader, setShowPreviousOrdersLoader] = useState(false);
    const foodSlogans = [
        "Good food within minutes.",
        "The food of your choice.",
        "Filling your tummy is what we care about.",
        "We crossed the line of taste.",
        "Made with love, savored with interest.",
        "Wise food for wise people.",
        "It’s fast, delicious, and fresh too.",
        "Giving your hunger a brand new taste.",
        "Get the best foods from the best chefs.",
        "We care for your precious order."
    ];

    useEffect(() => {
        let tempTotalQuantity = 0;
        cart.map(item => {
            tempTotalQuantity = tempTotalQuantity + item.quantity;
        })
        setTotalQuantity(tempTotalQuantity);
        setTagline(foodSlogans[Math.floor(Math.random() * 10)])
    })

    return (
        <div className={titleBarLayoutStyle.titleBarParent}>
            <div className={titleBarLayoutStyle.titleBarFixedContainer}>
                <div className={titleBarLayoutStyle.titleBarQuotesContainer} onClick={() => signOut()}>
                    <p className={titleBarLayoutStyle.titleBarQuotes}>{tagline}</p>
                </div>
                <div className={titleBarLayoutStyle.titleBarContainer}>
                    <div className={titleBarLayoutStyle.titleAndIconContainer}>
                        <p className={titleBarLayoutStyle.title} onClick={() => router.push("/")}>oneHowl</p>
                        <GiWolfHowl className={titleBarLayoutStyle.titleIcon} />
                    </div>
                    <div className={titleBarLayoutStyle.categoriesContainer}>
                        <div className={titleBarLayoutStyle.menuButton}>
                            <ButtonLayout buttonText="Browse All Categories" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<BiCategoryAlt />} />
                        </div>
                        <div className={titleBarLayoutStyle.categoriesMenu}>
                        {
                            productData.map((item, index) => {
                                return(
                                    <div className={titleBarLayoutStyle.categoriesMenuContent} key={index}>
                                        <p className={titleBarLayoutStyle.categoriesMenuContentTitle}>{item.category}</p>
                                        <p className={titleBarLayoutStyle.categoriesMenuContentQuantity}>{item['items'].length}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    </div>
                    <div className={titleBarLayoutStyle.servicesContainer}>
                        <div className={titleBarLayoutStyle.services} onClick={() => {setShowPreviousOrdersLoader(true); router.push("/previousOrders")}}>
                            <GoPackage className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle}>Orders</p>
                        </div>
                        <div className={titleBarLayoutStyle.services} onClick={() => {setShowHelpLoader(true); router.push("/help")}}>
                            <IoMdHelpCircleOutline className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle}>Help</p>
                        </div>
                        <div className={titleBarLayoutStyle.services}>
                            <AiOutlineShoppingCart className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle} onClick={() => {setShowCartLoader(true); router.push("/cart")}}>Cart</p>
                            {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
                        </div>
                        <div className={titleBarLayoutStyle.services}>
                            <AiOutlineUser className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle} onClick={() => {router.push("/login");}}>Account</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* LOADER */}
            {showCartLoader && <LoaderLayout title="Please wait. Your cart is getting ready." />}
            {showPreviousOrdersLoader && <LoaderLayout title="Please wait. Getting your orders." />}
            {showHelpLoader && <LoaderLayout title="Please wait. Getting ready to help you." />}
        </div>
    );
}

export default TitleBarLayout;