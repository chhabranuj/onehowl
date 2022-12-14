import { useRouter } from "next/router";
import { FaCrown } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GiNetworkBars } from "react-icons/gi";
import { IoLogoGithub } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import aboutLayoutStyle from "./aboutLayout.module.css";
import LoaderLayout from "../loaderLayout/loaderLayout";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import { productSelector } from "../store/reducers/productReducer";
import Image from "next/image";

const AboutLayout = () => {
    const router = useRouter();
    const products = useSelector(productSelector);
    const [showHomeLoader, setShowHomeLoader] = useState(false);
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
    ];

    useEffect(() => {
        if(products.length == 0) {
            setShowHomeLoader(true);
            router.push("/");
        }
    })

    return (
        <div className={aboutLayoutStyle.aboutParent}>
            <PageAboutLayout title="About Us" path={<span>About Us</span>} />
            <div className={aboutLayoutStyle.whoWeAreParent}>
                <div className={aboutLayoutStyle.whoWeAreContainer}>
                    <p className={aboutLayoutStyle.title}>Who <span style={{color: "#3bb77e"}}>we</span> are?</p>
                    <p className={aboutLayoutStyle.aboutContent}>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
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
                                                <li key={contentKey} className={aboutLayoutStyle.aboutContent} style={{color: "#3bb77e", marginBottom: "0.5rem"}}><span style={{color: "#253D4E"}}>{contentItem}</span></li>
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
                        <img className={aboutLayoutStyle.image} src="/static/delivery.avif" />
                        <img className={aboutLayoutStyle.image} src="/static/restaurant.avif" />
                    </div>
                </div>
                </div>
            <div className={aboutLayoutStyle.behindParent}>
                <p className={aboutLayoutStyle.title} style={{textAlign: "right"}}>Behind <span style={{color: "#3bb77e"}}>OneHowl</span>!!!</p>
                <div className={aboutLayoutStyle.behindChild}>
                    <div className={aboutLayoutStyle.whoWeAreContainer}style={{alignItems: "center"}}>
                        <Image src={"/static/me.png"} width="250" height="320" layout="fixed" objectPosition="center" objectFit="cover" className={aboutLayoutStyle.creatorImage}/>
                        <div className={aboutLayoutStyle.creatorLinksContainer}>
                            <IoLogoGithub className={aboutLayoutStyle.creatorLinks} onClick={() => {window.open("https://github.com/chhabranuj", "_blank");}} />
                            <IoEarth className={aboutLayoutStyle.creatorLinks} onClick={() => {window.open("https://chhabranuj.netlify.app/", "_blank");}} />
                            <IoLogoWhatsapp className={aboutLayoutStyle.creatorLinks} onClick={() => {window.open("https://wa.me/7217746275", "_blank");}} />
                            <IoLogoLinkedin className={aboutLayoutStyle.creatorLinks} onClick={() => {window.open("https://www.linkedin.com/in/anuj-chhabra-b0b2a422a/", "_blank");}} />
                        </div>
                    </div>
                    <div className={aboutLayoutStyle.whoWeAreContainer}>
                        <p style={{fontSize: "x-large", fontWeight: "bold", fontFamily: "Quicksand", marginTop: "0"}}>- <span style={{color: "#3bb77e"}}>Anuj</span> Chhabra</p>
                        <p className={aboutLayoutStyle.aboutContent}>A 3rd year student currently persuing Bachelor of Technology in Computer Science Engineering from Delhi Technical campus, Guru Gobind Singh Indraprastha University. Passionate for coding and created many projects in the field of web development. <br/><br/></p>
                        <p className={aboutLayoutStyle.aboutContent}>Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organisational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. <br/><br/></p>
                        <p className={aboutLayoutStyle.aboutContent}>Confident communicator, strategic thinker and innovative creater to develop software that is customised to meet a company's organisational needs, highlight their core competencies, and further their sucess. <br/><br/></p>
                    </div>
                </div>
            </div>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please wait." />}
        </div>
    )
}

export default AboutLayout;