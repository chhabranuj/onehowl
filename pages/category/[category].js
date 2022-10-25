import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import SpecificProductsLayout from "../../components/Products/specificProductsLayout/specificProductsLayout";

const Category = () => {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Category | OneHowl</title>
            </Head>
            <SpecificProductsLayout title={router.query.title} data={router.query.data} />
        </Layout>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 
                    category: "burgers"
                } 
            },
            {
                params: { 
                    category: "fries"
                } 
            },
            {
                params: { 
                    category: "nuggets"
                } 
            },
            {
                params: { 
                    category: "combo"
                } 
            },
            {
                params: { 
                    category: "desserts"
                } 
            },
            {
                params: { 
                    category: "drinks"
                } 
            },
        ],
        fallback: false
    }
}

export const getStaticProps = () => {
    return {
        props: {

        }
    }
}

export default Category;
