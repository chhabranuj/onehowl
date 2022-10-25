import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineCelebration } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import titleBarLayoutStyle from "./titleBarLayout.module.css";
import { cartSelector } from "../store/reducers/cartReducer";
import { GiHamburger, GiFullPizza, GiSandwich, GiDrinkMe } from "react-icons/gi";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";

const TitleBarLayout = (props) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const extraServices = ["Home", "About", "Deals", "Orders", "Privacy Policy", "Contact"];
    const services = [
        {
            title: "Offers",
            icon: <MdOutlineCelebration className={titleBarLayoutStyle.serviceIcon} />
        },
        {
            title: "Help",
            icon: <IoMdHelpCircleOutline className={titleBarLayoutStyle.serviceIcon} />
        },
        {
            title: "Cart",
            icon: <AiOutlineShoppingCart className={titleBarLayoutStyle.serviceIcon}/>
        },
        {
            title: "Account",
            icon: <AiOutlineUser className={titleBarLayoutStyle.serviceIcon} />
        }
    ];
    const categories = [
        {
            icon: <GiHamburger style={{color: "#3bb77e"}} />,
            title: "Burgers",
            types: "15"
        },
        {
            icon: <GiFullPizza style={{color: "#3bb77e"}} />,
            title: "Pizzas",
            types: "13"
        },
        {
            icon: <GiSandwich style={{color: "#3bb77e"}} />,
            title: "Sandwiches",
            types: "18"
        },
        {
            icon: <GiDrinkMe style={{color: "#3bb77e"}} />,
            title: "Drinks",
            types: "16"
        }
    ];

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
                                    categories.map((item, index) => {
                                        return(
                                            <div className={titleBarLayoutStyle.categoriesMenuContent} key={index}>
                                                {item.icon}
                                                <p style={{margin: "0.6rem 0"}}>{item.title}</p>
                                                <p className={titleBarLayoutStyle.categoriesMenuContentQuantity}>{item.types}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        }   
                    </div>
                    <div className={titleBarLayoutStyle.servicesContainer}>
                        {
                            services.map((item, index) => {
                                return (
                                    <div className={titleBarLayoutStyle.services} key={index}>
                                        {item.icon}&nbsp;
                                        <p className={titleBarLayoutStyle.serviceTitle}>{item.title}</p>
                                    </div>
                                );
                            })
                        }
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