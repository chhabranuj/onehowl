import { useRef, useState } from "react";
import brandMenuLayoutStyle from "./brandMenuLayout.module.css";
import BrandMenuCardLayout from "../brandMenuCardLayout/brandMenuCardLayout";
import CheckoutFooterLayout from "../../checkoutFooterLayout/checkoutFooterLayout";

const BrandMenuLayout = (props) => {
    let tempData = {};
    const searchInput = useRef("");
    const vegToggle = useRef(false);
    const [notFound, setNotFound] = useState(false);
    const [products, setProducts] = useState(props.data.productData);
    
    const handleProductsearch = (e) => {
        searchInput.current = e.target.value;
        filteredData(props.data.productData);
    }

    const handleVegToggle = () => {
        vegToggle.current = !vegToggle.current;
        filteredData(props.data.productData);
    }

    const filteredData = (products) => {
        for(let item in products) {
            tempData[item] = products[item].filter(itemData => (!itemData.isVeg && vegToggle.current)? false: true && itemData.title.toLowerCase().includes(searchInput.current.toLowerCase()));
            if(!tempData[item].length) {
                delete(tempData[item]);
            }
        }
        setNotFound(Object.keys(tempData).length? false: true);
        setProducts(tempData);
    }
    
    return (
        <div className={brandMenuLayoutStyle.menuParent}>
            <div className={brandMenuLayoutStyle.searchAndToggleContainer}>
                <input placeholder="Search with Item Name..." className={brandMenuLayoutStyle.searchBar} onChange={handleProductsearch} />
                <div className={brandMenuLayoutStyle.toggleContainer}>
                    <p style={{fontWeight: "bold"}}>All</p>
                    <label className={brandMenuLayoutStyle.switch} onChange={handleVegToggle}>
                        <input type="checkbox" className={brandMenuLayoutStyle.switchInput} />
                        <div className={brandMenuLayoutStyle.slider}></div>
                    </label>
                    <p style={{fontWeight: "bold"}}>Veg</p>
                </div>
            </div>
            {   
                notFound &&
                    <div className={brandMenuLayoutStyle.notFoundContainer}>
                        <p className={brandMenuLayoutStyle.notFoundText}>Sorry, No Products Found :(</p>
                    </div>
            }
            <div style={{width: "100%"}}>
                {
                    Object.keys(products).map((item, index) => {
                        return (
                            <div key={index} className={brandMenuLayoutStyle.typeAndItemContainer}>
                                {index == 0?
                                    <div className={brandMenuLayoutStyle.typeContainer} style={{marginTop: "20px"}}>
                                        <span className={brandMenuLayoutStyle.type}>{item.toUpperCase()}</span>
                                    </div>:
                                    <div className={brandMenuLayoutStyle.typeContainer}>
                                        <span className={brandMenuLayoutStyle.type}>{item.toUpperCase()}</span>
                                    </div>
                                }
                                <div className={brandMenuLayoutStyle.itemContainer}>
                                    {products[item].map((itemData, itemIndex) => <BrandMenuCardLayout key={itemIndex} data={itemData} type={item} />)}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <CheckoutFooterLayout />
        </div>
    );
}

export default BrandMenuLayout;