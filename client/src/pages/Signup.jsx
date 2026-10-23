import React from "react";
import WelcomPanel from "../components/WelcomPanel";

const Signup = () => {
  return (
    <>
      <div className="flex justify-between bg-amber-100">
        <div className="w-1/2 ">
          <WelcomPanel />
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div className="bg-white p-12 text-center rounded-2xl">
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <p className="text-gray-500 font-medium mb-2">
              Join <span className="text-amber-600">ClickMart</span> and start
              shopping today
            </p>
            <div>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <select className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500">
                  <option value="">Select UserType</option>
                  <option value="">Admin</option>
                  <option value="">Agency</option>
                  <option value="">Customer</option>
                </select>

                <button className="outline-none text-white font-semibold bg-amber-500 rounded-2xl py-2 px-4 w-full">
                  Create Account
                </button>

              </form>
              <p className="text-gray-400 mt-2">Already have a account ? <span className="text-amber-500">Login</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
