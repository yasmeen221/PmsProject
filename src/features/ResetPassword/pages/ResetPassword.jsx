import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import TextInput from '../../../components/TextInput/TextInput'
import Button from '../../../components/Button/Button'
import { useForm } from "react-hook-form"
import Icons from '../../../themes/icons'
import { useNavigate } from 'react-router-dom'


const ResetPassword = () => {

    const navigate = useNavigate()
    const [securePass, setSecurePass] = useState(true)
    const [secureConfirmPass, setSecureConfirmPass] = useState(true)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    })
    const onSubmit = (data) => {
        console.log(data)
        reset()
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Header text="New password" />
            <TextInput
                rightIcon={securePass ? <Icons.showPassword /> : <Icons.hidePassword />}
                placeholder="enter new password"
                rightIconClick={() => setSecurePass(securePass => !securePass)}
                type={securePass ? "password" : "text"}
                 name="password"
                register={{ ...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, maxLength: 20, }) }}
            />
            <p>{errors.password?.type === "required" ? "password required" : errors.password?.type === "pattern" ? "password mustn't less than 8 characters contain 8 numbers,small,capital letter and special characters " : errors.password?.type === "maxLength" ? "password must less than 20 characters" : ""}</p>
            <Header text="Confirm New Pssword" />
            <TextInput rightIcon={secureConfirmPass ? <Icons.showPassword /> : <Icons.hidePassword />}
                placeholder="confirm new password"
                rightIconClick={() => setSecureConfirmPass(secureConfirmPass => !secureConfirmPass)}
                type={secureConfirmPass ? "password" : "text"}
                name="confirmPassword"
                register={{
                    ...register("confirmPassword", {
                        required: true, pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/, maxLength: 20,
                        validate: val => {
                            if (watch('password') != val) {
                                return 'Your passwords do not match';
                            }
                        },
                    })
                }} />
            <p>{errors.confirmPassword?.type === 'required'
                ? 'confirm password required'
                : errors.confirmPassword?.type === 'pattern'
                    ? `password mustn't less than 8 characters contain 8 numbers,small,capital letter and special characters`
                    : errors.confirmPassword?.type === 'maxLength'
                        ? 'password must less than 20 characters'
                        : errors.confirmPassword?.type === 'validate'
                            ? `Password Not Match`
                            : ''}</p>
            <Button buttonText="Done" type="submit" />

        </form>
    )
}

export default ResetPassword
