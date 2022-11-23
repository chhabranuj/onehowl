import Head from "next/head";
import Layout from '../components/layout/layout';
import HelpLayout from "../components/HelpUser/helpLayout/helpLayout"

const Help = () => {

    return (
        <Layout>
            <Head>
                <title>Help</title>
            </Head>
            <HelpLayout />
        </Layout>
    );
}

export default Help;