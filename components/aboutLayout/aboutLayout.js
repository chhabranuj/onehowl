import aboutLayoutStyle from "./aboutLayout.module.css";

const AboutLayout = () => {

    return (
        <div className={aboutLayoutStyle.aboutParent}>
            <div className={aboutLayoutStyle.leftContainer}>
                <p className={aboutLayoutStyle.title}>About Us</p>
                <p className={aboutLayoutStyle.content}>One Howl is a online delivery platform that helps you to order food online from top brands in India. We provide more than 7 international brands like Mc Donald's, Pizza Hut, Starbucks and many more. </p>
            </div>
            <div className={aboutLayoutStyle.rightContainer}>
                <img
                    src="/static/images/kfc.jpg"
                    alt="Fast Food images"
                    className={aboutLayoutStyle.fastFoodImages}
                />
            </div>
        </div>
    );
}

export default AboutLayout;