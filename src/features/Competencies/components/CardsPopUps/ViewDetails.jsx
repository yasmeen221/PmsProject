import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/Button/Button";
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import Icons from "../../../../themes/icons";
import { getDataCompetenciesByID } from "../../slices/Api/competenciesApi";
import { toggleCompetencyDetails } from "../../slices/openCompentencyPopUp";
import AccordionDropDown, {
  AccordionItemDropDown,
} from "../Accordion/DropDownDetails";
// import { toogleCompentancyDetails } from "../../../FeedBack/slices/openPopUpSlice";

export default function ViewDetails({ onClose, id }) {
  // const dispatch=useDispatch()
  // const openDetailsPopUp = useSelector(state => state.openCompetencyPopUpSlice.detailsPopup)
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [details, setDetails] = useState({});
  useEffect(() => {
    // console.log(id);
    setPopupOpen(true);
    getDetails(id);
  }, []);
  const handleClosePopup = () => {
    // dispatch(toogleCompentancyDetails(false));
    setPopupOpen(false);
    onClose();
  };
  async function getDetails(id) {
    const { data } = await getDataCompetenciesByID(id);
    // console.log(data.foundedCompetency);
    setDetails(data.foundedCompetency);
  }
  return (
    <>
      <FormPopUp
        isOpen={isPopupOpen}
        ClosePop={handleClosePopup}
        TitlePopUp="Details"
        className=""
      >
        <div
          style={{
            width: "39.214vw",
            maxHeight: "65vh",
            overflowY: "auto",
            // scrollbarWidth: "none",
          }}
          className="px-1 my-4 "
        >
          <h4 className="text-fontColor-fromAndToColor font-custom text-xs">
            Competency Name
          </h4>
          <p className="text-black font-bold text-2xl font-custom">
            {details.name}
          </p>
          <div className="flex my-3 gap-x-3">
            <div className="flex items-center  px-3 py-2 font-custom text-xs bg-drawerColor-100 text-drawerColor-500 rounded-md">
              <p className="">
                <Icons.thunderIcon />
              </p>{" "}
              <p>
                {details.category == null
                  ? "not found"
                  : details.category.categoryName}
              </p>
            </div>
            <div className="flex items-center font-custom text-xs px-3 py-2 bg-gray-200 rounded-md">
              <p className="mr-2">
                <Icons.hidePassword />
              </p>{" "}
              <p>Shared with everyone</p>
            </div>
          </div>
          {details.seniorityLevels ? (
            <div className="pe-1">
              {details.seniorityLevels.map((item, i, index) => {
                return (
                  <>
                    <AccordionDropDown key={i}>
                      <AccordionItemDropDown
                        className="border-2 border-solid border-borderColor-baseBorderColor mb-5 rounded-buttonRadius text-subTitle2Size font-subTitle2Weight text-fontColor-blackBaseColor "
                        value={i}
                        trigger={
                          item.level?.levelName
                            ? item.level.levelName
                            : "not found"
                        }
                        key={i}
                      >
                        <hr />
                        <div className="mt-1 text-fontColor-fromAndToColor text-sm font-normal">
                          <p className="">
                            {item.description
                              ? item.description
                              : "there is no description"}
                          </p>
                        </div>
                      </AccordionItemDropDown>
                    </AccordionDropDown>
                  </>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center mt-5 justify-center">
              <Icons.Loading />
            </div>
          )}
        </div>
        <div className="w-full inline-flex justify-end px-1 ">
          <Button
            buttonText="Back"
            className="px-10 py-2.5 text-fontColor-whiteBaseColor"
            onClick={handleClosePopup}
          />
        </div>
      </FormPopUp>
    </>
  );
}
