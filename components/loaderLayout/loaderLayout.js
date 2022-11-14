import loaderLayoutStyle from "./loaderLayout.module.css";

const LoaderLayout = (props) => {

    return (
        <div className={loaderLayoutStyle.loaderContainer}>
            <div className={loaderLayoutStyle.loader}></div>
            <p className={loaderLayoutStyle.loaderText}>{props.title}</p>
        </div>
    );
}

export default LoaderLayout;