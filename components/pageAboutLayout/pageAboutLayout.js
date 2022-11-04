import { useRouter } from "next/router";
import pageAboutLayoutStyle from "./pageAboutLayout.module.css";

const PageAboutLayout = (props) => {
    const router = useRouter();
    
    return (
        <div className={pageAboutLayoutStyle.yourCartParent} style={{display: props.display}}>
            <p className={pageAboutLayoutStyle.yourCartTitle}>{props.title}</p>
            <p className={pageAboutLayoutStyle.yourCartContent}>Celebrating the season of food for the whole year.</p>
            <p className={pageAboutLayoutStyle.yourCartRoute}><span className={pageAboutLayoutStyle.from} onClick={() => router.push("/")}>Home &#8658;</span> {props.path}</p>
        </div>
    );
}

export default PageAboutLayout;