const RangeSlider = ({index,value,setValue}) => {


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
            <span className="text-sm text-gray-500 dark:text-gray-400">1</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">2</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">3</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">4</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">5</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">6</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">7</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">8</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">9</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
