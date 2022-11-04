import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineCelebration } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { cartSelector } from "../store/reducers/cartReducer";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import { productSelector } from "../store/reducers/productReducer";

const TitleBarLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const productData = useSelector(productSelector);
    const [menuToggle, setMenuToggle] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const extraServices = ["Home", "About", "Deals", "Orders", "Privacy Policy", "Contact"];

    useEffect(() => {
        let tempTotalQuantity = 0;
        cart.map(item => {
            tempTotalQuantity = tempTotalQuantity + item.quantity;
        })
        setTotalQuantity(tempTotalQuantity);
    })

    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <div className={titleBarLayoutStyle.titleBarParent}>
            <div className={titleBarLayoutStyle.titleBarFixedContainer}>
                <div className={titleBarLayoutStyle.titleBarQuotesContainer}>
                    <p className={titleBarLayoutStyle.titleBarQuotes}>A fresh kind of fast food for a new generation.</p>
                </div>
                <div className={titleBarLayoutStyle.titleBarContainer}>
                    <p className={titleBarLayoutStyle.title}>oneHowl</p>
                    <div className={titleBarLayoutStyle.categoriesContainer}>
                        <ButtonLayout buttonText="Browse All Categories" buttonWidth="auto" buttonPadding="10px 20px" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" leftButtonIcon={<BiCategoryAlt />} handleButtonClick={handleMenuToggle} />
                        {
                            menuToggle &&
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
                        }   
                    </div>
                    <div className={titleBarLayoutStyle.servicesContainer}>
                        <div className={titleBarLayoutStyle.services}>
                            <MdOutlineCelebration className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle}>Offers</p>
                        </div>
                        <div className={titleBarLayoutStyle.services}>
                            <IoMdHelpCircleOutline className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle}>Help</p>
                        </div>
                        <div className={titleBarLayoutStyle.services}>
                            <AiOutlineShoppingCart className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle} onClick={() => router.push("/cart")}>Cart</p>
                            {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
                        </div>
                        <div className={titleBarLayoutStyle.services}>
                            <AiOutlineUser className={titleBarLayoutStyle.serviceIcon} />&nbsp;
                            <p className={titleBarLayoutStyle.serviceTitle} onClick={() => router.push("/login")}>Account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={titleBarLayoutStyle.searchAndExtraServicesContainer}>
                    
                    <div className={titleBarLayoutStyle.searchInputContainer}>
                        <input placeholder="Search for products..." className={titleBarLayoutStyle.searchInput} />
                        <button className={titleBarLayoutStyle.searchButton}>Search</button>
                    </div>
                    {/* For Big Screens */}
                    <div className={titleBarLayoutStyle.extraServicesContainerBigScreen}>
                        {
                            extraServices.map((item, index) => {
                                return (
                                    <p className={titleBarLayoutStyle.extraServiceTitle} style={{borderBottom: "1px solid #888"}}key={index}>{item}</p>
                                );
                            })
                        }
                    </div>
                    {/* For Small Screens */}
                    <div className={titleBarLayoutStyle.extraServicesContainerSmallScreen}>
                        {
                            extraServices.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {index != extraServices.length-1?<p className={titleBarLayoutStyle.extraServiceTitle}>{item} -&nbsp;</p>:<p className={titleBarLayoutStyle.extraServiceTitle}>{item}</p>}
                                    </div>
                                );
                            })
                        }
                    </div>
            </div>
        </div>
    );
}

export default TitleBarLayout;




// const router = useRouter();
//     const cart = useSelector(cartSelector);
//     const [totalQuantity, setTotalQuantity] = useState(0);
//     const [emptyCartError, setEmptyCartError] = useState(false);

//     useEffect(() => {
//         let tempTotalQuantity = 0;
//         cart.map(item => {
//             tempTotalQuantity = tempTotalQuantity + item.quantity;
//         })
//         setTotalQuantity(tempTotalQuantity)
//     })

//     const navigateToLanding = () => {
//         router.push("/");
//     }

//     const handleCartNavigation = () => {
//         if(totalQuantity) {
//             router.push("/cart");
//         }
//         else {
//             setEmptyCartError(true);
//             setTimeout(() => {
//                 setEmptyCartError(false);
//             }, 3000);
//         }
//     }

    // const handleProfile = () => {
    //     router.push("/login");
    // }


// return (
    //     <div className={titleBarLayoutStyle.titleBarParent} style={{boxShadow: `${props.boxShadow}`}}>
    //         {/* For big screens */}
    //         <div className={titleBarLayoutStyle.bigScreenContainer}>
    //             <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
    //             <div className={titleBarLayoutStyle.titleBarMenuParent}>
    //                 <div className={titleBarLayoutStyle.brandsParent}>
    //                     <p className={titleBarLayoutStyle.titleBarMenuContent}>Brands</p>
    //                     <div className={titleBarLayoutStyle.brandsToggle}>
    //                         <TitleBarMenuLayout menu={props.brandsData} />
    //                     </div>
    //                 </div>
    //                 <p className={titleBarLayoutStyle.titleBarMenuContent}>Offers</p>
    //                 <div className={titleBarLayoutStyle.cartContainer} onClick={handleCartNavigation}>
    //                     <p className={titleBarLayoutStyle.titleBarMenuContent} style={{margin: "0"}}>Cart</p>
    //                     {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
    //                 </div>
    //                 <div>
    //                     <p className={titleBarLayoutStyle.titleBarMenuContent} onClick={handleProfile}>Profile</p>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* For small screens */}
    //         <div className={titleBarLayoutStyle.smallScreenParent}>
    //             <div className={titleBarLayoutStyle.smallScreenContainer}>
    //                 <IoMdHelpCircle className={titleBarLayoutStyle.menuIcons} />
    //                 <div className={titleBarLayoutStyle.brandsParent}>  
    //                     <GiHamburger className={titleBarLayoutStyle.menuIcons} />
    //                     <div className={titleBarLayoutStyle.brandsToggle}>
    //                         <TitleBarMenuLayout menu={props.brandsData} />
    //                     </div>
    //                 </div>
    //             </div>
    //             <p className={titleBarLayoutStyle.title} onClick={navigateToLanding}><span className={titleBarLayoutStyle.titlePartOne}>one</span><span className={titleBarLayoutStyle.titlePartTwo}>Howl</span></p>
    //             <div className={titleBarLayoutStyle.smallScreenContainer}>
    //                 <div className={titleBarLayoutStyle.cartContainer} style={{margin: "0 10px"}}>  
    //                     <BsFillCartFill className={titleBarLayoutStyle.menuIcons} style={{margin: "0"}} onClick={handleCartNavigation} />
    //                     {totalQuantity > 0 && <p className={titleBarLayoutStyle.cartQuantity}>{totalQuantity}</p>}
    //                 </div>
    //                 <FaUserAlt className={titleBarLayoutStyle.menuIcons}  onClick={handleProfile} />
    //             </div>
    //         </div>
    //         {/* For Empty Cart Error */}
    //         {
    //             emptyCartError &&
    //             <div className={titleBarLayoutStyle.emptyCartErrorContainer}>
    //                 <p className={titleBarLayoutStyle.emptyCartErrorTitle}>Please add some items in cart.</p>
    //             </div>
    //         }
    //     </div>
    // );