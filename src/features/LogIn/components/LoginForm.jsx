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
  const navigate = useNavigate();  // Add this line to get the navigate function

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
    <>
      <form
        className="w-[500px]  bg-red-500 p-4"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div>
          <Header text="Email" />
          <TextInput
            type="text"
            register={{ ...register("email") }}
            placeholder="Example123@.com"
          />
        </div>
        {errors.email ? <p>{errors.email.message}</p> : null}
        <div>
          <Header text="Password" />
          <TextInput
            type="password"
            register={{ ...register("password") }}
            placeholder="enter password"
          />
        </div>
        {errors.password ? <p>{errors.password.message}</p> : null}
        <div className="flex items-center justify-end   py-3  ">
          <Button
            type="submit"
            className="px-6 py-3.5 text-fontColor-whiteBaseColor"
            buttonText="login"
          />
        </div>
      </form>
      {setSuccessMessage && <p>{successMessage}</p>}
    </>
  );
};

export default LoginForm;
