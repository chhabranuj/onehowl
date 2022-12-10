import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import LoaderLayout from "../../loaderLayout/loaderLayout";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import { productSelector } from "../../store/reducers/productReducer";
import CategoriesItemLayout from "../categoriesItemLayout/categoriesItemLayout";
import specificCategoriesLayoutStyle from "./specificCategoriesLayout.module.css";
import FeaturedCategoriesLayout from "../../FeaturedCategories/featuredCategoriesLayout/featuredCategoiresLayout";

const SpecificCategoriesLayout = (props) => {
    const router = useRouter();
    const products = useSelector(productSelector);
    const [productData, setProductData] = useState([]);
    // const productDataRef = useRef([]);
    // const productDataRef = useCallbackRef([], ref => ref && ref.focus());
    // const otherCategoriesDataRef = useCallbackRef([], ref => ref && ref.focus());
    // const otherCategoriesDataRef = useRef([]);
    const [showHomeLoader, setShowHomeLoader] = useState(false);
    const [otherCategoriesData, setOtherCategoriesData] = useState([]);
    const [, setForceUpdate] = useState(Date.now());

    useEffect(() => {
        if(!props.categoryId) {
            setShowHomeLoader(true);
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
            productDataRef.current = tempData;
            otherCategoriesDataRef.current = tempCategories;
            setForceUpdate()
            // setProductData(tempData);
            // setOtherCategoriesData(tempCategories);
        }
    })

    return (
        <div className={specificCategoriesLayoutStyle.specificCategoriesParent}>
            <PageAboutLayout title={props.categoryId} path="Category" display={props.display} />
            <div className={specificCategoriesLayoutStyle.itemContainer}>
                {
                    productDataRef.current.map((item, index) => {
                        return (
                            <CategoriesItemLayout key={index} data={item} categoryId={props.categoryId} />
                        );
                    })
                }
            </div>
            {otherCategoriesDataRef.current.length && <FeaturedCategoriesLayout data={otherCategoriesDataRef.current} title="Other Featured Categories" />}
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default SpecificCategoriesLayout;