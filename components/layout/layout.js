import Head from "next/head";
import layoutStyle from "./layout.module.css";
import TitleBarLayout from "../titleBarLayout/titleBarLayout";

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
            <div className={layoutStyle.navbarContainer}>
                <TitleBarLayout />
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Layout;