
const BaseWrapper = ({className = "", children}) => {
    return (
        <div className={`BaseWrapper ${className}`}>
            {children}
        </div>
    )
}
export default BaseWrapper;