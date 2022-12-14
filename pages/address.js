import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Layout from "../components/layout/layout";
import AddressLayout from "../components/addressLayout/addressLayout";

const Address = () => {
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
                <title>Address</title>
            </Head>
            <AddressLayout />
        </Layout>
    )
}

export default Address;