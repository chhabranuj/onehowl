import { FaHome } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { RiShoppingCart2Fill } from "react-icons/ri";
import cartLayoutStyle from "./cartLayout.module.css";

const CartLayout = () => {

    return (
        <div className={cartLayoutStyle.cartParent}>
            <p className={cartLayoutStyle.stepsDisplay}>Step <span style={{color: "darkgreen"}}>1</span> of 3</p>
            <div className={cartLayoutStyle.cartMapParent}>
                <div className={cartLayoutStyle.mapSteps}>
                    <RiShoppingCart2Fill />
                    <p className={cartLayoutStyle.stepTitle}>Cart</p>
                </div>
                <hr className={cartLayoutStyle.stepsDivider} />
                <div className={cartLayoutStyle.mapSteps}>
                    <FaHome />
                    <p className={cartLayoutStyle.stepTitle}>Address</p>
                </div>
                <hr className={cartLayoutStyle.stepsDivider}/>
                <div className={cartLayoutStyle.mapSteps}>
                    <BsFillBagCheckFill />
                    <p className={cartLayoutStyle.stepTitle}>Order</p>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;