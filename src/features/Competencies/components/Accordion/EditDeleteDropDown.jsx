// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Icons from "../../../../themes/icons";
import ThreeDotsDropDown from "../../../../components/componentTitle/ThreeDotsDropDown";
import EditCompetency from "../CardsPopUps/EditCompetency";
import ButtonPopUPNewClose from "../../../../components/PopUp/ButtonPopUPNewClose";

export default function EditDeleteDropDown({ id, item }) {
  // console.log(id);

  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const [popUPCloseAndOpen, setPopUPCloseAndOpen] = useState(false);

  const handleDropdownClick = (option, id) => {
    console.log(`btn ${option} clicked`);

    setSelectedOption(option);
    setSelectedItemId(id);
    setIsDropdownVisible(false);
  };

  const handlePopupClose = () => {
    setSelectedOption(null);
    setIsDropdownVisible(true);
  };

  // new one delete and Edit

  // const handleDelete = () => {
  //   setPopUPCloseAndOpen(!popUPCloseAndOpen)
  // }

  return (
    <>
      {isDropdownVisible && (
        <>
         <div
            className="backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
          
             
            }}
            onClick={() => setIsDropdownVisible(false)}
          ></div>
        
        <ul
          className="w-[120px] shadow bg-white mr-7"
          style={{
            position: "absolute",
            right: "0rem",
            marginTop: "110px",
            marginLeft:"0"
         
         
           
          }}
        >
          <ThreeDotsDropDown
          
            Icon={
              <span>
                <Icons.EditUserPage />
              </span>
            }
            text={
              <p
                style={{
                  textAlign: "center",
                  margin: "auto",
                  fontSize: "14px",
                  color: "#333",
                  paddingLeft:"0",
                  marginLeft:"0"
                }}
              >
                Edit
              </p>
            }
            onClick={() => handleDropdownClick("Edit", id)}
            className=""
          />

          <ThreeDotsDropDown
            Icon={
              <span>
                <Icons.DeleteUserPage />
              </span>
            }
            text={
              <p
                style={{ textAlign: "center", fontSize: "14px", color: "#333" }}
              >
                Delete
              </p>
            }
            // onClick={() => handleDropdownClick("Delete", id)}
            onClick={() => setPopUPCloseAndOpen(!popUPCloseAndOpen)}
            className="custom-class-2"
          />
         
        </ul>
        </>
      )}

{popUPCloseAndOpen && (
            <ButtonPopUPNewClose id={id} title={"Delete"} isOpen={true} />
          )}

      {selectedOption === "Edit" && (
        <EditCompetency
          item={item}
          selectedItemId={selectedItemId}
          onClose={handlePopupClose}
          parentId={id}
        />
      )}
    </>
  );
}
