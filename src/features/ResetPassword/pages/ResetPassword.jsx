import React from 'react'
import Header from '../../../components/Header/Header'
import TextInput from '../../../components/TextInput/TextInput'
import Button from '../../../components/Button/Button'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const ResetPassword = () => {

    const schema = yup
    .object({
        password: yup.string().required(),
        confirmPassword: yup.number().positive().integer().required(),
    })
    .required()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Header text="New password" />
            <TextInput placeholder="enter new password" type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
            <Header text="Confirm New Pssword" />
            <TextInput placeholder="confirm new password" type="password" {...register("confirmPassword")}  />
            <p>{errors.confirmPassword?.message}</p>
            <Button buttonText="Done" type="submit"  />

        </form>
    )
}

export default ResetPassword
