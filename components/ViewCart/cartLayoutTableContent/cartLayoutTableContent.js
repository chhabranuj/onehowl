import { useDispatch } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { addItem, removeItem } from "../../store/reducers/cartReducer";
import cartLayoutTableContentStyle from "./cartLayoutTableContent.module.css";

const CartLayoutTableContent = (props) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({id: props.data.id}));
    }

    const handleRemoveItem = () => {
        dispatch(removeItem({id: props.data.id}));
    }

    return (
        <tr>
            <td className={cartLayoutTableContentStyle.cartTableContent}></td>
            <td className={cartLayoutTableContentStyle.cartTableContent} style={{color: "#3BB77E"}}>{props.data.name}</td>
            <td className={cartLayoutTableContentStyle.cartTableContent}>₹{Math.floor(props.data.realPrice * (100 - props.data.discount) * 0.01)}</td>
            <td className={cartLayoutTableContentStyle.cartTableContent}>
                <div className={cartLayoutTableContentStyle.addRemoveConatiner}>
                    <IoMdRemoveCircle style={{fontSize: "x-large", color: "rgb(255,111,111)", cursor: "pointer"}} onClick={handleRemoveItem} />
                    <p style={{margin: "0 0.4rem"}}>{props.data.quantity}</p>
                    <IoMdAddCircle style={{fontSize: "x-large", color: "#3BB77E", cursor: "pointer"}} onClick={handleAddItem} />
                </div>
            </td>
            <td className={cartLayoutTableContentStyle.cartTableContent}>₹{(Math.floor(props.data.realPrice * (100 - props.data.discount) * 0.01) * props.data.quantity)}</td>
        </tr>
    );
}

export default CartLayoutTableContent;