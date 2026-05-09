import { Link } from "react-router-dom";
import Header from "../components/Landing Page/Header";

const LoginPage = () => {
    return (
        <>
        <Header/>
        <div className="h-screen flex items-center justify-center px-5 lg:px-0 bg-gray-50">
            <div className="max-w-7xl sm:rounded-lg flex justify-center flex-1">

                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex flex-col items-center">

                        <div className="text-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                                Login
                            </h1>
                            <p className="text-[12px] text-gray-500">
                                Welcome back! Enter your credentials to access your account
                            </p>
                        </div>

                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs flex flex-col gap-4">

                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Enter your email"
                                />

                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="password"
                                    placeholder="Enter your password"
                                />

                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2 text-gray-600">
                                        <input type="checkbox" />
                                        Remember me
                                    </label>

                                    <Link
                                        to="/forgot-password"
                                        className="text-blue-900 font-semibold hover:underline"
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:outline-none">

                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                                        <polyline points="10 17 15 12 10 7" />
                                        <line x1="15" y1="12" x2="3" y2="12" />
                                    </svg>

                                    <span className="ml-3">Login</span>
                                </button>

                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Don’t have an account?{" "}
                                    <Link
                                        className="text-blue-900 font-semibold"
                                        to="/signup"
                                    >
                                        Sign up
                                    </Link>
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div></>
    );
};

export default LoginPage;