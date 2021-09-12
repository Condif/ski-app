
const BaseBtn = ({className = "", children, onClick, disabled, type}) => {
    return (
        <button type={type || "button"} disabled={disabled} onClick={onClick} className={`BaseBtn ${className}`}>
            {children}
        </button>
    )
}
export default BaseBtn;