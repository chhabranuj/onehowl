import { useState } from "react";
import { useRouter } from "next/router";
import { IoEarth } from "react-icons/io5";
import { FaCopyright } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import Loader from "../loaderLayout/loaderLayout";
import footerLayoutStyle from "./footerLayout.module.css";

const FooterLayout = () => {
    const router = useRouter();
    const [showLoader, setShowLoader] = useState();
    const usefulLinks = [
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

    return (
        <div className={footerLayoutStyle.footerParent}>
            <div className={footerLayoutStyle.footerParentContainer}>
                <div className={footerLayoutStyle.footerContainer}>
                    <p className={footerLayoutStyle.footerMainTitle}>oneHowl</p>
                    <p className={footerLayoutStyle.containerDescription}>One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.</p>
                </div>
                <div className={footerLayoutStyle.footerUsefulLinksAndPartnersContainer}>
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
            <div className={footerLayoutStyle.footerCopyright}>
                <FaCopyright />
                <p style={{margin: "0"}}>&nbsp;2022 - OneHowl. All Rights Reserved.</p>
            </div>
            {showLoader && <Loader title="Please Wait. " />}
        </div>
    );
}

export default FooterLayout;