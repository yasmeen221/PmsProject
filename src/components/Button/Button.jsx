import Icons from "../../themes/icons";

const Button = ({
  buttonText,
  onClick,
  className,
  iconLeft,
  iconRight,
  isLoading,
  ...rest
}) => {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <button
        className={` inline-flex items-center ${!iconLeft && !iconRight ? "justify-center" : "justify-between"} rounded-buttonRadius bg-buttonColor-baseColor p-buttonPadding text-buttonFontSize font-buttonWeight  ${className}`}
        onClick={onClick}
        {...rest}
      >
        {iconLeft && <div className="px-2"> {iconLeft}</div>}
        {isLoading?<Icons.Loading />:buttonText}
        {iconRight && <div className="px-2"> {iconRight}</div>}
      </button>
    </>
  );
};

export default Button;
