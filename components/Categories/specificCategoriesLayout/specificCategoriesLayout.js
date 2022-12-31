import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
    const [showHomeLoader, setShowHomeLoader] = useState(false);
    const [otherCategoriesData, setOtherCategoriesData] = useState([]);

    useEffect(() => {
        if(!props.categoryId) {
            setShowHomeLoader(true);
            router.push("/");
        }
        else {
            setProductData(products.find(item => item.category == props.categoryId).items);
            setOtherCategoriesData(products)
        }
    })

    return (
        <div className={specificCategoriesLayoutStyle.specificCategoriesParent}>
            <PageAboutLayout title={props.categoryId} path="Category" display={props.display} />
            <div className={specificCategoriesLayoutStyle.itemContainer}>
                {
                    productData.filter(item => item.id != props.productId).map(item => {
                        return (
                            <CategoriesItemLayout key={item.id} data={item} categoryId={props.categoryId} />
                        );
                    })
                }
            </div>
            {otherCategoriesData.length > 0 && <FeaturedCategoriesLayout data={otherCategoriesData.filter(item => item.category != props.categoryId)} title="Other Featured Categories" />}
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default SpecificCategoriesLayout;