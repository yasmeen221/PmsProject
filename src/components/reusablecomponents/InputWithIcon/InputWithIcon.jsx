import React from 'react'

export default function InputWithIcon({icon,placeholder}) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="max-w-56 h-12 text-fontColor-grayBaseColor  border border-borderColor-baseBorderColor rounded-md py-3 px-6 pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
    </div>
  )
}
