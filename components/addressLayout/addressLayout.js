import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { indianStates } from "../utils/indianStates";
import LoaderLayout from "../loaderLayout/loaderLayout";
import addressLayoutStyle from "./addressLayout.module.css";
import { cartSelector } from "../store/reducers/cartReducer";
import { userSelector } from "../store/reducers/userReducer";
import OrderPreview from "../orderPreview/orderPreviewLayout";
import InputLayout from "../Attributes/inputLayout/inputLayout";
import PageAboutLayout from "../pageAboutLayout/pageAboutLayout";
import ButtonLayout from "../Attributes/buttonLayout/buttonLayout";
import inputLayoutStyle from "../Attributes/inputLayout/inputLayout.module.css";

const AddressLayout = () => {
    const router = useRouter();
    const cart = useSelector(cartSelector);
    const user = useSelector(userSelector);
    const [states, setStates] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const [addressTitle, setAddressTitle] = useState("Your Address");
    const [addressData, setAddressData] = useState({
        address: user.address,
        state: user.state,
        city: user.city,
        pinCode: user.pinCode
    });
    const [tempAddressData, setTempAddressData] = useState({
        tempAddress: "",
        tempState: "Please enter your state.",
        tempCity: "",
        tempPinCode: ""
    });
    const [errors, setErrors] = useState({
        tempAddressError: false,
        tempCityError: false,
        tempPinCodeError: false,
        serveError: false,
        saveError: false
    });

    useEffect(() => {
        if(cart.length == 0) {
            router.push("/");
        }
    })

    const togggleNewAddress = () => {
        setNewAddress(!newAddress);
        setStates(false);
        setTempAddressData({
            ...tempAddressData,
            tempState: "Please enter your state."
        });
        setErrors({
            tempAddressError: false,
            tempCityError: false,
            tempPinCodeError: false,
            serveError: false,
            saveError: false
        });
    }

    const navigateToOrderConfirmed = () => {
        setNewAddress(false);
        if(addressData.state != "Delhi") {
            setErrors({
                ...errors,
                serveError: true
            });
        }
        else {
            setShowLoader(true);
            router.push({
                pathname: "/confirmOrder",
                query: {addressData: JSON.stringify(addressData)}
            }, "/confirmOrder");
        }
    }

    const handleAddress = (value) => {
        setTempAddressData({
            ...tempAddressData,
            tempAddress: value
        });

        if(!value) {
            setErrors({
                ...errors,
                tempAddressError: true,
                saveError: false
            });
        }
        else {
            setErrors({
                ...errors,
                tempAddressError: false
            });
        }
    }

    const toggleStates = () => {
        setStates(!states);
    }

    const handleCity = (value) => {
        setTempAddressData({
            ...tempAddressData,
            tempCity: value
        });

        if(!value) {
            setErrors({
                ...errors,
                tempCityError: true,
                saveError: false
            });
        }
        else {
            setErrors({
                ...errors,
                tempCityError: false
            });
        }
    }

    const handlePinCode = (value) => {
        setTempAddressData({
            ...tempAddressData,
            tempPinCode: value
        });

        if(value.length != 6) {
            setErrors({
                ...errors,
                tempPinCodeError: true,
                saveError: false
            });
        }
        else {
            setErrors({
                ...errors,
                tempPinCodeError: false
            })
        }
    }

    const saveNewAddress = () => {
        if(!tempAddressData.tempAddress || tempAddressData.tempState == "Please enter your state." || !tempAddressData.tempCity || !tempAddressData.tempPinCode || tempAddressData.tempPinCode.length != 6) {
            setErrors({
                ...errors,
                saveError: true
            });
        }
        else {
            setErrors({
                ...errors,
                saveError: false
            });
            setNewAddress(false);
            setAddressData({
                address: tempAddressData.tempAddress,
                state: tempAddressData.tempState,
                city: tempAddressData.tempCity,
                pinCode: tempAddressData.tempPinCode
            });
            setAddressTitle("New Address");
        }
    }

    return (
        <div className={addressLayoutStyle.addressParent}>
            <PageAboutLayout title="Address" path={<span><span style={{color: "rgb(119, 164, 100)"}}>Cart &#8658;&nbsp;</span> <span>Address</span></span> } />
            <div className={addressLayoutStyle.addressChild}>
                <div className={addressLayoutStyle.containerParent}>
                    <OrderPreview />
                </div>
                <div className={addressLayoutStyle.containerParent}>
                    <div className={addressLayoutStyle.container}>
                        <p className={addressLayoutStyle.title}>{addressTitle}</p>
                        <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Address: <span style={{color: "grey", fontWeight: "500", fontSize: "small"}}>{addressData.address}</span></p>
                        <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>State: <span style={{color: "grey", fontWeight: "500", fontSize: "small"}}>{addressData.state}</span></p>
                        <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>City: <span style={{color: "grey", fontWeight: "500", fontSize: "small"}}>{addressData.city}</span></p>
                        <p style={{margin: "0"}} className={addressLayoutStyle.totalTitle}>Pin Code: <span style={{color: "grey", fontWeight: "500", fontSize: "small"}}>{addressData.pinCode}</span></p>
                    </div>
                    <div className={addressLayoutStyle.newAddressOrProceedButtonParent}>
                        <ButtonLayout buttonText="Enter New Address" buttonWidth="60%" buttonPadding="1rem 0" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={togggleNewAddress} />
                        <ButtonLayout buttonText="Proceed" buttonWidth="30%" buttonPadding="1rem 0" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" rightButtonIcon={<BsArrowRight />} handleButtonClick={navigateToOrderConfirmed} />
                    </div>
                    {
                        errors.serveError &&
                            <div className={addressLayoutStyle.serveError}>
                                <p className={addressLayoutStyle.serveErrorTitle}>Sorry, we don't serve in {addressData.state}.</p>
                            </div>
                    }
                    {
                        newAddress &&
                            <div className={addressLayoutStyle.container}>
                                <p className={addressLayoutStyle.title}>New Address</p>
                                <InputLayout placeholder="Please enter your address." type="text" title="Address Line" important="*" width="100%" getInputData={handleAddress} />
                                {errors.tempAddressError && <p className={addressLayoutStyle.error}>Address is not valid.</p>}
                                <div className={addressLayoutStyle.stateParent}>
                                    <div style={{width: "100%", margin: "0.5rem 0", marginBottom: "0"}}>
                                        <p className={inputLayoutStyle.inputTitle}>State<span style={{color: "red"}}>*</span></p>
                                        <div className={inputLayoutStyle.input} style={{padding: "0.2rem 0.8rem"}} onClick={toggleStates}>
                                            {tempAddressData.tempState == "Please enter your state."? <p className={addressLayoutStyle.inputText}>Please enter your state.</p>: <p className={addressLayoutStyle.inputText} style={{color: "black"}}>{tempAddressData.tempState}</p>}
                                        </div>
                                    </div>
                                    {
                                        states && 
                                            <div className={addressLayoutStyle.indianStatesContainer}>
                                                {
                                                    Object.keys(indianStates).map((item, index) => {
                                                        return (
                                                            <p key={index} className={addressLayoutStyle.indianStatesTitle} onClick={() => {setTempAddressData({...tempAddressData, tempState: indianStates[item]}, setStates(false))}}>{indianStates[item]}</p>
                                                        );
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                                <div className={addressLayoutStyle.inputContainer}>
                                    <div style={{width: "100%"}}>
                                        <InputLayout placeholder="Enter your city." type="text" title="City" important="*" width="90%" getInputData={handleCity} />
                                        {errors.tempCityError && <p className={addressLayoutStyle.error}>City is not valid.</p>}
                                    </div>
                                    <div style={{width: "100%"}}>
                                        <InputLayout placeholder="Enter your pin code." type="number" title="Pin Code" important="*" width="100%" getInputData={handlePinCode} />
                                        {errors.tempPinCodeError && <p className={addressLayoutStyle.error}>Pin Code is not valid.</p>}
                                    </div>
                                </div>
                                <div className={addressLayoutStyle.newAddressAndErrorContainer}>
                                    <div className={addressLayoutStyle.newAddressButtonsContainer}>
                                        <ButtonLayout buttonText="Cancel" buttonWidth="45%" buttonPadding="0.75rem 0" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={togggleNewAddress} />
                                        <ButtonLayout buttonText="Save" buttonWidth="50%" buttonPadding="0.75rem 0" buttonBgColor="#3BB77E" buttonBgHoverColor="#FDC040" handleButtonClick={saveNewAddress} />
                                    </div>
                                    {errors.saveError && <p className={addressLayoutStyle.error}>Please fill the details properly.</p>}
                                </div>
                            </div>
                    }
                </div>
            </div>
            {showLoader && <LoaderLayout title="Please Wait. While we get your summary." />}
        </div>
    );
}

export default AddressLayout;