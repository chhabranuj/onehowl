import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/layout/layout";
import CartLayout from "../components/ViewCart/cartLayout/cartlayout";
import FeaturedCategoriesCardLayout from "../components/FeaturedCategories/featuredCategoriesCardLayout/featuredCategoriesCardLayout";
import { productSelector } from "../components/store/reducers/productReducer";

const Cart = () => {
    const products = useSelector(productSelector);

    useEffect(() => {
        console.log(products)
    })

    return (
        <Layout>
            <Head>
                <title>Cart</title>
            </Head>
            <CartLayout />
            {/* <FeaturedCategoriesCardLayout data={products} /> */}
        </Layout>
    )
}

export default Cart;