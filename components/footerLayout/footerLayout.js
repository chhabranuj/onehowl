import { useState } from "react";
import { useRouter } from "next/router";
import { IoEarth } from "react-icons/io5";
import { FaCopyright } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import LoaderLayout from "../loaderLayout/loaderLayout";
import footerLayoutStyle from "./footerLayout.module.css";

const FooterLayout = () => {
    const router = useRouter();
    const [showLoader, setShowLoader] = useState(false);
    const [showHomeLoader, setShowHomeLoader] = useState(false);
    const usefulLinks = [
        {
            title: "About Us",
            link: "/aboutUs"
        },
        {
            title: "Help/FAQ's",
            link: "/help"
        },
        {
            title: "Privacy Policy",
            link: "/documentation/privacyPolicy"
        },
        {
            title: "Terms & Conditions",
            link: "/documentation/terms&Conditions"
        }
    ];
    const areasWeServe = ["East Delhi", "North Delhi"];
    const ourPartners = [
        {
            icon: <IoEarth className={footerLayoutStyle.containerIcon} />,
            title: "PDOP",
            link: "https://pendownonpaper.netlify.app"
        },
        {
            icon: <IoEarth className={footerLayoutStyle.containerIcon} />,
            title: "Dunphy",
            link: "https://dunphy.netlify.app"
        },
        {
            icon: <IoEarth className={footerLayoutStyle.containerIcon} />,
            title: "HitchDoc",
            link: "https://hitchdoc.vercel.app"
        }
    ];
    const connectWithUs = [
        {
            icon: <IoLogoGithub className={footerLayoutStyle.containerIcon} />,
            title: "GitHub",
            link: "https://github.com/chhabranuj"
        },
        {
            icon: <IoEarth className={footerLayoutStyle.containerIcon} />,
            title: "Know Us",
            link: "https://chhabranuj.netlify.app/"
        },
        {
            icon: <IoLogoLinkedin className={footerLayoutStyle.containerIcon} />,
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/anuj-chhabra-b0b2a422a/"
        },
        {
            icon: <IoLogoWhatsapp className={footerLayoutStyle.containerIcon} />,
            title: "Whatsapp",
            link: "https://wa.me/7217746275"
        },
    ]

    const naviagteToHome = () => {
        setShowHomeLoader(true);
        router.push("/");
        setInterval(() => {
            setShowHomeLoader(false);
        }, 2000)
    }


    return (
        <div className={footerLayoutStyle.footerParent}>
            <div className={footerLayoutStyle.footerParentContainer}>
                <div className={footerLayoutStyle.footerContainerTitleAndDescription}>
                    <p className={footerLayoutStyle.footerMainTitle} onClick={naviagteToHome}>one<span className={footerLayoutStyle.howl}>Howl</span></p>
                    <p className={footerLayoutStyle.containerDescription}>OneHowl is an online delivery platform that helps you to order food online from one and only oneHowl restaurant. OneHowl provides you more than 100 products which you can order anytime & anywhere.</p>
                </div>
                <div className={footerLayoutStyle.footerContainerInfo}>
                    <div className={footerLayoutStyle.footerContainer}>
                        <p className={footerLayoutStyle.containerTitle}>Useful Links</p>
                        {
                            usefulLinks.map((item, index) => {
                                return(
                                    <p key={index} className={footerLayoutStyle.containerContent} onClick={() => {setShowLoader(true); router.push({pathname: item.link, query: {title: item.title}}, item.link); setShowLoader(false);}}>{item.title}</p>
                                );
                            })
                        }
                    </div>
                    <div className={footerLayoutStyle.footerContainer}>
                        <p className={footerLayoutStyle.containerTitle}>Areas We Serve</p>
                        <div className={footerLayoutStyle.containerLinks}>
                        {    
                            areasWeServe.map((item, index) => {
                                    return (
                                         <p key={index} className={footerLayoutStyle.containerContent}>{item}</p>
                                    );
                                })
                        }
                        </div>
                    </div>
                    <div className={footerLayoutStyle.footerContainer}>
                        <p className={footerLayoutStyle.containerTitle}>Our Partners</p>
                        <div className={footerLayoutStyle.containerLinks}>
                            {
                                ourPartners.map((item, index) => {
                                    return (
                                        <div key={index} className={footerLayoutStyle.containerLinksContainer} onClick={() => {window.open(item.link, "_blank");}}>
                                            {item.icon}
                                            <p className={footerLayoutStyle.containerContent}>{item.title}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className={footerLayoutStyle.footerContainer}>
                        <p className={footerLayoutStyle.containerTitle}>Connect With Us</p>
                        <div className={footerLayoutStyle.containerLinks}>
                            {
                                connectWithUs.map((item, index) => {
                                    return (
                                        <div key={index} className={footerLayoutStyle.containerLinksContainer} onClick={() => {window.open(item.link, "_blank");}}>
                                            {item.icon}
                                            <p className={footerLayoutStyle.containerContent}>{item.title}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerLayoutStyle.footerCopyright}>
                <FaCopyright />
                <p style={{margin: "0"}}>&nbsp;2022 - OneHowl. All Rights Reserved.</p>
            </div>
            {showHomeLoader && <LoaderLayout title="Loading the menu. Please Wait." />}
            {showLoader && <LoaderLayout title="Please Wait. Getting ready for help." />}
        </div>
    );
}

export default FooterLayout;