import newsletterLayoutStyle from "./newsletterLayout.module.css";

const NewsletterLayout = () => {

    return (
        <div className={newsletterLayoutStyle.newsletterParent}>
            {/* <div className={newsletterLayoutStyle.newsletterChild}>
                <div className={newsletterLayoutStyle.newsletterContentContainer}>
                    <p className={newsletterLayoutStyle.newsletterTitle}>SUBSCRIBE TO<br />NEWSLETTER</p>
                    <p className={newsletterLayoutStyle.newsletterContent}>Don't miss any of upcoming events.</p>
                </div>
                <div className={newsletterLayoutStyle.newsletterInputContainer}>
                    <input placeholder="Enter your E-mail" type="email" className={newsletterLayoutStyle.newsletterInput} />
                    <button className={newsletterLayoutStyle.newsletterSubscribeButton}>SUBSCRIBE</button>
                </div>
            </div> */}
            <div className={newsletterLayoutStyle.newsletterChild}>
                <img src="/static/newsletter.svg" width="200px" height="200px" />
                <div className={newsletterLayoutStyle.newsletterContentContainer}>
                    <p className={newsletterLayoutStyle.newsletterTitle}>THANKYOU</p>
                    <p className={newsletterLayoutStyle.newsletterContent}>for subscribing the newsletter!!!</p>
                </div>
            </div>
        </div>
    );
}

export default NewsletterLayout;