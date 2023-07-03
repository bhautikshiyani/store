import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="grid my-10 bg-white shadow sm:rounded-lg md:grid-cols-2 mx-6 max-w-5xl md:mx-auto">
      <div className="flex flex-1 flex-col justify-center  px-6 py-10  sm:px-12 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Back !
          </h2>
          <p className="mt-2 text-center text-sm leading-6 text-gray-500">
            Login to your account.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className=" ">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    By signing up you agree to our{" "}
                    <Link
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <Link
                  href="#"
                  className="text-white bg-[#3b5998] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="text-white bg-[#c40d18] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                >
                  <FaGoogle />
                </Link>
                <Link
                  href="#"
                  className="text-white bg-[#1da1f2] flex items-center justify-center text-[17px] rounded-full w-8 h-8 block"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
            <Link
              href="/registration"
              className="text-violet-600 font-semibold ml-2 text-[13px]  relative after:absolute after:content-[' '] hover:after:scale-x-100 hover:after:origin-left after:bg-violet-600 after:bottom-[-5px] after:h-[1px] after:rounded-[2px]  after:left-0 after:right-0 after:origin-right border-animation-time after:scale-x-0"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          width={500}
          height={500}
          src="/assets/images/just-look-there-there-is-exactly-what-we-were-looking.jpg"
        />
      </div>
    </div>
  );
};

export default Registration;
