import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { getSession } from "next-auth/react";
import Layout from "../components/layout/layout";
import PreviousOrdersLayout from "../components/previousOrdersLayout/previousOrdersLayout";

const PreviousOrders = ({ posts }) => {

    return (
        <Layout>
            <Head>
                <title>PreviousOrders</title>
            </Head>
            <PreviousOrdersLayout data={posts} />
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if(session) {
        const client = await clientPromise;
        const database = client.db(process.env.MONGO_DB);
        const ordersCollection = database.collection("ordersCollection");
        const results = await ordersCollection.findOne({_id: session.user.email});
        return {
            props : {
                posts: results.orders
            }
        }
    }
    else {
        return {
            props : {
                posts: []
            }
        }
    }
}

export default PreviousOrders;