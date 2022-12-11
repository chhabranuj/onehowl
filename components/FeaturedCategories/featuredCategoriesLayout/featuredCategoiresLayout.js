import featuredCategoriesLayoutStyle from "./featuredCategoriesLayout.module.css";
import FeaturedCategoriesCardLayout from "../featuredCategoriesCardLayout/featuredCategoriesCardLayout";

const FeaturedCategoriesLayout = (props) => {

    return (
        <div className={featuredCategoriesLayoutStyle.categoriesParent}>
            <p className={featuredCategoriesLayoutStyle.title}>{props.title}</p>
            <div className={featuredCategoriesLayoutStyle.categoriesMenu}>
                {
                    props.titleId == "fc"? JSON.parse(props.data).map((item, index) => {
                        return (
                            <FeaturedCategoriesCardLayout data={item} key={index} />
                        );
                    }):
                    props.data.map((item, index) => {
                        return (
                            <FeaturedCategoriesCardLayout data={item} key={index} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedCategoriesLayout;