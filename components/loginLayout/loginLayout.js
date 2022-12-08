import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { indianStates } from "../utils/indianStates";
import loginLayoutStyle from "./loginLayout.module.css";
import LoaderLayout from "../loaderLayout/loaderLayout";
import InputLayout from "../Attributes/inputLayout/inputLayout";
import { getSession, signIn, useSession } from "next-auth/react";
import { productSelector } from "../store/reducers/productReducer";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import inputLayoutStyle from "../Attributes/inputLayout/inputLayout.module.css";

const LoginLayout = () => {
    const bg = ["/static/bg.png", "/static/bg2.png"];

    const router = useRouter();
    const {data: session} = useSession();
    const [states, setStates] = useState(false);
    const [title, setTitle] = useState("Login");
    const products = useSelector(productSelector);
    const [bgImage, setBgImage] = useState(bg[1]);
    const [onSignUp, setOnSignUp] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

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
        state: "Please enter your state.",
        city: "",
        pinCode: "",
        phoneNumber: "",
    });

    useEffect(() => {
        const addDataToMongo = async() => {
            const session = await getSession();
            if(session) {
                setShowLoader(true);
                const body = {
                    _id: session.user.email,
                }
                axios.post("/api/addUserData", body)
                    .then((response) => {
                        if(response.data.userExist) {
                            router.push("/");
                        }
                        else {
                            setShowLoader(false);
                            toggleLogin();
                            setInputData({
                                ...inputData,
                                firstName: session.user.name.split(" ")[0]? session.user.name.split(" ")[0]: "",
                                lastName: session.user.name.split(" ")[1]? session.user.name.split(" ")[1]: ""
                            })
                        }
                    })
            }
        }
        addDataToMongo();
    }, [])

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

    const toggleStates = () => {
        setStates(!states);
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
        if(!inputData.firstName || !inputData.lastName || !inputData.address || inputData.state == "Please enter your state." || !inputData.city || !inputData.pinCode || errors.pinCode || !inputData.phoneNumber || errors.phoneNumber) {
            setProceedError(true);
            setTimeout(() => {
                setProceedError(false);
            }, 2000);
        }
        else {
            setShowLoader(true);
            const body = {
                _id: session.user.email,
                info: {
                    firstName: inputData.firstName,
                    lastName: inputData.lastName,
                    address: inputData.address,
                    state: inputData.state,
                    city: inputData.city,
                    pinCode: inputData.pinCode,
                    phoneNumber: inputData.phoneNumber,
                    newsletterEmail: ""
                },
                cart: []
            }
            axios.post("/api/addUserData", body)
                .then((response) => {
                    if(response.data.error) {
                        setShowLoader(false);
                        window.alert("Something went wrong. Please try again.")
                    }
                    else {
                        router.push("/");
                    }
                })
        }
    }

    const toggleLogin = () => {
        setBgImage(title == "Login"? bg[0]: bg[1])
        setTitle(title == "Login"? "Your Details": "Login");
        setOnSignUp(!onSignUp);
    }

    return (
        <div className={loginLayoutStyle.loginParent} style={{backgroundImage: `url(${bgImage})`}}>
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
                                    <p className={loginLayoutStyle.inputText}>Please verify your E-mail.</p>
                                </div>
                            </div>:
                            <div className={loginLayoutStyle.loginDetails}>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your first Name." value={session.user.name.split(" ")[0]? session.user.name.split(" ")[0]: ""} type="text" title="First Name" important="*" width="100%" getInputData={handleFirstName} />
                                    {errors.firstName && <p className={loginLayoutStyle.error}>First name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your last Name." value={session.user.name.split(" ")[1]? session.user.name.split(" ")[1]: ""} type="text" title="Last Name" important="*" width="100%" getInputData={handleLastName} />
                                    {errors.lastName && <p className={loginLayoutStyle.error}>Last name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your address." type="text" title="Address" important="*" width="100%" getInputData={handleAddress} />
                                    {errors.address && <p className={loginLayoutStyle.error}>Address is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.stateParent}>
                                    <div style={{width: "100%", margin: "0.5rem 0", marginBottom: "0"}}>
                                        <p className={inputLayoutStyle.inputTitle}>State<span style={{color: "red"}}>*</span></p>
                                        <div className={inputLayoutStyle.input} style={{padding: "0.2rem 0.8rem"}} onClick={toggleStates}>
                                            {inputData.state == "Please enter your state."? <p className={loginLayoutStyle.inputText}>Please enter your state.</p>: <p className={loginLayoutStyle.inputText} style={{color: "black"}}>{inputData.state}</p>}
                                        </div>
                                    </div>
                                    {
                                        states && 
                                            <div className={loginLayoutStyle.indianStatesContainer}>
                                                {
                                                    Object.keys(indianStates).map((item, index) => {
                                                        return (
                                                            <p key={index} className={loginLayoutStyle.indianStatesTitle} onClick={() => {setInputData({...inputData, state: indianStates[item]}, setStates(false))}}>{indianStates[item]}</p>
                                                        );
                                                    })
                                                }
                                            </div>
                                    }
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
                                <ButtonLayout buttonText="Proceed" buttonWidth="60%" buttonPadding="10px" buttonBgColor="rgb(57 62 64)" buttonBgHoverColor="#3bb77e" handleButtonClick={handleProceedButton} />
                            </div>
                    }
                </div>
                {
                    proceedError &&
                        <div className={loginLayoutStyle.fillInputProperlyError}>
                            <p style={{color: "white", margin: "0", fontSize: "small"}}>Please fill the form properly.</p>
                        </div>
                }
                {showLoader && <LoaderLayout title="Please Wait." />}
            </div>
        </div>
    );
}

export default LoginLayout;