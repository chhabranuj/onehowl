import Image from "next/image";
import { useEffect, useState } from "react";
import aboutLayoutStyle from "./aboutLayout.module.css";

const AboutLayout = () => {
    const images = ["/static/images/slideShowImage1.jpg", "/static/images/slideShowImage2.jpg", "/static/images/slideShowImage3.jpg", "/static/images/slideShowImage4.jpg"];

    const [activeImage, setActiveImage] = useState(images[0]);

    useEffect(() => {
        let count = 0
        setInterval(() => {
            if(count === images.length - 1) {
                count = 0;
            }
            else{
                count += 1;
            }
            setActiveImage(images[count])
        }, 2500);
    }, [])

    return (
        <div className={aboutLayoutStyle.aboutParent}>
            <div className={aboutLayoutStyle.leftContainer}>
                <p className={aboutLayoutStyle.title}>About Us</p>
                <p className={aboutLayoutStyle.content}>One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.One Howl is a online delivery platform that helps you to order food online from top brands in India.</p>
            </div>
            <div className={aboutLayoutStyle.rightContainer}>
                <Image
                    src={activeImage}
                    alt="Fast Food images"
                    objectFit="cover"
                    objectPosition="center"
                    layout="fixed"
                    width={500}
                    height={350}
                    className={aboutLayoutStyle.fastFoodImages}
                />
            </div>
        </div>
    );
}

export default AboutLayout;