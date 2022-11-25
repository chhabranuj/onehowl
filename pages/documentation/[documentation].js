import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import DocumentationLayout from "../../components/documentationLayout/documentationLayout";

const Documentation = () => {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>{router.query.title}</title>
            </Head>
            <DocumentationLayout title={router.query.title} />
        </Layout>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 
                    documentation: "privacyPolicy"
                } 
            },
            {
                params: { 
                    documentation: "terms&Conditions"
                } 
            }
        ],
        fallback: false
    }
}

export const getStaticProps = () => {
    return {
        props: {}
    }
}

export default Documentation;