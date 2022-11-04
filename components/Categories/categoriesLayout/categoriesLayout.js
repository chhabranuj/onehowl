import { useEffect, useState } from "react";
import categoriesLayoutStyle from "./categoriesLayout.module.css";
import CategoriesItemLayout from "../categoriesItemLayout/categoriesItemLayout";

const CategoriesLayout = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(JSON.parse(props.data));
    }, [])

    return (
        <div className={categoriesLayoutStyle.categoriesParent}>
            {
                categories.map((item, index) => {
                    return (
                        <div key={index} className={categoriesLayoutStyle.typeAndItemContainer}>
                            <div className={categoriesLayoutStyle.typeTitleAndOtherTypesContainer}>
                                <p className={categoriesLayoutStyle.type}>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                            </div>
                            <div className={categoriesLayoutStyle.itemContainer}>
                                {item['items'].map((itemData, itemIndex) => <CategoriesItemLayout key={itemIndex} data={itemData} categoryId={item.category} />)}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CategoriesLayout;