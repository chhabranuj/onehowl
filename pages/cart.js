import Head from "next/head";
import Layout from "../components/layout/layout";
import FooterLayout from "../components/footerLayout/footerLayout";
import CartLayout from "../components/ViewCart/cartLayout/cartlayout";
import NewsletterLayout from '../components/newsletterLayout/newsletterLayout';
import OurServicesLayout from '../components/ourServicesLayout/ourServicesLayout';

const Cart = () => {

    return (
        <Layout>
            <Head>
                <title>Cart</title>
            </Head>
            <CartLayout />
            <NewsletterLayout />
            <OurServicesLayout />
            <FooterLayout />
        </Layout>
    )
}

export default Cart;