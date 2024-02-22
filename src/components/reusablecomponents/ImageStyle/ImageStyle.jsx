import React from 'react';

const ImageStyle = (props) => {
    const { src, alt, className } = props
    return (
        <img src={src} alt={alt} className={`object-contain w-[1.5rem] h[1.5rem] border-1 border-[#EFEFF5] ${className}`} />

    );
};

export default ImageStyle;