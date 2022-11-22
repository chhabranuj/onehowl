import Head from "next/head";
import clientPromise from "../lib/mongodb";
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

export const getStaticProps = async () => {
    const client = await clientPromise;
    const database = client.db(process.env.MONGO_DB);
    const ordersCollection = database.collection("ordersCollection");
    const results = await ordersCollection.findOne({_id: "anujchhabra1901@gmail.com"});
    return {
        props : {
            posts: results.orders
        }
    }
}

export default PreviousOrders;