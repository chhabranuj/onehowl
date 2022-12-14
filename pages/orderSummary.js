import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import OrderSummaryLayout from "../components/orderSummaryLayout/orderSummaryLayout";

const OrderSummary = () => {
    const router = useRouter();
    const {data: session} = useSession();

    useEffect(() => {
        if(!session) {
            router.push("/");
        }
    })

    return (
        <Layout>
            <Head>
                <title>Summary</title>
            </Head>
            <OrderSummaryLayout priceToPay={router.query.priceToPay} data={router.query.data} />
        </Layout>
    );
}

export default OrderSummary;