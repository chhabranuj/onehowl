import Image from "next/image";
import { useDispatch } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import cartLayoutStyle from "../cartLayout/cartLayout.module.css"
import { addItem, removeItem } from "../../store/reducers/cartReducer";

const CartLayoutTableContent = (props) => {
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem({id: props.data.id}));
    }

    const handleRemoveItem = () => {
        dispatch(removeItem({id: props.data.id}));
    }

    return (
        <tr >
            <td className={cartLayoutStyle.cartTableContent}>
                <Image 
                    src={`/static${props.data.image}`}
                    alt="Item Image"
                    width={60}
                    height={60}
                    layout="fixed"
                />
            </td>
            <td className={cartLayoutStyle.cartTableContent} style={{color: "#3BB77E"}}>{props.data.name}</td>
            <td className={cartLayoutStyle.cartTableContent}>₹{Math.round(props.data.realPrice * (100 - props.data.discount) * 0.01)}</td>
            <td className={cartLayoutStyle.cartTableContent}>
                <div className={cartLayoutStyle.addRemoveConatiner}>
                    <IoMdRemoveCircle style={{fontSize: "x-large", color: "rgb(255,111,111)", cursor: "pointer"}} onClick={handleRemoveItem} />
                    <p style={{margin: "0 8px"}}>{props.data.quantity}</p>
                    <IoMdAddCircle style={{fontSize: "x-large", color: "#3BB77E", cursor: "pointer"}} onClick={handleAddItem} />
                </div>
            </td>
            <td className={cartLayoutStyle.cartTableContent}>₹{(Math.round(props.data.realPrice * (100 - props.data.discount) * 0.01) * props.data.quantity)}</td>
        </tr>
    );
}

export default CartLayoutTableContent;