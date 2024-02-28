import Icons from "../../themes/icons";
import TextInput from "../../components/TextInput/TextInput";
import boy from "../../assets/images/boy5.png";
import ImageStyle from "../ImageStyle/ImageStyle";
function TopNav() {
  return (
    <nav className="border-borderColor-100 flex h-[4.438rem] w-full items-center justify-center border-b ">
      <ul className="flex w-[95%]  justify-between  ">
        <li className="flex items-center font-body1Weight ">
          <span>innovaPMS</span> &nbsp;| &nbsp;{" "}
          <span className="text-borderColor-400">
            performance management system
          </span>
        </li>
        <div className="flex items-center space-x-[0.625rem]">
          <TextInput
            placeholder="Search"
            type="text"
            className="h-[2.438rem] w-[16.5rem] py-3 bg-drawerColor-bgSearchInput"
            leftIcon={<Icons.SearchIcon />}
          />

          <Icons.Notification />
          <button className="flex h-[1.75rem] w-[3.25rem] items-center justify-between   ">
            <ImageStyle src={boy} />

            <Icons.ArrowDownBlack />
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default TopNav;
