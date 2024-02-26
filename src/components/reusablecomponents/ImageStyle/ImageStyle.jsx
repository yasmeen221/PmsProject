const ImageStyle = (props) => {
  // eslint-disable-next-line react/prop-types
  const { src, alt, className, personName, caption } = props;
  return (
    <>
      <div className="flex-row">
        <p className="text-xs mb-1 font-custom font-fromAndToWeight uppercase text-fontColor-fromAndToColor">
          {caption}
        </p>
        <div className="flex ">
          <div className="mr-3 inline-block h-[1.5rem] w-[1.5rem]">
            <img
              src={src}
              alt={alt}
              className={`h[1.5rem] border-1 w-[1.5rem] rounded-full border-[#EFEFF5] object-contain ${className}`}
            />
          </div>
          <p className="font-custom text-body1Size font-captionRegWeight text-fontColor-blackBaseColor ">
            {personName}
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageStyle;
