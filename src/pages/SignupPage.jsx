import { Link } from "react-router-dom";
import Header from "../components/Landing Page/Header";

const SignupPage = () => {
    return (
        <>
        <Header/>
        <div className="h-screen items-center flex justify-center px-5 lg:px-0">
            <div className="max-w-7xl sm:rounded-lg flex justify-center flex-1">

                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className=" flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                                Sign up
                            </h1>
                            <p className="text-[12px] text-gray-500">
                                Hey enter your details to create your account
                            </p>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs flex flex-col gap-4">
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="tel"
                                    placeholder="Enter your phone"
                                />
                                <input
                                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="password"
                                    placeholder="Password"
                                />
                                <div className="flex gap-10">
                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="role" id="teacher" value="teacher" />
                                        <label htmlFor="teacher">Teacher</label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <input type="radio" name="role" id="student" value="student" />
                                        <label htmlFor="student">Student</label>
                                    </div>
                                </div>
                                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">Sign Up</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Already have an account?{" "}
                                    <Link className="text-blue-900 font-semibold" to="/login">Sign in</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    );
};
export default SignupPage;
