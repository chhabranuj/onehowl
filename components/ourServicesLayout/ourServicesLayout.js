import { GoPackage } from "react-icons/go";
import { MdFastfood } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import ourServicesLayoutStyle from "./ourServicesLayout.module.css";

const OurServicesLayout = () => {
    const services = [
        {
            image: <GoPackage style={{fontSize: "3.5rem", color: "#3bb77e"}} />,
            title: "Free shipping on first order",
            content: "Sign up for updates and get free shipping."
        },
        {
            image: <GiFullPizza style={{fontSize: "3.5rem", color: "#3bb77e"}} />,
            title: "Best quality guarantee",
            content: "We use only the best ingredients to cook the tasty fresh food for you."
        },
        {
            image: <FaShippingFast style={{fontSize: "3.5rem", color: "#3bb77e"}} />,
            title: "30 minutes delivery",
            content: "Everything you order will be quickly delivered to your door."
        },
        {
            image: <MdFastfood style={{fontSize: "3.5rem", color: "#3bb77e"}} />,
            title: "Variety of dishes",
            content: "In our menu you’ll find a wide variety of dishes, desserts, and drinks."
        },
    ];

    return (
        <div className={ourServicesLayoutStyle.ourServicesParent}>
            <div className={ourServicesLayoutStyle.ourServicesChild}> 
                {
                    services.map((item, index) => {
                        return (
                            <div key={index} className={ourServicesLayoutStyle.ourServicesContainer}>
                                {item.image}
                                <div style={{width: "60%"}}>
                                    <p className={ourServicesLayoutStyle.ourServicesContainerTitle}>{item.title}</p>
                                    <p className={ourServicesLayoutStyle.ourServicesContent}>{item.content}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default OurServicesLayout;