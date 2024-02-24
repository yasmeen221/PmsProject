


import icons from "../../themes/icons.js";



const TeamItem = (props) => {
  const { title, description, skills, position } = props;

  return (
    <div className="flex justify-around items-center mt-50 py-2">
      <div className="flex items-start flex-row">
        <div>
          <input type="checkbox" className="mr-5  form-checkbox border-blue-600" />
        </div>
        <div>
          <h5 className="font-subTitle2Weight text-fontColor-blackBaseColor text-body1Size">
            {title}
          </h5>
          <p className="w-96 text-captionRegSize text-fontColor-1000 font-captionRegWeight">
            {description}
          </p>
        </div>
      </div>
      <div>
        <p className="font-captionRegWeight text-body1Size text-fontColor-1100">{skills}</p>
      </div>
      <div>
        <p className="font-captionRegWeight text-body1Size text-fontColor-1100">{position}</p>
      </div>
      <div>
        <icons.ThreeDotsIcon />
      </div>
    </div>
  );
};

export default TeamItem;

