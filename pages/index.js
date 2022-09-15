import Head from 'next/head'
import AboutLayout from '../components/aboutLayout/aboutLayout'
import BrandsLayout from '../components/brandsLayout/brandsLayout'
import LandingLayout from '../components/landingLayout/landingLayout'
import TitleBarLayout from '../components/titleBarLayout/titleBarLayout'
import OurServicesLayout from '../components/ourServicesLayout/ourServicesLayout'
import HungryBannerLayout from '../components/hungryBannerLayout/hungryBannerLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBarLayout />
      <LandingLayout />
      <AboutLayout />
      <HungryBannerLayout />
      <BrandsLayout />
      <OurServicesLayout />
    </div>
  )
}