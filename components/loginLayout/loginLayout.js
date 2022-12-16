import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { indianStates } from "../utils/indianStates";
import { useDispatch, useSelector } from "react-redux";
import loginLayoutStyle from "./loginLayout.module.css";
import LoaderLayout from "../loaderLayout/loaderLayout";
import InputLayout from "../Attributes/inputLayout/inputLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import { addUser, userSelector } from "../store/reducers/userReducer";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import inputLayoutStyle from "../Attributes/inputLayout/inputLayout.module.css";

const LoginLayout = () => {
    const bg = ["/static/yellowBg.png", "/static/greenBg.png"];
    const router = useRouter();
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const user = useSelector(userSelector);
    const [states, setStates] = useState(false);
    const [title, setTitle] = useState("Login");
    const [bgImage, setBgImage] = useState(bg[1]);
    const [onSignUp, setOnSignUp] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showUpdateLoader, setShowUpdateLoader] = useState(false);

    const [proceedError, setProceedError] = useState(false);
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        pinCode: false,
        phoneNumber: false,
        newsletterEmail: false,
    });
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        state: "Please enter your state.",
        city: "",
        pinCode: "",
        phoneNumber: "",
        newsletterEmail: ""
    });

    useEffect(() => {
        const addDataToMongo = async() => {
            const session = await getSession();
            if(session && Object.keys(user).length != 0 ) {
                toggleLogin();
                setInputData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    address: user.address,
                    state: user.state,
                    city: user.city,
                    pinCode: user.pinCode,
                    phoneNumber: user.phoneNumber,
                    newsletterEmail: user.newsletterEmail
                });
            }
            if(session && Object.keys(user).length == 0 ) {
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
        setShowLoader(true);
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

    const handleNewsletterEmail = (value) => {
        setInputData({
            ...inputData,
            newsletterEmail: value
        });
        setProceedError(false);

        if(value.split("@")[1] != "gmail.com") {
            setErrors({
                ...errors,
                newsletterEmail: true
            });
        }
        else {
            setErrors({
                ...errors,
                newsletterEmail: false
            });
        }
    }

    const handleSignOutButton = () => {
        signOut();
        router.push("/");
    }

    const handleUpdateButton = () => {
        if(!inputData.firstName || !inputData.lastName || !inputData.address || inputData.state == "Please enter your state." || !inputData.city || !inputData.pinCode || errors.pinCode || !inputData.phoneNumber || errors.phoneNumber || errors.newsletterEmail) {
            setProceedError(true);
            setTimeout(() => {
                setProceedError(false);
            }, 2500);
        }
        else {
            if(user.firstName != inputData.firstName ||
                user.lastName != inputData.lastName ||
                user.address != inputData.address ||
                user.state != inputData.state ||
                user.city != inputData.city ||
                user.pinCode != inputData.pinCode ||
                user.phoneNumber != inputData.phoneNumber ||
                user.newsletterEmail != inputData.newsletterEmail) {
                    setShowUpdateLoader(true);
                    const body = {
                        _id: session.user.email,
                        userData: inputData
                    }
                    axios.post("/api/updateUser", body)
                        .then((response) => {
                            if(!response.data.result) {
                                setShowUpdateLoader(false);
                                setProceedError(true);
                                setTimeout(() => {
                                    setProceedError(false);
                                }, 2500);
                            }
                            else {
                                dispatch(addUser({data: response.data.infoData}));
                                setShowUpdateLoader(false);
                                router.push("/");
                            }
                        })
            }
            else {
                router.push("/");
            }
        }
    }

    const handleProceedButton = () => {
        if(!inputData.firstName || !inputData.lastName || !inputData.address || inputData.state == "Please enter your state." || !inputData.city || !inputData.pinCode || errors.pinCode || !inputData.phoneNumber || errors.phoneNumber) {
            setProceedError(true);
            setTimeout(() => {
                setProceedError(false);
            }, 2500);
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
                                    <InputLayout placeholder="Please enter your first Name." value={inputData.firstName} type="text" title="First Name" important="*" width="100%" getInputData={handleFirstName} />
                                    {errors.firstName && <p className={loginLayoutStyle.error}>First name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your last Name." value={inputData.lastName} type="text" title="Last Name" important="*" width="100%" getInputData={handleLastName} />
                                    {errors.lastName && <p className={loginLayoutStyle.error}>Last name is incorrect.</p>}
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your address." value={inputData.address} type="text" title="Address" important="*" width="100%" getInputData={handleAddress} />
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
                                        <InputLayout placeholder="Enter your city." value={inputData.city} type="text" title="City" important="*" width="90%" getInputData={handleCity} />
                                        {errors.city && <p className={loginLayoutStyle.error}>City is incorrect.</p>}
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <InputLayout placeholder="Enter your pin code." value={inputData.pinCode} type="number" title="Pin Code" important="*" width="100%" getInputData={handlePinCode} />
                                        {errors.pinCode &&<p className={loginLayoutStyle.error}>Pin Code is incorrect.</p>}
                                    </div>
                                </div>
                                <div className={loginLayoutStyle.inputContainer}>
                                    <InputLayout placeholder="Please enter your phone number." value={inputData.phoneNumber} type="number" title="Phone Number" important="*" width="100%" getInputData={handlePhoneNumber} />
                                    {errors.phoneNumber && <p className={loginLayoutStyle.error}>Phone Number is incorrect.</p>}
                                </div>
                                {
                                    user.newsletterEmail &&
                                        <div className={loginLayoutStyle.inputContainer}>
                                            <InputLayout placeholder="Please enter your Newsletter Email." value={inputData.newsletterEmail}  title="Newsletter Email" important="*" width="100%" getInputData={handleNewsletterEmail} />
                                            {errors.newsletterEmail && <p className={loginLayoutStyle.error}>Newsletter Email is incorrect.</p>}
                                        </div>
                                }
                                {
                                    Object.keys(user).length != 0?
                                        <div className={loginLayoutStyle.buttonContainer}>
                                            <ButtonLayout buttonText="Sign Out" buttonWidth="40%" buttonPadding="0.75rem" buttonBgColor="rgb(57 62 64)" buttonBgHoverColor="#CD6155" handleButtonClick={handleSignOutButton} />
                                            <ButtonLayout buttonText="Update" buttonWidth="40%" buttonPadding="0.75rem" buttonBgColor="rgb(57 62 64)" buttonBgHoverColor="#3bb77e" handleButtonClick={handleUpdateButton} />
                                        </div>:
                                        <ButtonLayout buttonText="Proceed" buttonWidth="40%" buttonPadding="0.75rem" buttonBgColor="rgb(57 62 64)" buttonBgHoverColor="#3bb77e" handleButtonClick={handleProceedButton} />
                                }
                            </div>
                    }
                </div>
                {
                    proceedError &&
                        <div className={loginLayoutStyle.fillInputProperlyError}>
                            <p style={{color: "white", margin: "0", fontSize: "small"}}>Please fill the form properly.</p>
                        </div>
                }
                {showLoader && <LoaderLayout title="Please Wait. Preparing the menu." />}
                {showUpdateLoader && <LoaderLayout title="Please Wait. Updating your profile." />}
            </div>
        </div>
    );
}

export default LoginLayout;