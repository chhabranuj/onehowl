import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import BrandMenuLayout from "../../components/brandMenuLayout/brandMenuLayout";
import TitleBarLayout from "../../components/titleBarLayout/titleBarLayout";

const MenuLayout = ({posts}) => {

    return (
        <div>
            <Head>
                <title>MenuLayout</title>
            </Head>
            <TitleBarLayout />
            <BrandMenuLayout data={posts} />
        </div>
    );
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: { 
                    brand: "mcd"
                } 
            }, 
            { 
                params: { 
                    brand: "piz"
                } 
            },
            {
                params: { 
                    brand: "sta"
                } 
            }
        ],
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const client = await clientPromise;
    const database = client.db(process.env.MONGO_DB);
    const productCollection = database.collection("productCollection");
    const result = await productCollection.findOne({_id: context.params.brand});
    return {
      props: {
        posts: result
      }
    }
}

export default MenuLayout;
