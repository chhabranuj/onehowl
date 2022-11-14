import inputLayoutStyle from "./inputLayout.module.css";

const InputLayout = (props) => {

    const handleInput = (e) => {
        props.getInputData(e.target.value);
    }

    return (
        <div className={inputLayoutStyle.inputParent} style={{width: props.width}}>
            <p className={inputLayoutStyle.inputTitle}>{props.title}<span style={{color: "red"}}>{props.important}</span></p>
            <input placeholder={props.placeholder} defaultValue={props.value} type={props.type} className={inputLayoutStyle.input} onChange={handleInput}/>
        </div>
    );
}

export default InputLayout;