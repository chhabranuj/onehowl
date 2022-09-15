import { GoPackage } from "react-icons/go";
import { MdFastfood } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import ourServicesLayoutStyle from "./ourServicesLayout.module.css"

const OurServicesLayout = () => {
    const services = [
        {
            image: <GoPackage style={{fontSize: "xxx-large", color: "white"}} />,
            title: "Free shipping on first order",
            content: "Sign up for updates and get free shipping.",
            bgColor: "#CA6F1E"
        },
        {
            image: <GiFullPizza style={{fontSize: "xxx-large", color: "white"}} />,
            title: "Best quality guarantee",
            content: "We use only the best ingredients to cook the tasty fresh food for you.",
            bgColor: "#1D8348"
        },
        {
            image: <FaShippingFast style={{fontSize: "xxx-large", color: "white"}} />,
            title: "30 minutes delivery",
            content: "Everything you order will be quickly delivered to your door.",
            bgColor: "#1F618D"
        },
        {
            image: <MdFastfood style={{fontSize: "xxx-large", color: "white"}} />,
            title: "Variety of dishes",
            content: "In our menu you’ll find a wide variety of dishes, desserts, and drinks.",
            bgColor: "#cc3528"
        },
    ]

    return (
        <div className={ourServicesLayoutStyle.ourServicesParent}>
            <p className={ourServicesLayoutStyle.ourServicesTitle}>Our Services</p>
            <div className={ourServicesLayoutStyle.ourServicesParents}> 
                {
                    services.map((item, index) => {
                        return (
                            <div key={index} className={ourServicesLayoutStyle.ourServicesContainer} style={{backgroundColor: item.bgColor}}>
                                {item.image}
                                <p className={ourServicesLayoutStyle.ourServicesContainerTitle}>{item.title}</p>
                                <p className={ourServicesLayoutStyle.ourServicesContent}>{item.content}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default OurServicesLayout;