import { useEffect, useState } from "react";
import featuredCategoriesLayoutStyle from "./featuredCategoriesLayout.module.css";
import FeaturedCategoriesCardLayout from "../featuredCategoriesCardLayout/featuredCategoriesCardLayout";

const FeaturedCategoriesLayout = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.titleId == "fc"? JSON.parse(props.data): props.data);
    }, [])

    return (
        <div className={featuredCategoriesLayoutStyle.categoriesParent}>
            <p className={featuredCategoriesLayoutStyle.title}>{props.title}</p>
            <div className={featuredCategoriesLayoutStyle.categoriesMenu}>
                {
                    products.map((item, index) => {
                        return (
                            <FeaturedCategoriesCardLayout data={item} key={index} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedCategoriesLayout;