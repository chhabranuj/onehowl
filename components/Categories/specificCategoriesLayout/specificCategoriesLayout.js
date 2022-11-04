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
    const [productId, setProductId] = useState("");
    const productData = useSelector(productSelector);
    const [otherCategoriesData, setOtherCategoriesData] = useState([]);

    useEffect(() => {
        if(!props.categoryId) {
            router.push("/");
        }
        else {
            setProductId(props.data? JSON.parse(props.data).id: "");
            let tempData = []
            productData.map(item => {
                if(item.category != props.categoryId) {
                    tempData.push(item);
                }
            })
            setOtherCategoriesData(tempData);
        }
    }, [])


    return (
        <div className={specificCategoriesLayoutStyle.specificCategoriesParent}>
            <PageAboutLayout title={props.categoryId} path="Category" display={props.display} />
            {
                productData.map((item, index) => {
                    return (
                        <div className={specificCategoriesLayoutStyle.itemContainer} key={index}>
                            { 
                                item.category == props.categoryId &&
                                    item.items.map((itemData, itemIndex) => {
                                        if(itemData.id != productId) {
                                            return (
                                                <CategoriesItemLayout key={itemIndex} data={itemData} categoryId={item.catgory} />
                                            )
                                        }
                                    }     
                                )
                            }
                        </div>
                    );
                })
            }
            {otherCategoriesData.length && <FeaturedCategoriesLayout data={otherCategoriesData} title="Other Featured Categories" />}
        </div>
    );
}

export default SpecificCategoriesLayout;