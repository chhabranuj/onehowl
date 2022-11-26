import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import ProductDetailsLayout from "../components/productDetailsLayout/productDetailsLayout";
import CheckoutFooterLayout from "../components/checkoutFooterLayout/checkoutFooterLayout";
import SpecificCategoriesLayout from "../components/Categories/specificCategoriesLayout/specificCategoriesLayout";

const ProductDetails = () => {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>ProductDetails</title>
            </Head>
            <ProductDetailsLayout productId={router.query.productId} categoryId={router.query.categoryId} />
            <SpecificCategoriesLayout productId={router.query.productId} categoryId={router.query.categoryId} display="none" />
            <CheckoutFooterLayout />
        </Layout>
    )
}

export default ProductDetails;