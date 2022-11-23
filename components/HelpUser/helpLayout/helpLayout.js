import helpLayoutStyle from "./helpLayout.module.css";
import PageAboutLayout from "../../pageAboutLayout/pageAboutLayout";
import HelpQuestionsLayout from "../helpQuestionsLayout/helpQuestionsLayout";

const HelpLayout = () => {
    const questionAnswers = [
        {
            question: "Who should I contact if I need any help or support?",
            answer: "If you need any support or help, you can connect us on our helpline service (+91 7217746275) or you can email us on (query@oneHowl.ac.in). We will try our best to help you out. 😇"
        },
        {
            question: "How can I pay for my order?",
            answer: "OneHowl currently accepts the payment in Cash/UPI at the time of delivery. We are working on integrating the payment platforms. Soon you will be able to pay for your orders using payment method of your choice. 😊"
        },
        {
            question: "How to see the details of any product?",
            answer: "You first need to add the product in your cart. Click on the name of the product once you add it in your cart. 😃"
        },
        {
            question: "Is there a minimum order value?",
            answer: "We have no minimum order value and you can order for any amount. 😎"
        },
        {
            question: "Do you charge for delivery?",
            answer: "Delivery fee varies from place to place and is applicable if order value is below a certain amount. Additionally, certain products might have fixed packaging fees. Delivery fee (if any) is specified on the 'Confirm Order' page. 😃"
        },
        {
            question: "Which area do we currently serve?",
            answer: "OneHowl is just in East Delhi as of now. But don't worry, we are extending our services to reach each and everyone of you. 😉"
        },
        {
            question: "Can I order in advance?",
            answer: "We currently do not support this functionality. All our orders are placed and executed on-demand. 😇"
        },
        {
            question: "How can I signout from OneHowl?",
            answer: "Once you logged in, you can signout from the account section. 😔"
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