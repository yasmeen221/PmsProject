import Icons from "../../../themes/icons";

function TopNav() {
  return (
    <nav className="border-borderColor-100 flex h-[4.438rem] w-full items-center justify-center border-b ">
      <ul className="flex w-[95%]  justify-between  ">
        <li className="flex items-center font-body1Weight ">
          <span>innovaPMS</span> &nbsp;| &nbsp;{' '}
          <span className="text-borderColor-400">performance management system</span>
        </li>
        <div className="flex items-center space-x-[0.625rem]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="h-[2.438rem] w-[16.5rem] rounded-[8px] bg-borderColor-50 px-10 py-3 pl-14"
            />
          
            <span className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-500"><Icons.SearchIcon/></span>
          </div>

        
          <Icons.Notification/>
          <button className="flex h-[1.75rem] w-[3.25rem] items-center justify-between   ">
            <img src="face.svg" alt="" />

            <Icons.ArrowDownBlack/>
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default TopNav;
