import Head from "next/head";
import Layout from "../components/layout/layout";
import AboutLayout from "../components/aboutLayout/aboutLayout";

const AboutUs = () => {

    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            <AboutLayout />
        </Layout>
    )
}

export default AboutUs;