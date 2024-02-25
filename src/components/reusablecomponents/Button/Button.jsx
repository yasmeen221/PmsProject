const Button = ({
  buttonText,
  onClick,
  className,
  iconLeft,
  iconRight,
  ...rest
}) => {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <button
        className={` inline-flex items-center ${!iconLeft && !iconRight ? "justify-center" : "justify-between"} rounded-buttonRadius bg-buttonColor-baseColor p-buttonPadding text-buttonFontSize font-buttonWeight  text-fontColor-whiteBaseColor ${className}`}
        onClick={onClick}
        {...rest}
      >
        {iconLeft && <div className="px-2"> {iconLeft}</div>}
        {buttonText}
        {iconRight && <div className="px-2"> {iconRight}</div>}
      </button>
    </>
  );
};

export default Button;
