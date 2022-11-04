import Head from "next/head";
import Layout from "../components/layout/layout";
import AddressLayout from "../components/addressLayout/addressLayout";

const Address = () => {

    return (
        <Layout>
            <Head>
                <title>Address</title>
            </Head>
            <AddressLayout />
        </Layout>
    )
}

export default Address;