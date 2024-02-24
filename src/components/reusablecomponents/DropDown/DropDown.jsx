import { useState } from 'react';
import Button from '../Button/Button';
import Icons from '../../../themes/icons';

const DropDown = ({
  DropDownText,
  onClick,
  className,
  arrowIcon,
  threeDotsIcon,
  children,
  open,
  ...rest
}) => {
  const [position, setPosition] = useState('right');
  const handleClick = (e) => {
    setPosition(e.clientX > window.innerWidth / 2 ? 'right' : 'left');
  };
  const handleArrayEvents = (e) => {
    const events = [handleClick, onClick];
    events.forEach((event) => (event == handleClick ? event(e) : event()));
  };
  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <div className="relative inline-block ">
        <Button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`${className}  ${threeDotsIcon ? 'border-2 border-borderColor-baseBorderColor' : ''} `}
          onClick={(e) => handleArrayEvents(e)}
          buttonText={DropDownText}
          iconRight={
            arrowIcon ? (
              <Icons.ArrowDownWhite />
            ) : threeDotsIcon ? (
              <Icons.ThreeDotsIcon />
            ) : null
          }
        />
        <div
          id="dropdown"
          className={`z-10 ${open == false ? 'hidden' : 'block'} absolute  mt-2 w-auto  rounded-lg  bg-white  shadow `}
          style={{ [position]: 0 }}
        >
          <ul
            className="py-2 text-sm text-fontColor-blackBaseColor"
            aria-labelledby="dropdownDefaultButton"
          >
            {children}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDown;
