import Head from "next/head";
import Layout from "../components/layout/layout";
import CartLayout from "../components/ViewCart/cartLayout/cartLayout";

const Cart = () => {

    return (
        <Layout>
            <Head>
                <title>Cart</title>
            </Head>
            <CartLayout />
        </Layout>
    )
}

export default Cart;