
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/action/action";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .matches(emailRegex, "Invalid email format"),
    password: Yup.string().required("Password is required")
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [backEndErrorEmail, setBackEndErrorEmail] = useState();
    const [backEndErrorPassword, setBackEndErrorPassword] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginSchema) });

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        const response = await dispatch(LoginUser(data));
        console.log("res ", response);

        localStorage.setItem("userDetails", JSON.stringify(response));
        if (response.message === "login success") {
            navigate('/dashboard');
            setBackEndErrorEmail("");
            setBackEndErrorPassword("");
        }
        else {
            if (response.response.data.error === "Entered account doesn't exists") {
                setBackEndErrorEmail("Entered account doesn't exists");
                setBackEndErrorPassword("");
            }
            if (response.response.data.error === "Invalid password") {
                setBackEndErrorPassword("Invalid password");
                setBackEndErrorEmail("");
            }
        }
    };

    const nav = () => {
        navigate("/signup");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-300">
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-4xl font-bold mb-10 text-center">Login</h2>
                    <div className="mb-4">
                        <label className="block text-xl text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none
                             border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                             placeholder:text-gray-300 sm:text-2xl
                             "
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xl italic mt-1">{errors.email.message}</p>}
                        {backEndErrorEmail && <p className="text-red-500 text-xl italic mt-1">{backEndErrorEmail}</p>}
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
                        {backEndErrorPassword && <p className="text-red-500 text-xl italic mt-1">{backEndErrorPassword}</p>}

                    </div>
                    <div className="flex items-center mt-10 mb-1 justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none text-xl focus:shadow-outline"
                        >
                            {"Login"}
                        </button>
                        <a href="/signup" className="inline-block align-baseline font-bold text-xl text-blue-500 hover:text-blue-800" onClick={nav}>
                            Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;