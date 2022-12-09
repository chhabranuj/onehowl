import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import newsletterLayoutStyle from "./newsletterLayout.module.css";
import { addUser, userSelector } from "../store/reducers/userReducer";

const NewsletterLayout = () => {
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const user = useSelector(userSelector);
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterEmailError, setNewsletterEmailError] = useState(false);

    const handleNewsletterInput = (e) => {
        setNewsletterEmail(e.target.value);
        setNewsletterEmailError(false);
    }

    const handleNewsletterSubsribe = () => {
        if(session) {
            if(!newsletterEmail.includes("@gmail.com")) {
                setNewsletterEmailError(true);
            }
            else {
                setNewsletterEmailError(false);
                const body = {
                    _id: session.user.email,
                    newsletterEmail: newsletterEmail
                }
                axios.post("/api/addNewsletterEmail", body)
                    .then((response) => {
                        if(!response.data.result) {
                            setNewsletterEmailError(true);
                        }
                        else {
                            dispatch(addUser({data: response.data.infoData}));
                        }
                    })
            }
        }
    }

    return (
        <div className={newsletterLayoutStyle.newsletterParent}>
            {
                !user.newsletterEmail?   
                   <div className={newsletterLayoutStyle.newsletterChild} style={{backgroundImage: "url('static/bg2.png')"}}>
                    <div className={newsletterLayoutStyle.newsletterContentContainer}>
                        <p className={newsletterLayoutStyle.newsletterTitle}>SUBSCRIBE TO<br />NEWSLETTER</p>
                        <p className={newsletterLayoutStyle.newsletterContent}>Don't miss any of upcoming events.</p>
                    </div>
                    <div className={newsletterLayoutStyle.newsletterInputContainerParent}>
                        <div className={newsletterLayoutStyle.newsletterInputContainer}>
                            <input placeholder="Enter your E-mail" type="email" className={newsletterLayoutStyle.newsletterInput} onChange={handleNewsletterInput}/>
                            <button className={newsletterLayoutStyle.newsletterSubscribeButton} onClick={handleNewsletterSubsribe}>SUBSCRIBE</button>
                        </div>
                        {newsletterEmailError && <p style={{color: "red", fontSize: "small"}}>Please enter a valid Gmail Id.</p>}
                    </div>
                </div>:
                <div className={newsletterLayoutStyle.newsletterChild} style={{backgroundImage: "url('/static/bg.png')"}}>
                    <div className={newsletterLayoutStyle.blurBg}>
                        <div className={newsletterLayoutStyle.newsletterContentContainer} style={{marginTop: "2rem"}}>
                            <p className={newsletterLayoutStyle.newsletterTitle}>THANKYOU</p>
                            <p className={newsletterLayoutStyle.newsletterContent}>for subscribing the newsletter!!!</p>
                        </div>
                        <img src="/static/newsletter.svg" className={newsletterLayoutStyle.newsletterChildImage} />
                    </div>
                </div>
            }
        </div>
    );
}

export default NewsletterLayout;