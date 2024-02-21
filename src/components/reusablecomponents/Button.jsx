const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { buttonText, onClick, className, icon, ...rest } = props;
  return (
    <>
      {/* Don't change  the html tag here. It will break everything */}
      <button
        className={` text-fontColor-50 bg-buttonColor-baseColor text-buttonFontSize p-buttonPadding rounded-buttonRadius font-buttonWeight flex flex-row  items-center ${className}`}
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
