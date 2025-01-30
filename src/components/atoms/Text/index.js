const Text = ({ classes = "", children }) => {
    return (
        <p className={`text-gray-700 ${classes}`}>{children}</p>
    )
}

export default Text