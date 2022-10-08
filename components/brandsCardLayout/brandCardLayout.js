import Image from "next/image";
import { useRouter } from "next/router";
import brandsCardLayoutStyle from "./brandsCardLayout.module.css";

const BrandsCardLayout = (props) => {
    const router = useRouter();

    const handleBrandCard = () => {
        router.push(`/brand/${props.data._id}`)
    }

    return (
        <div className={brandsCardLayoutStyle.brandsCardParent} style={{backgroundColor: `${props.data.brandColor}`}} onClick={handleBrandCard}>
            <div className={brandsCardLayoutStyle.brandCardImageContainer}>
                <Image
                    src={`/static/${props.data.brandLogo}`}
                    alt="Brand Image"
                    className={brandsCardLayoutStyle.cardImage}
                    layout="fixed"
                    width={150}
                    height={100}
                />
            </div>
            <p className={brandsCardLayoutStyle.brandsCardTitle}>{props.data.brandName}</p>
            {/* <p className={brandsCardLayoutStyle.brandsCardContent}>{props.data.brandAbout}</p> */}
        </div>
    );
}

export default BrandsCardLayout;