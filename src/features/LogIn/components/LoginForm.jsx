// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import cover from "../../../assets/images/cover2.svg";
import logo from "../../../assets/images/logo/logo.png";
import Icons from "../../../themes/icons";
import { useTitle } from "../../../components/Hooks/useTitle";
import { useLoginUserMutation } from "../slices/apis/apiLoginSlice";
import { useAuth } from "../../../components/Auth/auth";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { changeUserDataValue } from "../slices/login";

const schema = yup.object({
  email: yup
    .string()
    // .email("Email must be valid")
    .required("user name is required")
    .matches(/^[A-Za-z\s\d]+$/, "Invalid user name"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
      "Invalid password. It must contain at least 8 characters and max 20, small and capital letter,numbers, and special character.",
    ),
});

const LoginForm = () => {
  useTitle("LogIn");

  const dispatch = useDispatch();
  const { login } = useAuth();
  const [securePass, setSecurePass] = useState(true);
  const navigate = useNavigate(); // Add this line to get the navigate function
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();
  const cookie = new Cookies((null, { path: "/" }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (values) => {
    const objToSend = {
      username: values.email,
      password: values.password,
    };
    console.log(objToSend);
    loginUser(objToSend)
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          console.log(res.data);
          cookie.set("userToken", res.data.accesToken);

          // dispatch(changeUserDataValue(res.data.accesToken));
          login(objToSend);
          navigate("/competencies", { replace: true });
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className=" bg-gray-50  h-screen text-fontColor-blackBaseColor flex items-center   justify-center ">
      <div
        className=" flex w-[60%]  shadow-lg h-auto m-auto  bg-drawerColor-100 rounded flex-col md:flex-row "
        style={{ paddingBottom: "50px" }}
      >
        <div className="md:w-[50%]  items-center space-y-1 flex flex-col w-full  ">
          <div className=" self-start my-9  ml-4 ">
            <img src={logo} />
          </div>

          <p className="text-md ml-10 font-subTitle2Weight text-fontColor-800 capitalize self-start  ">
            welcome back! please login to tour account
          </p>
          <form className=" w-[80%] " onSubmit={handleSubmit(formSubmit)}>
            <div>
              <Header text="Email" className="text-lg mb-1 mt-3" />
              <TextInput
                className="rounded"
                type="text"
                register={{ ...register("email") }}
                placeholder="Example123@.com"
              />
            </div>
            {errors.email ? (
              <p className="text-deleteColor-50">{errors.email.message}</p>
            ) : null}
            <div className="mt-1">
              <Header text="Password" className="text-lg mb-1" />
              <TextInput
                className="rounded"
                rightIcon={
                  securePass ? <Icons.showPassword /> : <Icons.hidePassword />
                }
                rightIconClick={() => {
                  setSecurePass((prev) => !prev);
                }}
                type={securePass ? "password" : "text"}
                register={{ ...register("password") }}
                placeholder="enter password"
              />
            </div>
            {errors.password ? (
              <p className="text-deleteColor-50">{errors.password.message}</p>
            ) : null}

            <div className="mt-4">
              <Button
                type="submit"
                className="w-full  rounded text-fontColor-whiteBaseColor"
                buttonText="login"
              />
            </div>
          </form>
        </div>
        <div className="w-[50%] flex items-center justify-center  ">
          <img
            src={cover}
            className="object-contain md:w-[90%] hidden md:block "
          />
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
