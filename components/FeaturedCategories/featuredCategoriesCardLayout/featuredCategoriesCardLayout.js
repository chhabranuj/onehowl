import { useState } from "react";
import { useRouter } from "next/router";
import LoaderLayout from "../../loaderLayout/loaderLayout";
import featuredCategoriesCardLayoutStyle from "./featuredCategoriesCardLayout.module.css";

const FeaturedCategoriesCardLayout = (props) => {
    const router = useRouter();
    const [showCategoryLoader, setShowCategoryLoader] = useState(false);
    const bgColor = ["#fefceb", "#edffec", "#fdf0ea", "#fdf0ea", "#fff3ff", "#f2fce4", "#fcf3cf", "#d6eaf8"];

    const randomBg = () => {
        return bgColor[Math.floor((Math.random() * 6) + 0)]
    }

    const naviagateToSpecificCategory = () => {
        setShowCategoryLoader(true);
        router.push({
            pathname: `/category/${props.data.category}`,
            query: { categoryId: props.data.category }
        }, `/category/${props.data.category}`)
        setInterval(() => {
            setShowCategoryLoader(false);
        }, 3500);
    }

    return (
        <div className={featuredCategoriesCardLayoutStyle.categoriesMenuContent} style={{backgroundColor: randomBg()}} onClick={naviagateToSpecificCategory}>
            <img 
                src={props.data?.items[Math.floor((Math.random() * 9) + 0)].image}
                alt="Brand Image"
                className={featuredCategoriesCardLayoutStyle.categoriesMenuContentImage}
            />
            <div className={featuredCategoriesCardLayoutStyle.categoriesMenuContentTitleAndTypeContainer}>
                <p className={featuredCategoriesCardLayoutStyle.categoriesMenuContentTitle}>{props.data.category.charAt(0).toUpperCase() + props.data.category.slice(1)}</p>
                <p className={featuredCategoriesCardLayoutStyle.categoriesMenuContentType}>{props.data?.items.length} items</p>
            </div>
            {showCategoryLoader && <LoaderLayout title="Please wait. Preparing the menu." />}
        </div>
    );
}

export default FeaturedCategoriesCardLayout;