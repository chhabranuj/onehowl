import helpLayoutStyle from "./helpLayout.module.css";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import HelpQuestionsLayout from "../helpQuestionsLayout/helpQuestionsLayout";

const HelpLayout = () => {
    const questionAnswers = [
        {
            question: "Who should I contact if I need any help or support?",
            answer: <p>If you need any support or help, you can connect us on our helpline service <a href="tel:+917217746275" style={{color: "#3BB77E"}}>(+91 7217746275)</a> or you can email us on <a href="mailto:anujchhabra1901@gmail.com" style={{color: "#3BB77E"}}>(query@oneHowl.ac.in)</a>. We will try our best to help you out. 😇</p>
        },
        {
            question: "How can I pay for my order?",
            answer: <p>OneHowl currently accepts the payment in Cash/UPI at the time of delivery.<br/>We are working on integrating the payment platforms. Soon you will be able to pay for your orders using payment method of your choice. 😊</p>
        },
        {
            question: "How to see the details of any product?",
            answer: <p>You first need to add the product in your cart. Click on the name of the product once you add it in your cart. 😃"</p>
        },
        {
            question: "Is there a minimum order value?",
            answer: <p>We have no minimum order value and you can order for any amount. 😎"</p>
        },
        {
            question: "Do you charge for delivery?",
            answer: <p>Delivery fee varies from place to place and is applicable if order value is below a certain amount.<br/>Additionally, certain products might have fixed packaging fees. Delivery fee (if any) is specified on the 'Confirm Order' page. 😃</p>
        },
        {
            question: "Which area do you currently serve?",
            answer: <p>OneHowl is just in East Delhi and North Delhi as of now. But don't worry, we are extending our services to reach each and everyone of you. 😉</p>
        },
        {
            question: "Can I order in advance?",
            answer: <p>We currently do not support this functionality. All our orders are placed and executed on-demand. 😇</p>
        },
        {
            question: "How can I signout from OneHowl?",
            answer: <p>Once you logged in, you can signout from the account section. 😔"</p>
        },
    ]

    return (
        <div className={helpLayoutStyle.helpParent}>
            <PageAboutLayout title="Help" path={<span>Help</span>} />
            <div className={helpLayoutStyle.questionChild}>
                {
                    questionAnswers.map((item, index) => {
                        return (
                            <HelpQuestionsLayout data={item} key={index} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default HelpLayout;