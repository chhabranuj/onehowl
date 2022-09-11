import titleBarMenuLayoutStyle from "./titleBarMenuLayout.module.css";

const TitleBarMenuLayout = (props) => {

    return (
        <div className={titleBarMenuLayoutStyle.menuContentParent}>
            {
                props.menu.map((item, index) => {
                    return (
                        <div key={index} className={titleBarMenuLayoutStyle.menuContentContainer}>
                            <p className={titleBarMenuLayoutStyle.menuContent}>{item}</p>
                            {index != props.menu.length-1 && <hr className={titleBarMenuLayoutStyle.menuContentDivider} />}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TitleBarMenuLayout;