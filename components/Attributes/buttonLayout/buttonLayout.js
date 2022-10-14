const ButtonLayout = (props) => {

    const handleClick = () => {
        props.handleButtonClick();
    }

    return (
        <button className="button" onClick={handleClick}>
            {props.buttonText}
            &nbsp;&nbsp;{props.buttonIcon}
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