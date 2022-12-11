import { FaCrown } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import aboutLayoutStyle from "./aboutLayout.module.css";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";

const AboutLayout = () => {
    const believes = [
        {
            icon: <FaBrain style={{color: "#3bb77e", fontSize: "xx-large"}} />,
            title: "Think Big",
            content: ["We set a bold and inspiring vision, and create new benchmarks.", "We take on new challenges without the fear of failure."]
        },
        {
            icon: <FaCrown style={{color: "#3bb77e", fontSize: "xx-large"}} />,
            title: "Customer Is King",
            content: ["We are paranoid about consumer experience and measure success by consumer impact.", "We spend time listening to and deeply understanding our customer's needs."]
        },
        {
            icon: <GiNetworkBars style={{color: "#3bb77e", fontSize: "xx-large"}} />,
            title: "Never Settle",
            content: ["We constantly push the limits & have unreasonably high standards.","We prevent problems, not react to them.", "We get 1% better everyday and focus on the long term."]
        },
        {
            icon: <FaHandsHelping style={{color: "#3bb77e", fontSize: "xx-large"}} />,
            title: "Do More with Less",
            content: ["We are resourceful and work elegantly around constraints.", "We are judicious in deploying the org's resources to maximise impact.", "We always look for opportunities to simplify problems and counter complexity wherever we can."]
        }
    ]

    return (
        <div className={aboutLayoutStyle.aboutParent}>
            <PageAboutLayout title="About Us" path={<span>About Us</span>} />
            <div className={aboutLayoutStyle.whoWeAreParent}>
                <div className={aboutLayoutStyle.whoWeAreContainer}>
                    <p className={aboutLayoutStyle.title}>Who <span style={{color: "#3bb77e"}}>we</span> are?</p>
                    <p className={aboutLayoutStyle.whoWeAreContainerContent}>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                </div>
                <div className={aboutLayoutStyle.whoWeAreContainer}>
                    <img className={aboutLayoutStyle.whoWeAreContainerImage} src="/static/aboutUs.avif" />
                </div>
            </div>
            <div className={aboutLayoutStyle.believeParent}>
                <p className={aboutLayoutStyle.title} style={{textAlign: "right"}}>What <span style={{color: "#3bb77e"}}>we</span> believe?</p>
                <div className={aboutLayoutStyle.believeChild}>
                    {
                        believes.map((item, index) => {
                            return (
                                <div key={index} className={aboutLayoutStyle.believeContainer}>
                                    {item.icon}
                                    <p className={aboutLayoutStyle.believeTitle}>{item.title}</p>
                                    <ul>
                                    {
                                        item.content.map((contentItem, contentKey) => {
                                            return (
                                                <li key={contentKey} className={aboutLayoutStyle.whoWeAreContainerContent} style={{color: "#3bb77e", marginBottom: "0.5rem"}}><span style={{color: "#253D4E"}}>{contentItem}</span></li>
                                            );
                                        })
                                    }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className={aboutLayoutStyle.imagesParent}>
                <p className={aboutLayoutStyle.title} style={{width: "85%", marginTop: "0"}}><span style={{color: "#3bb77e"}}>We</span> Care!!!</p>
                <div className={aboutLayoutStyle.imagesChild}>
                    <div className={aboutLayoutStyle.imagesContainer}>
                        <img className={aboutLayoutStyle.image} src="/static/res.avif" />
                        <img className={aboutLayoutStyle.image} src="/static/chef.avif" />
                    </div>
                    <img className={aboutLayoutStyle.middleImage} src="/static/masalas.jpg" />
                    <div className={aboutLayoutStyle.imagesContainer}>
                        <img className={aboutLayoutStyle.image}src="/static/delivery.avif" />
                        <img className={aboutLayoutStyle.image}src="/static/restaurant.avif" />
                    </div>
                </div>
                </div>
            <div className={aboutLayoutStyle.behindParent}>
                <p className={aboutLayoutStyle.title} style={{textAlign: "right"}}>Behind <span style={{color: "#3bb77e"}}>OneHowl</span>!!!</p>
            </div>
        </div>
    )
}

export default AboutLayout;