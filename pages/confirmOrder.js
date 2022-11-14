import Head from "next/head";
import Layout from "../components/layout/layout";
import ConfirmOrderLayout from "../components/confirmOrderLayout/confirmOrderLayout";

const ConfirmOrder = () => {
    return (
        <Layout>
            <Head>
                <title>Confirm Order</title>
            </Head>
            <ConfirmOrderLayout />
        </Layout>
    );
}

export default ConfirmOrder;