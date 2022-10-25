import Image from "next/image";
import featuredCategoriesLayoutStyle from "./featuredCategoriesLayout.module.css";

const FeaturedCategoriesLayout = (props) => {
    const products = props.data;
    const bgColor = ["#fefceb", "#edffec", "#fdf0ea", "#fdf0ea", "#fff3ff", "#f2fce4", "#fcf3cf", "#d6eaf8"]
    

    const randomBg = () => {
        return bgColor[Math.floor((Math.random() * 6) + 0)]
    }

    return (
        <div className={featuredCategoriesLayoutStyle.categoriesParent}>
            <p className={featuredCategoriesLayoutStyle.title}>Featured Categoires</p>
            <div className={featuredCategoriesLayoutStyle.categoriesMenu}>
                {
                    products.map((item, index) => {
                        return (
                            <div className={featuredCategoriesLayoutStyle.categoriesMenuContent} key={index} style={{backgroundColor: randomBg()}}>
                                <img 
                                    src={item[item._id][4].image}
                                    alt="Brand Image"
                                    className={featuredCategoriesLayoutStyle.categoriesMenuContentImage}
                                />
                                <div className={featuredCategoriesLayoutStyle.categoriesMenuContenttitleAndTypeContainer}>
                                    <p className={featuredCategoriesLayoutStyle.categoriesMenuContentTitle}>{item._id.charAt(0).toUpperCase() + item._id.slice(1)}</p>
                                    <p className={featuredCategoriesLayoutStyle.categoriesMenuContentType}>{item[item._id].length} items</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FeaturedCategoriesLayout;