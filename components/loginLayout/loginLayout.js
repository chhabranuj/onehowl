import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import loginLayoutStyle from "./loginLayout.module.css";
import InputLayout from "../Attributes/inputLayout/inputLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import inputLayoutStyle from "../Attributes/inputLayout/inputLayout.module.css";

const LoginLayout = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [title, setTitle] = useState("Sign In");
    const [onSignUp, setOnSignUp] = useState(false);
    const [navigateTo, setNavigateTo] = useState("Sign Up");
    const [proceedError, setProceedError] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        pinCode: false,
        phoneNumber: false,
    });
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        pinCode: "",
        phoneNumber: "",
    });

    useEffect(() => {})

    const navigateToMainPage = () => {
        router.push("/");
    }

    const handleFirstName = (value) => {
        setInputData({
            ...inputData,
            firstName: value
        });
        setProceedError(false);

        if(!value) {
            setErrors({
                ...errors,
                firstName: true
            });
        }
        else {
            setErrors({
                ...errors,
                firstName: false
            });
        }
    }

    const handleLastName = (value) => {
        setInputData({
            ...inputData,
            lastName: value
        });
        setProceedError(false);

        if(!value) {
            setErrors({
                ...errors,
                lastName: true
            });
        }
        else {
            setErrors({
                ...errors,
                lastName: false
            });
        }
    }

    const handleAddress = (value) => {
        setInputData({
            ...inputData,
            address: value
        });
        setProceedError(false);

        if(!value) {
            setErrors({
                ...errors,
                address: true
            });
        }

        else {
            setErrors({
                ...errors,
                address: false
            });
        }
    }

    const handleCity = (value) => {
        setInputData({
            ...inputData,
            city: value
        });
        setProceedError(false);

        if(!value) {
            setErrors({
                ...errors,
                city: true
            });
        }
        else {
            setErrors({
                ...errors,
                city: false
            });
        }
    }
    const handlePinCode = (value) => {
        setInputData({
            ...inputData,
            pinCode: value
        });
        setProceedError(false);

        if(value.length  != 6) {
            setErrors({
                ...errors,
                pinCode: true
            });
        }
        else {
            setErrors({
                ...errors,
                pinCode: false
            });
        }
    }
    const handlePhoneNumber = (value) => {
        setInputData({
            ...inputData,
            phoneNumber: value
        });
        setProceedError(false);

        if(value.length != 10) {
            setErrors({
                ...errors,
                phoneNumber: true
            });
        }
        else {
            setErrors({
                ...errors,
                phoneNumber: false
            });
        }
    }

    const handleProceedButton = () => {
        if(!inputData.firstName || !inputData.lastName || !inputData.address || !inputData.city || !inputData.pinCode || errors.pinCode || !inputData.phoneNumber || errors.phoneNumber) {
            setProceedError(true);
        }
        else {
            signIn("google");
        }
    }

    const toggleLogin = () => {
        setTitle(title == "Sign In"? "Sign Up": "Sign In");
        setNavigateTo(navigateTo == "Sign In"? "Sign Up": "Sign In");
        setOnSignUp(!onSignUp);
    }



    return (
        <div className={loginLayoutStyle.loginParent}>
            <div className={loginLayoutStyle.loginChild}>
                <div className={loginLayoutStyle.backButtonContainer} onClick={navigateToMainPage}>
                    <BsArrowLeft className={loginLayoutStyle.backButton}/>
                </div>
                <div className={loginLayoutStyle.loginContainer}>
                    <p className={loginLayoutStyle.heading}>{title}</p>
                    <p className={loginLayoutStyle.subHeading}>Please enter your details.</p>
                    {
                        !onSignUp?
                            <div style={{width: "60%", margin: "0.5rem 0"}}>
                                <p className={inputLayoutStyle.inputTitle}>E-mail<span style={{color: "red"}}>*</span></p>
                                <div className={inputLayoutStyle.input} style={{padding: "0.2rem 0.8rem"}} onClick={() => signIn("google")}>
                                    <p className={loginLayoutStyle.inputText}>Please enter your E-mail.</p>
                                </div>
                            </div>:
                            <div className={loginLayoutStyle.loginDetails}>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your first Name." type="text" title="First Name" important="*" width="100%" getInputData={handleFirstName} />
                                    {errors.firstName && <p className={loginLayoutStyle.error}>First name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your last Name." type="text" title="Last Name" important="*" width="100%" getInputData={handleLastName} />
                                    {errors.lastName && <p className={loginLayoutStyle.error}>Last name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your address." type="text" title="Address" important="*" width="100%" getInputData={handleAddress} />
                                    {errors.address && <p className={loginLayoutStyle.error}>Address is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer} style={{flexDirection: "row"}}>
                                    <div style={{width: "100%"}}>
                                        <InputLayout placeholder="Enter your city." type="text" title="City" important="*" width="90%" getInputData={handleCity} />
                                        {errors.city && <p className={loginLayoutStyle.error}>City is incorrect.</p>}
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <InputLayout placeholder="Enter your pin code." type="number" title="Pin Code" important="*" width="100%" getInputData={handlePinCode} />
                                        {errors.pinCode &&<p className={loginLayoutStyle.error}>Pin Code is incorrect.</p>}
                                    </div>
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your phone number." type="number" title="Phone Number" important="*" width="100%" getInputData={handlePhoneNumber} />
                                    {errors.phoneNumber && <p className={loginLayoutStyle.error}>Phone Number is incorrect.</p>}
                                </div>
                                <ButtonLayout buttonText="Proceed" buttonWidth="60%" buttonPadding="10px" buttonBgColor="rgb(57 62 64)" buttonBgHoverColor="black" handleButtonClick={handleProceedButton} />
                            </div>
                    }
                    <p className={loginLayoutStyle.subHeading} style={{fontSize: "small"}}>Don't have an account. <span style={{fontWeight: "bold", textDecoration: "underline", cursor: "pointer"}} onClick={toggleLogin}>{navigateTo}</span>.</p>
                </div>
                {
                    proceedError &&
                        <div className={loginLayoutStyle.fillInputProperlyError}>
                            <p style={{color: "white", margin: "0", fontSize: "small"}}>Please fill the form properly.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default LoginLayout;