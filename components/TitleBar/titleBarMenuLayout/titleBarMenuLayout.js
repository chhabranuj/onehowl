import titleBarMenuLayoutStyle from "./titleBarMenuLayout.module.css";

const TitleBarMenuLayout = (props) => {

    const naviagteToBrandMenu = (id) => {
        
    }

    return (
        <div className={titleBarMenuLayoutStyle.menuContentParent}>
            {/* {
                props.menu.map((item, index) => {
                    return (
                        <div key={index} className={titleBarMenuLayoutStyle.menuContentContainer} onClick={naviagteToBrandMenu}>
                            <p className={titleBarMenuLayoutStyle.menuContent}>{item.brandName}</p>
                            {index != props.menu.length-1 && <hr className={titleBarMenuLayoutStyle.menuContentDivider} />}
                        </div>
                    );
                })
            } */}
            <p>Hi</p>
            <p>HEllo</p>
        </div>
    );
}

export default TitleBarMenuLayout;