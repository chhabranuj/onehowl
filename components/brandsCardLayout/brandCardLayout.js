import Image from "next/image";
import brandsCardLayoutStyle from "./brandsCardLayout.module.css";

const BrandsCardLayout = (props) => {

    return (
        <div className={brandsCardLayoutStyle.brandsCardParent} style={{backgroundColor: `${props.data.bgColor}`}}>
            <div className={brandsCardLayoutStyle.brandCardImageContainer}>
                <Image
                    src={props.data.logo}
                    alt="Brand Image"
                    className={brandsCardLayoutStyle.cardImage}
                    layout="fixed"
                    width={150}
                    height={100}
                />
            </div>
            <p className={brandsCardLayoutStyle.brandsCardTitle}>{props.data.name}</p>
            <p className={brandsCardLayoutStyle.brandsCardContent}>{props.data.content}</p>
        </div>
    );
}

export default BrandsCardLayout;