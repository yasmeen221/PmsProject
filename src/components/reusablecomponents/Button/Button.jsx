const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { buttonText, onClick, className, iconLeft, iconRight, ...rest } =
    props;
  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <button
        className={` inline-flex items-center rounded-buttonRadius bg-buttonColor-baseColor p-buttonPadding text-buttonFontSize font-buttonWeight  text-fontColor-whiteBaseColor ${className}`}
        onClick={onClick}
        {...rest}
      >
        {iconLeft && <span className="px-2"> {iconLeft}</span>}
        {buttonText}
        {iconRight && <span className="px-2"> {iconRight}</span>}
      </button>
    </>
  );
};

export default Button;
