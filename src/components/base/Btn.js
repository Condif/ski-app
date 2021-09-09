
const BaseBtn = ({className = "", children, onClick, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`BaseBtn ${className}`}>
            {children}
        </button>
    )
}
export default BaseBtn;