import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import SpecificCategoriesLayout from "../../components/Categories/specificCategoriesLayout/specificCategoriesLayout";


const Category = () => {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Category | OneHowl</title>
            </Head>
            <SpecificCategoriesLayout categoryId={router.query.categoryId} />
        </Layout>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 
                    category: "Veg"
                } 
            },
            {
                params: { 
                    category: "NonVeg"
                } 
            },
            {
                params: { 
                    category: "Rice"
                } 
            },
            {
                params: { 
                    category: "Chinese"
                } 
            },
            {
                params: { 
                    category: "SouthIndian"
                } 
            },
            {
                params: { 
                    category: "Breads"
                } 
            },
            {
                params: { 
                    category: "Desserts"
                } 
            },
            {
                params: { 
                    category: "Drinks"
                } 
            },
        ],
        fallback: false
    }
}

export const getStaticProps = () => {
    return {
        props: {}
    }
}

export default Category;
