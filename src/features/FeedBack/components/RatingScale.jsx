const RangeSlider = ({index,value,setValue}) => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event) => {
    setValue(index, parseInt(event.target.value));
  };

  return (
    <div className="relative m-6 ">
      <div className="flex justify-between mb-6">
        <h3 className="font-bold">Rate the competency</h3>
        <span className="text-buttonColor-baseColor font-medium">{value}/10</span>
      </div>

      <div className="flex space-x-11 ">
        <div className="w-[10%] ">
          <img
            src="../../../../public/rocket-312767_1280.png"
            alt="rocket"
            className=""
          />
        </div>
        <div className="w-[90%]">
          <input
            id="labels-range-input"
            type="range"
            value={value}
            min={1}
            max={10}
            onChange={handleChange}
            className="w-full  bg-slate-50 rounded-lg appearance-none cursor-pointer  h-5"
          />
          <div className="flex justify-between mt-2">
      {numbers.map((number) => (
        <span key={number} className="text-sm text-gray-500 dark:text-gray-400">
          {number}
        </span>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
