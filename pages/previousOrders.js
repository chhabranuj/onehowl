import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";
import Layout from "../components/layout/layout";
import { getSession, useSession } from "next-auth/react";
import PreviousOrdersLayout from "../components/previousOrdersLayout/previousOrdersLayout";

const PreviousOrders = ({ posts }) => {
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