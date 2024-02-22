const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { buttonText, onClick, className, icon, ...rest } = props;
  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <button
        className={`flex flex-row items-center rounded-buttonRadius bg-buttonColor-baseColor  p-buttonPadding text-buttonFontSize font-buttonWeight  text-fontColor-50 ${className}`}
        onClick={onClick}
        {...rest}
      >
        {icon && <span className="px-2"> {icon}</span>}
        {buttonText}
      </button>
    </>
  );
};

export default Button;
