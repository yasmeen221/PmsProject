import React from 'react'
import FormPopUp from "../../../../components/PopUp/FormPopUp";
import { useState } from "react";
import Header from "../../../../components/Header/Header";

export default function RequestFeedbackSomeOne() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };
    return (
        <>
            <FormPopUp
                isOpen={isPopupOpen}
                ClosePop={handleClosePopup}
                TitlePopUp={"Request FeedBack for Some One"}
                iconLeft={<Icons.ArrowLeftPop />}
            >

                <div
                    className="w-[30.75vw] max-h-[ 132.7613104524181vh] pb-4 overflow-y-auto"
                    style={{ scrollbarWidth: "none" }}
                ><div className="px-1 ">
                        <div className="pt-4">
                            <Header text="Receiver" />
                            <TextInput placeholder="Who the feedback about" />

                        </div>
                        <div className="pt-4 ">
                            <Header text="Sender" />
                            <TextInput placeholder="Who will give the feedback" />
                        </div>
                        <div className="pt-4">
                            <Header text=" Message" />
                            <div className="mt-2">
                                <textarea
                                    rows={4}
                                    placeholder="Write Your honst feedback"
                                    wrap="soft"
                                    id="describtion"
                                    name="describtion"
                                    onChange={(e) => console.log(e.target.value)}
                                    className="min-h-20 resize-none block max-h-20 bg-white w-full text-body1Size rounded-buttonRadius border-0  py-2.5 px-2  shadow-sm ring-1 ring-fontColor-outLineInputColor  placeholder:text-fontColor-placeHolderColor focus:ring-2   focus:ring-buttonColor-baseColor focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>   <div className="pt-4 mb-4">
                            <Header text="Visibility" />
                            <div className="flex flex-wrap ">
                                <label className="inline-flex items-center mr-4 mb-2">
                                    <input type="radio" className="w-4 h-4" name="radioGroup" />
                                    <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                                        Sender, receiver and me
                                    </span>
                                </label>

                                <label className="inline-flex items-center mr-4 mb-2">
                                    <input type="radio" className="w-4 h-4" name="radioGroup" />
                                    <span className="ml-2 font-custom text-buttonFontSize font-buttonWeight text-fontColor-blackBaseColor">
                                        Only sender and me
                                    </span>
                                </label>
                            </div> 
                            <div className="inline-flex justify-between items-center w-full pb-4">
                            <div>
                              <Header text="Feedback on specific competencies" />
                              <p className="text-fontColor-placeHolderColor  text-body1Size">
                                By default, he/she will receive your general feedback
                              </p>
                            </div>

                        </div>
                    </div>
            </FormPopUp>

        </>
    )
}
