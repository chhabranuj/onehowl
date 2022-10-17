import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import {  useEffect, useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import { cartSelector } from "../../store/reducers/cartReducer";
import TitleBarMenuLayout from "../titleBarMenuLayout/titleBarMenuLayout";

const TitleBarLayout = (props) => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [emptyCartError, setEmptyCartError] = useState(false);

    useEffect(() => {
        let tempTotalQuantity = 0;
        cart.map(item => {
            tempTotalQuantity = tempTotalQuantity + item.quantity;
        })
        setTotalQuantity(tempTotalQuantity)
    })

    const navigateToLanding = () => {
        router.push("/");
    }

    const handleCartNavigation = () => {
        if(totalQuantity) {
            router.push("/cart");
        }
        else {
            setEmptyCartError(true);
            setTimeout(() => {
                setEmptyCartError(false);
            }, 3000);
        }
    }

    const handleProfile = () => {
        router.push("/login");
    }

    return (
        <div className={titleBarLayoutStyle.titleBarParent} style={{boxShadow: `${props.boxShadow}`}}>
            {/* For big screens */}
            <div className={titleBarLayoutStyle.bigScreenContainer}>
                <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div className={titleBarLayoutStyle.titleBarMenuParent}>
                    <div className={titleBarLayoutStyle.brandsParent}>
                        <p className={titleBarLayoutStyle.titleBarMenuContent}>Brands</p>
                        <div className={titleBarLayoutStyle.brandsToggle}>
                            <TitleBarMenuLayout menu={props.brandsData} />
                        </div>
                    </div>
                    <p className={titleBarLayoutStyle.titleBarMenuContent}>Offers</p>
                    <div className={titleBarLayoutStyle.cartContainer} onClick={handleCartNavigation}>
                        <p className={titleBarLayoutStyle.titleBarMenuContent} style={{margin: "0"}}>Cart</p>
                        {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
                    </div>
                    <div>
                        <p className={titleBarLayoutStyle.titleBarMenuContent} onClick={handleProfile}>Profile</p>
                    </div>
                </div>
            </div>
            {/* For small screens */}
            <div className={titleBarLayoutStyle.smallScreenParent}>
                <div className={titleBarLayoutStyle.smallScreenContainer}>
                    <IoMdHelpCircle className={titleBarLayoutStyle.menuIcons} />
                    <div className={titleBarLayoutStyle.brandsParent}>  
                        <GiHamburger className={titleBarLayoutStyle.menuIcons} />
                        <div className={titleBarLayoutStyle.brandsToggle}>
                            <TitleBarMenuLayout menu={props.brandsData} />
                        </div>
                    </div>
                </div>
                <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
                <div className={titleBarLayoutStyle.smallScreenContainer}>
                    <div className={titleBarLayoutStyle.cartContainer} style={{margin: "0 10px"}}>  
                        <BsFillCartFill className={titleBarLayoutStyle.menuIcons} style={{margin: "0"}} onClick={handleCartNavigation} />
                        {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
                    </div>
                    <FaUserAlt className={titleBarLayoutStyle.menuIcons}  onClick={handleProfile} />
                </div>
            </div>
            {/* For Empty Cart Error */}
            {
                emptyCartError &&
                <div className={titleBarLayoutStyle.emptyCartErrorContainer}>
                    <p className={titleBarLayoutStyle.emptyCartErrorTitle}>Please add some items in cart.</p>
                </div>
            }
        </div>
    );
}

export default TitleBarLayout;