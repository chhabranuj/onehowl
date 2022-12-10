import { useState } from "react";
import { useRouter } from "next/router";
import LoaderLayout from "../loaderLayout/loaderLayout";
import pageAboutLayoutStyle from "./pageAboutLayout.module.css";

const PageAboutLayout = (props) => {
    const router = useRouter();
    const [showHomeLoader, setShowHomeLoader] = useState(false);

    const navigateToHome = () => {
        setShowHomeLoader(true);
        router.push("/");
    }
    
    return (
        <div className={pageAboutLayoutStyle.yourCartParent} style={{display: props.display}}>
            <p className={pageAboutLayoutStyle.yourCartTitle}>{props.title}</p>
            <p className={pageAboutLayoutStyle.yourCartContent}>Celebrating the season of food for the whole year.</p>
            <p className={pageAboutLayoutStyle.yourCartRoute}><span className={pageAboutLayoutStyle.from} onClick={navigateToHome}>Home &#8658;</span> {props.path}</p>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    );
}

export default PageAboutLayout;