import pageAboutLayoutStyle from "./pageAboutLayout.module.css";

const PageAboutLayout = (props) => {
    return (
        <div className={pageAboutLayoutStyle.yourCartParent}>
            <p className={pageAboutLayoutStyle.yourCartTitle}>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</p>
            <p className={pageAboutLayoutStyle.yourCartContent}>Celebrating the season of food for the whole year.</p>
            <p className={pageAboutLayoutStyle.yourCartTimeline}><span className={pageAboutLayoutStyle.from} onClick={() => router.push("/")}>Home &#8594;</span> {props.path}</p>
        </div>
    );
}

export default PageAboutLayout;