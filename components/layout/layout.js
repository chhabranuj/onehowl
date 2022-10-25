import Head from "next/head";
import layoutStyle from "./layout.module.css";
import FooterLayout from "../footerLayout/footerLayout";
import TitleBarLayout from "../titleBarLayout/titleBarLayout";
import NewsletterLayout from "../newsletterLayout/newsletterLayout";
import OurServicesLayout from "../ourServicesLayout/ourServicesLayout";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Onboarding made easy."
                />
                <title>OneHowl</title>
            </Head>
            <TitleBarLayout />
            <main>{children}</main>
            <NewsletterLayout />
            <OurServicesLayout />
            <FooterLayout />
        </div>
    );
}

export default Layout;