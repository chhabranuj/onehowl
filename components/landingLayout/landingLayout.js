import axios from "axios";
import { useEffect, useState } from "react";
import {useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/reducers/cartReducer";
import landingLayoutStyle from "./landingLayout.module.css";
import { productSelector } from "../store/reducers/productReducer";
import { addUser, userSelector } from "../store/reducers/userReducer";

const LandingLayout = (props) => {
    const dispatch = useDispatch();
    const {data: session} = useSession();
    const user = useSelector(userSelector);
    const products = useSelector(productSelector);
    const images = ["/static/bg.png", "/static/bg2.png"];
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
        }, 10000);
        if(session && !user.firstName) {
            const body = { data: session.user.email }
            axios.post("/api/getUserData", body)
            .then((response) => {
                dispatch(addUser({data: response.data.result.info}));
                response.data.result.cart.map(cartItem => {
                    products.map(productData => {
                        if(productData.category == cartItem.category) {
                            productData.items.map(productItem => {
                                if(productItem.id == cartItem.id) {
                                    dispatch(addItem({id: productItem.id, name: productItem.title, realPrice: productItem.realPrice, discount: productItem.discount, category: productData.categoryId, quantity: cartItem.quantity}));
                                }
                            })
                        }
                    })
                })
            })
        }
    })

    return (
        <div  className={landingLayoutStyle.landingParentContainer}>
                <div className={landingLayoutStyle.landing} style={{"backgroundImage": `url(${activeImage})`}}>
                    <div className={landingLayoutStyle.catchySlogan}>
                        <div className={landingLayoutStyle.catchySloganContainer}>
                            <div>
                                <span style={{"--i":"1"}}>T</span>
                                <span style={{"--i":"2"}}>A</span>
                                <span style={{"--i":"3"}}>S</span>
                                <span style={{"--i":"4"}}>T</span>
                                <span style={{"--i":"5"}}>E</span>
                            </div>
                            <div>
                                <span style={{"--i":"6"}}>&nbsp;&nbsp;T</span>
                                <span style={{"--i":"7"}}>H</span>
                                <span style={{"--i":"8"}}>E</span>
                            </div>
                            <div>
                                <span style={{"--i":"9"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"10"}}>O</span>
                                <span style={{"--i":"11"}}>R</span>
                                <span style={{"--i":"12"}}>L</span>
                                <span style={{"--i":"13"}}>D</span>
                            </div>
                        </div>
                        <div className={landingLayoutStyle.catchySloganContainer}>
                            <div>
                                <span style={{"--i":"14"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"15"}}>I</span>
                                <span style={{"--i":"16"}}>T</span>
                                <span style={{"--i":"17"}}>H</span>
                                <span style={{"--i":"18"}}>O</span>
                                <span style={{"--i":"19"}}>U</span>
                                <span style={{"--i":"20"}}>T</span>
                            </div>
                            <div>
                                <span style={{"--i":"21"}}>&nbsp;&nbsp;L</span>
                                <span style={{"--i":"22"}}>E</span>
                                <span style={{"--i":"23"}}>A</span>
                                <span style={{"--i":"24"}}>V</span>
                                <span style={{"--i":"25"}}>I</span>
                                <span style={{"--i":"26"}}>N</span>
                                <span style={{"--i":"27"}}>G</span>
                            </div>
                            <div>
                                <span style={{"--i":"28"}}>&nbsp;&nbsp;Y</span>
                                <span style={{"--i":"29"}}>O</span>
                                <span style={{"--i":"30"}}>U</span>
                                <span style={{"--i":"31"}}>R</span>
                            </div>
                            <div>
                                <span style={{"--i":"32"}}>&nbsp;&nbsp;C</span>
                                <span style={{"--i":"33"}}>H</span>
                                <span style={{"--i":"34"}}>A</span>
                                <span style={{"--i":"35"}}>I</span>
                                <span style={{"--i":"36"}}>R</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default LandingLayout;

{/* <div>
                            <div>
                                <span style={{"--i":"1"}}>T</span>
                                <span style={{"--i":"2"}}>a</span>
                                <span style={{"--i":"3"}}>s</span>
                                <span style={{"--i":"4"}}>t</span>
                                <span style={{"--i":"5"}}>e</span>
                            </div>
                            <div>
                                <span style={{"--i":"6"}}>&nbsp;&nbsp;T</span>
                                <span style={{"--i":"7"}}>h</span>
                                <span style={{"--i":"8"}}>e</span>
                            </div>
                            <div>
                                <span style={{"--i":"9"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"10"}}>o</span>
                                <span style={{"--i":"11"}}>r</span>
                                <span style={{"--i":"12"}}>l</span>
                                <span style={{"--i":"13"}}>d</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span style={{"--i":"14"}}>&nbsp;&nbsp;W</span>
                                <span style={{"--i":"15"}}>i</span>
                                <span style={{"--i":"16"}}>t</span>
                                <span style={{"--i":"17"}}>h</span>
                                <span style={{"--i":"18"}}>o</span>
                                <span style={{"--i":"19"}}>u</span>
                                <span style={{"--i":"20"}}>t</span>
                            </div>
                            <div>
                                <span style={{"--i":"21"}}>&nbsp;&nbsp;L</span>
                                <span style={{"--i":"22"}}>e</span>
                                <span style={{"--i":"23"}}>a</span>
                                <span style={{"--i":"24"}}>v</span>
                                <span style={{"--i":"25"}}>i</span>
                                <span style={{"--i":"26"}}>n</span>
                                <span style={{"--i":"27"}}>g</span>
                            </div>
                            <div>
                                <span style={{"--i":"28"}}>&nbsp;&nbsp;Y</span>
                                <span style={{"--i":"29"}}>o</span>
                                <span style={{"--i":"30"}}>u</span>
                                <span style={{"--i":"31"}}>r</span>
                            </div>
                            <div>
                                <span style={{"--i":"32"}}>&nbsp;&nbsp;C</span>
                                <span style={{"--i":"33"}}>h</span>
                                <span style={{"--i":"34"}}>a</span>
                                <span style={{"--i":"35"}}>i</span>
                                <span style={{"--i":"36"}}>r</span>
                            </div>
                        </div> */}