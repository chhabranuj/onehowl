import { useEffect } from "react";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import ProductsItemLayout from "../productsItemLayout/productsItemLayout";
import specificProductsLayoutStyle from "./specificProductsLayout.module.css";

const SpecificProductsLayout = (props) => {

    useEffect(() => {
        console.log(props.data);
        console.log(props.title);
    })

    return (
        <div className={specificProductsLayoutStyle.specificProductsParent}>
            <PageAboutLayout title={props.title} path="Category" />
            {/* {props.data[props.title].map((itemData, itemIndex) => <ProductsItemLayout key={itemIndex} data={itemData} type={item} />)} */}
        </div>
    );
}

export default SpecificProductsLayout;