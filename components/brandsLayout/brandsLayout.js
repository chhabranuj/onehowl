import { useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import brandsLayoutStyle from "./brandsLayout.module.css";
import BrandsCardLayout from "../brandsCardLayout/brandCardLayout";

const BrandsLayout = (props) => {
    
    // useEffect(() => {
    //     setInterval(() => {
    //        document.getElementById("cardsContainer").scrollBy({
    //         left: 420,
    //         behavior: 'smooth'
    //        });
    //     }, 5000);
    // }, [])

    // const handleBackButton = () => { onClick={handleBackButton} 
    //     document.getElementById("cardsContainer").scrollBy({
    //         left: -420,
    //         behavior: 'smooth'
    //     });
    // }

    // const handleForwardButton = () => { onClick={handleForwardButton}
    //     document.getElementById("cardsContainer").scrollBy({
    //         left: 420,
    //         behavior: 'smooth'
    //     });
    // }

    return (
        <div className={brandsLayoutStyle.brandsParent}>
            <p className={brandsLayoutStyle.title}>Brands</p>
            <input placeholder="Search with brand name..." className={brandsLayoutStyle.searchBar} />
            <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <AiFillCaretLeft style={{fontSize: "xx-large", cursor: "pointer"}} />
                <div id="cardsContainer" className={brandsLayoutStyle.cardsContainer}>
                        {
                            props.brandsData.map((item, index) => {
                                return (
                                    <BrandsCardLayout data={item} key={index} />
                                );
                            })
                        }
                </div>
                <AiFillCaretRight  style={{fontSize: "xx-large", cursor: "pointer"}} />
            </div>
        </div>
    )
}

export default BrandsLayout;