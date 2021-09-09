import { useState } from "react";
import { useClickOutside } from "../../hooks/clickOutside";
import BaseDropdownContent from "./DropdownContent";
import Icon from '@mdi/react'

const BaseDropdown = ({
    list,
    selected,
    icon,
    buttonClass,
    iconClass,
    selectedClass,
    handleChange,
    index,
    contentClass,
    className
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    let dropdownRef = useClickOutside(() => {
        setIsOpen(false);
    });

    return (
        <div className={className ? `BaseDropdown ${className}`: 'BaseDropdown'} ref={dropdownRef}>
            <button
                className={selectedClass}
                onClick={() => handleIsOpen(!isOpen)}
            >
                <span>{selected.name}</span>
                <Icon
                    path={icon}
                    size={1}
                ></Icon>
            </button>

            {isOpen && <BaseDropdownContent
                list={list}
                icon={icon}
                buttonClass={buttonClass}
                iconClass={iconClass}
                handleIsOpen={handleIsOpen}
                handleChange={handleChange}
                isOpen={isOpen}
                selected={selected}
                index={index}
                className={contentClass}
            ></BaseDropdownContent>}
        </div>
    );
};

export default BaseDropdown;
