import { useState } from "react";
import Button from "../Button/Button";
import Icons from "../../../themes/icons";

const DropDown = (props) => {
    const { DropDownText, onClick, className, arrowIcon, threeDotsIcon, children, ...rest } = props;
    const [position, setPosition] = useState("right")
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        setPosition(e.clientX > window.innerWidth / 2 ? 'right' : 'left');
        setOpen(open => !open)
    };
    return (
        <>
            {/* Don't change  the html tag here. It will break everything */}
            <div className="relative inline-block " >
                <Button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className={`${className}  ${threeDotsIcon ? "border-borderColor-baseBorderColor border-2" : ""} `}
                    onClick={(e) => handleClick(e)}
                    buttonText={DropDownText}
                    iconRight={arrowIcon ? <Icons.ArrowDownWhite />
                        : threeDotsIcon ? <Icons.ThreeDotsIcon /> : null}
                />
                <div id="dropdown"
                    className={`z-10 ${open == false ? "hidden" : "block"} bg-white  rounded-lg shadow  mt-2  w-auto  absolute `} style={{ [position]: 0 }}>
                    <ul className="py-2 text-sm text-fontColor-blackBaseColor" aria-labelledby="dropdownDefaultButton">
                        {children}
                    </ul>
                </div>
            </div>

        </>
    );
};

export default DropDown;
