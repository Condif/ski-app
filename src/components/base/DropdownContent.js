
const BaseDropdownContent = ({
    list,
    buttonClass,
    handleIsOpen,
    handleChange,
    isOpen,
    selected,
    className,
}) => {
    const handleClick = (item, i) => {
        handleIsOpen(!isOpen);
        handleChange(item, i);
    };
    return (
        <div
            className={
                className ? `BaseDropdownContent ${className}` : "BaseDropdownContent"
            }
        >
            {list?.map((item, i) => {
                return (
                    selected.name !== item.name && (
                        <button
                            key={i}
                            onClick={() => handleClick(item, selected)}
                            className={buttonClass}
                        >
                            <span>{item.name}</span>
                        </button>
                    )
                );
            })}
        </div>
    );
};

export default BaseDropdownContent;
