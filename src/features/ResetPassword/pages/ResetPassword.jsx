import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import Icons from "../../../themes/icons";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import coverPass from "../../../assets/images/coverrestpass.svg";
import { useTitle } from "../../../components/Hooks/useTitle";
import { useSetPasswordMutation } from "../slices/apis/apiSetPassSlice";

const ResetPassword = () => {
  useTitle("resetPassword");
  let { token } = useParams();
  const navigate = useNavigate();
  const [securePass, setSecurePass] = useState(true);
  const [secureConfirmPass, setSecureConfirmPass] = useState(true);
  const [setPassword, { isLoading, isError,error,isSuccess }] = useSetPasswordMutation()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    //send data to back
    const objToSend = {
      passwordSetToken: token,////////from url,
      password: data.password,
      confirmPassword: data.confirmPassword

    }
    setPassword(objToSend).then((res)=>{
      if(res.data.status=="success"){
        navigate("/")
        reset();
      }
    }).catch((err)=>{console.log(err)})
    
    

  };
  return (
    <section className="bg-gray-50 h-screen  text-fontColor-blackBaseColor flex items-center  justify-center ">
      <div
        className=" flex w-[60%] lg:h-auto  md:h-[70vh] shadow-lg h-auto m-auto  bg-drawerColor-100 rounded flex-col md:flex-row "
        style={{ paddingBottom: "24px" }}
      >
        <div className="md:w-[50%]  items-center space-y-1 flex flex-col w-full  ">
          <div className=" self-start my-9  ml-4 ">
            <img src={logo} />
          </div>

          <p className="text-md ml-10 font-subTitle2Weight text-fontColor-800 capitalize self-start  ">
            Hello! please Add your password first
          </p>
          <form className=" w-[80%] " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Header text="New password" className="text-lg mb-1 mt-3" />
              <TextInput
                className="rounded"
                rightIcon={
                  securePass ? <Icons.showPassword /> : <Icons.hidePassword />
                }
                placeholder="enter new password"
                rightIconClick={() =>
                  setSecurePass((securePass) => !securePass)
                }
                type={securePass ? "password" : "text"}
                name="password"
                register={{
                  ...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                    maxLength: 20,
                  }),
                }}
              />
            </div>
            <div>
              {errors.password?.type === "required" ? (
                <p className="text-deleteColor-50">password required</p>
              ) : errors.password?.type === "pattern" ? (
                <p className="text-deleteColor-50">
                  password mustn't less than 8 characters contain 8
                  numbers,small,capital letter and special characters
                </p>
              ) : errors.password?.type === "maxLength" ? (
                <p className="text-deleteColor-50">
                  password must less than 20 characters
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-1">
              <Header
                text="Confirm New Pssword"
                className="text-lg mb-1 mt-3"
              />
              <TextInput
                className="rounded"
                rightIcon={
                  secureConfirmPass ? (
                    <Icons.showPassword />
                  ) : (
                    <Icons.hidePassword />
                  )
                }
                placeholder="confirm new password"
                rightIconClick={() =>
                  setSecureConfirmPass(
                    (secureConfirmPass) => !secureConfirmPass,
                  )
                }
                type={secureConfirmPass ? "password" : "text"}
                name="confirmPassword"
                register={{
                  ...register("confirmPassword", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
                    maxLength: 20,
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do not match";
                      }
                    },
                  }),
                }}
              />
            </div>
            <div>
              {errors.confirmPassword?.type === "required" ? (
                <p className="text-deleteColor-50">confirm password required</p>
              ) : errors.confirmPassword?.type === "pattern" ? (
                <p className="text-deleteColor-50">
                  password mustn't less than 8 characters contain 8
                  numbers,small,capital letter and special characters
                </p>
              ) : errors.confirmPassword?.type === "maxLength" ? (
                <p className="text-deleteColor-50">
                  password must less than 20 characters
                </p>
              ) : errors.confirmPassword?.type === "validate" ? (
                <p className="text-deleteColor-50"> Password Not Match</p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <Button
                className="w-full  rounded text-fontColor-whiteBaseColor"
                buttonText="Done"
                type="submit"
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
        <div className="w-[40%] flex items-center justify-center  ">
          <img
            src={coverPass}
            className="object-contain md:w-[90%] hidden md:block "
          />
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
