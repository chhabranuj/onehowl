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
            <ProductDetailsLayout data={router.query.productData} />
            <SpecificCategoriesLayout categoryId={router.query.categoryId} data={router.query.productData} display="none" />
            <CheckoutFooterLayout />
        </Layout>
    )
}

export default ProductDetails;