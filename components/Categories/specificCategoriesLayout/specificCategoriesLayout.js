import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import { productSelector } from "../../store/reducers/productReducer";
import CategoriesItemLayout from "../categoriesItemLayout/categoriesItemLayout";
import specificCategoriesLayoutStyle from "./specificCategoriesLayout.module.css";
import FeaturedCategoriesLayout from "../../FeaturedCategories/featuredCategoriesLayout/featuredCategoiresLayout";

const SpecificCategoriesLayout = (props) => {
    const router = useRouter();
    const products = useSelector(productSelector);
    const [productData, setProductData] = useState([]);
    const [otherCategoriesData, setOtherCategoriesData] = useState([]);

    useEffect(() => {
        if(!props.categoryId) {
            router.push("/");
        }
        else {
            let tempData = [];
            let tempCategories = [];
            let tempId = props.productId;
            products.map(productData => {
                if(productData.category == props.categoryId) {
                    productData.items.map(productItem => {
                        if(productItem.id != tempId) {
                            tempData.push(productItem);
                        }
                    })
                }
                else {
                    tempCategories.push(productData);
                }
            })
            setProductData(tempData);
            setOtherCategoriesData(tempCategories);
        }
    }, [])


    return (
        <div className={specificCategoriesLayoutStyle.specificCategoriesParent}>
            <PageAboutLayout title={props.categoryId} path="Category" display={props.display} />
            <div className={specificCategoriesLayoutStyle.itemContainer}>
                {
                    productData.map((item, index) => {
                        return (
                            <CategoriesItemLayout key={index} data={item} categoryId={props.categoryId} />
                        );
                    })
                }
            </div>
            {otherCategoriesData.length && <FeaturedCategoriesLayout data={otherCategoriesData} title="Other Featured Categories" />}
        </div>
    );
}

export default SpecificCategoriesLayout;