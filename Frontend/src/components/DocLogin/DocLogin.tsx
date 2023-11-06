import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'

const DocLogin = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function togglePasswordVisibility(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setIsPasswordVisible((prevState) => !prevState)
    }

    return (
        <div className="LogIn">
            <div className="mt-3 flex h-screen w-full bg-green-900">
                <div className="w-1/2 max-sm:hidden">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="h-full w-full"
                    />
                </div>

                <div className="flex w-1/2 flex-col bg-white max-sm:w-full">
                    <div className="mx-auto my-auto h-3/4 w-3/4 rounded-xl border-2 border-blue-500 bg-white max-md2:h-5/6 max-md2:w-3/4 max-md:w-[90%] max-sm:w-3/4 ">
                        <div className="flex border-b-2 border-blue-500">
                            <label className="mb-5 ml-7 mt-5 text-3xl font-bold text-blue-700 max-sixthsmall:text-xl">
                                Not A Doctor?
                            </label>
                        </div>
                        <div className="relative mt-11">
                            <label className="max-sm1:ml-[-180px] absolute -mt-2 ml-[60px] bg-white text-sm font-semibold text-blue-400 max-xl:ml-[20px] max-lg:ml-[20px] max-md1:ml-[20px] max-md2:ml-[20px] max-md:ml-[20px] max-sm:ml-[20px] max-xs:ml-[20px] max-extrasmall:ml-[20px]">
                                Email
                            </label>
                            <input
                                type="text"
                                className="max-sm1:placeholder:pl-5 ml-auto mr-auto mt-2 block w-5/6 rounded-md border border-gray-300 bg-white px-8 py-3.5 pt-3.5 text-sm placeholder-blue-400 focus:border-black focus:outline-none max-extrasmall:placeholder:pl-4"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="relative mt-11">
                            <label className="max-sm1:ml-[-180px] absolute -mt-2 ml-[60px] bg-white text-sm font-semibold text-blue-400 max-xl:ml-[20px] max-lg:ml-[20px] max-md1:ml-[20px] max-md2:ml-[20px] max-md:ml-[20px] max-sm:ml-[20px]  max-xs:ml-[20px] max-extrasmall:ml-[20px]">
                                Password
                            </label>
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                placeholder="Password"
                                className="ml-auto mr-auto mt-4 block w-5/6 rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-blue-400 outline-none placeholder:text-xs placeholder:text-blue-400 focus:border-[#6A64F1] focus:shadow-md"
                            />
                            <button
                                className="absolute inset-y-0 right-0 mb-3 mr-10 flex items-center px-4 text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    <FontAwesomeIcon icon="eye-slash" className="mt-4" />
                                ) : (
                                    <FontAwesomeIcon icon="eye" className="mt-4" />
                                )}
                            </button>
                        </div>
                        <div className="mt-11 flex w-full flex-row px-6 max-lg:px-1 max-md1:px-1 max-fourthsmall:mt-7">
                            <input
                                id="disabled-radio-1"
                                type="checkbox"
                                value=""
                                name="disabled-radio"
                                className="max-sm1:ml-7 ml-7 mt-[2px] h-4 w-4 border-gray-300 bg-gray-100 text-blue-400 focus:ring-2 focus:ring-blue-500 max-xl:h-3  max-xl:w-3 max-sm:ml-7 max-xs:ml-4 max-extrasmall:ml-1"
                            />
                            <label
                                htmlFor="disabled-radio-1"
                                className="ml-2 text-sm font-normal text-blue-400 max-xl:ml-0 max-xl:text-xs max-md1:text-xs max-sm:ml-1 max-xs:text-xxs max-extrasmall:ml-0"
                            >
                                Keep Me Logged In
                            </label>
                            <label className="max-sm1:ml-28 ml-32 cursor-pointer text-sm font-normal text-blue-400 underline max-xl:ml-20 max-xl:text-xs max-lg:ml-16 max-sm:ml-48 max-xs:ml-20 max-xs:text-xxs max-extrasmall:ml-14">
                                Forgot Password?
                            </label>
                        </div>
                        <button className="text-white-500 text-bold ml-auto mr-auto mt-11 block w-5/6 rounded-full border-2 border-blue-800 bg-blue-900 px-16 py-1.5 font-bold tracking-widest text-white max-fourthsmall:px-10 max-fourthsmall:tracking-tighter max-fifthsmall:mt-8 max-sixthsmall:px-10 max-sixthsmall:tracking-tighter">
                            Log In
                        </button>
                        <div className="mt-3 pt-4 text-center">
                            <label className="text-sm font-normal text-blue-400">
                                Don't Have An Account?{' '}
                                <span className="cursor-pointer text-sm font-bold text-blue-400 underline">
                                 <a href="/DocRegister"> Sign Up </a>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocLogin
