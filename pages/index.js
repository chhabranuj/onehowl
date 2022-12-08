import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import clientPromise from '../lib/mongodb';
import Layout from '../components/layout/layout';
import LandingLayout from "../components/landingLayout/landingLayout";
import { addData } from '../components/store/reducers/productReducer';
import CategoriesLayout from '../components/Categories/categoriesLayout/categoriesLayout';
import CheckoutFooterLayout from '../components/checkoutFooterLayout/checkoutFooterLayout';
import FeaturedCategoriesLayout from '../components/FeaturedCategories/featuredCategoriesLayout/featuredCategoiresLayout';

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addData({data: JSON.parse(props.products)}));
  })

  return (
    <Layout>
      <Head>
        <title>OneHowl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout />
      <FeaturedCategoriesLayout data={props.products} title="Featured Categories" titleId="fc" />
      <CategoriesLayout data={props.products} titleId="fc" />
      <CheckoutFooterLayout />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const client = await clientPromise;
  const database = client.db(process.env.MONGO_DB);
  const productCollection = database.collection("productCollection");
  const productResult = await productCollection.find({}).toArray();
  return {
    props: {
      products: JSON.stringify(productResult),
    }
  }
}


export default Home;


