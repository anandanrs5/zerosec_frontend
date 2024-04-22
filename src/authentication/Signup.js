
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupUser } from "../redux/action/action";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const fullnameRegex = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z])[\w\s]+$/

const signupSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required")
        .matches(fullnameRegex, `
        Empty space, dot, and symbols are not allowed before or after the name `),
    email: Yup.string()
        .required("Email is required")
        .matches(emailRegex, "Invalid email format"),
    password: Yup.string().required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
    message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters long")
        .max(100, "Message should not exceed 100 characters"),
});

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [backEndErrorEmail, setBackEndErrorEmail] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(signupSchema) });
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onSubmit = async (data) => {
        const response = await dispatch(SignupUser(data));
        console.log("api ", response);
        localStorage.setItem("userDetails", JSON.stringify(response));
        if (response.message === "signup success") {
            navigate('/dashboard')
            setBackEndErrorEmail("");
        } else {
            setBackEndErrorEmail("Entered email is already in use");
        }
    };
    const nav = () => {
        navigate("/");
    };
    return (
        <div className="flex justify-center items-center h-screen bg-violet-400">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-4xl font-bold mb-10 text-center">Sign Up</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            placeholder:text-gray-300 sm:text-2xl"
                            id="fullname"
                            type="text"
                            {...register("fullname")}
                            placeholder="Enter your full name"
                        />
                        {errors.fullname && <p className="text-red-500 text-lg italic mt-1">{errors.fullname.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            placeholder:text-gray-300 sm:text-2xl"
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-lg italic mt-1">{errors.email.message}</p>}
                        {backEndErrorEmail &&
                            <p className="text-red-500 text-lg italic mt-1">{backEndErrorEmail}</p>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                placeholder:text-gray-300 sm:text-2xl"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                {...register("password")}
                                placeholder="**********"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-4 py-1 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-lg italic mt-1">{errors.password.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            placeholder:text-gray-300 sm:text-3xl"
                            id="message"
                            {...register("message")}
                            placeholder="Enter your message"
                            rows="2"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-lg italic mt-1">{errors.message.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {"Signup"}
                        </button>
                        <a href="/" className="inline-block align-baseline font-bold text-xl text-blue-500 hover:text-blue-800" onClick={nav}>
                            goto Login
                        </a>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Signup;

