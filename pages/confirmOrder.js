import Head from "next/head";
import { useRouter } from "next/router";
import clientPromise from '../lib/mongodb';
import Layout from "../components/layout/layout";
import ConfirmOrderLayout from "../components/confirmOrderLayout/confirmOrderLayout";

const ConfirmOrder = ({ posts }) => {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>Confirm Order</title>
            </Head>
            <ConfirmOrderLayout data={posts} addressData={router.query.addressData} />
        </Layout>
    );
}

export const getStaticProps = async () => {
    const client = await clientPromise;
    const database = client.db(process.env.MONGO_DB);
    const offerCollection = database.collection("offerCollection");
    const result = await offerCollection.find({}).toArray();
    return {
      props: {
        posts: JSON.stringify(result)
      }
    }
  }

export default ConfirmOrder;