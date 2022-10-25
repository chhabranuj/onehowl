const ButtonLayout = (props) => {

    const handleClick = () => {
        props.handleButtonClick();
    }

    return (
        <button className="button" onClick={handleClick}>
            {props.leftButtonIcon}&nbsp;&nbsp;
            {props.buttonText}
            &nbsp;&nbsp;{props.rightButtonIcon}
            <style jsx>{`
                .button {
                    color: white;
                    border: none;
                    display: flex;
                    outline: none;
                    cursor: pointer;
                    margin: 0.8rem 0;
                    border-radius: 5px;
                    align-items: center;
                    justify-content: center;
                    width: ${props.buttonWidth};
                    font-size: ${props.fontSize};
                    transition: all 300ms linear 0s;
                    padding: ${props.buttonPadding};
                    background-color: ${props.buttonBgColor};
                }

                .button:hover {
                    background-color: ${props.buttonBgHoverColor};
                }
            `}</style>
            </button>
    );
}

export default ButtonLayout;