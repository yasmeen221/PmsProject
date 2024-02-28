// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
const schema = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Add this line to get the navigate function

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (values) => {
    console.log(values);
    setSuccessMessage("Your values has been sent Successfully");
    reset();
    navigate("/dashboard/competencies");
  };
  return (
    // <>

    // </>
    <section className="h-screen bg-drawerColor-100   text-drawerColor-800 flex items-center  justify-center">
      <div className=" flex w-[70%] h-[600px]  bg-drawerColor-50 rounded ">
        <div className="w-[50%]  items-center space-y-6 flex flex-col justify-center ">
          <h1 className="text-4xl ml-16  self-start  uppercase font-bold">Login</h1>
          <p className="text-lg ml-16  capitalize self-start  ">
            welcome back! please login to tour account
          </p>

          <form
            className=" w-[80%]  space-y-8 ml-7  "
            onSubmit={handleSubmit(formSubmit)}
          >
            <div>
              <Header text="Email" className="text-xl mb-4" />
              <TextInput
                className="rounded"
                type="text"
                register={{ ...register("email") }}
                placeholder="Example123@.com"
              />
            </div>
            {errors.email ? <p>{errors.email.message}</p> : null}
            <div>
              <Header text="Password" className="mb-4 text-xl" />
              <TextInput
                className="rounded"
                type="password"
                register={{ ...register("password") }}
                placeholder="enter password"
              />
            </div>
            {errors.password ? <p>{errors.password.message}</p> : null}

            <Button
              type="submit"
              className="w-full px-6 rounded  py-3.5 text-fontColor-whiteBaseColor"
              buttonText="login"
            />
          </form>
          {setSuccessMessage && <p>{successMessage}</p>}
        </div>
        <div className="w-[50%] flex items-center justify-center  ">
          <img
            src="../../../../public/cover2.svg"
            className="object-contain w-[90%] "
          />
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
