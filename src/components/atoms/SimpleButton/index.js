const SimpleButton = ({ classes = "", callbackFn = () => { }, children }) => {
    return (
        <button
            className={`${classes}`}
            onClick={() => callbackFn()}
        >
            {children}
        </button>
    )
}

export default SimpleButton