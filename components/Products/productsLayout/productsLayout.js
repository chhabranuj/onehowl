import productsLayoutStyle from "./productsLayout.module.css";
import ProductsItemLayout from "../productsItemLayout/productsItemLayout";

const ProductsLayout = (props) => {
    const products = props.data;

    return (
        <div className={productsLayoutStyle.productsParent}>
            {
                products.map((item, index) => {
                    return (
                        <div key={index} className={productsLayoutStyle.typeAndItemContainer}>
                            <div className={productsLayoutStyle.typeTitleAndOtherTypesContainer}>
                                <p className={productsLayoutStyle.type}>{item._id.charAt(0).toUpperCase() + item._id.slice(1)}</p>
                            </div>
                            <div className={productsLayoutStyle.itemContainer}>
                                {item[item._id].map((itemData, itemIndex) => <ProductsItemLayout key={itemIndex} data={itemData} type={item} />)}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProductsLayout;