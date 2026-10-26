import { useState } from "react";
import WelcomPanel from "../components/WelcomPanel";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const Signup = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_no: "",
    password: "",
    userType: ""
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  console.log(formData);
  const handleSignup = async () => {
    // e.preventdefault()
    try {
      const res = await axios.post("http://localhost:3000/auth/signup", formData)
      console.log(res);
      setFormData({
        full_name: "",
        email: "",
        phone_no: "",
        password: "",
        userType: ""
      });
      toast.success(res.data.message)
      navigate("/login")
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message)
    }
  }
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
              <form className="flex flex-col gap-4" >
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.full_name}
                  name="full_name"
                  placeholder="Full Name"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  placeholder="Email Address"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="phone_no"
                  placeholder="Phone Number"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500"
                />
                <select
                  onChange={handleChange}
                  name="userType"
                  value={formData.userType}
                  className="outline-none border-1 border-gray-400 rounded-2xl py-2 px-4 w-full focus:ring-2 focus:ring-amber-500">
                  <option value="">Select UserType</option>
                  <option value="Admin">Admin</option>
                  <option value="Agency">Agency</option>
                  <option value="Customer">Customer</option>
                </select>

                <button
                  type="button"
                  onClick={handleSignup}
                  className="outline-none text-white font-semibold bg-amber-500 rounded-2xl py-2 px-4 w-full">
                  Create Account
                </button>
              </form>
              <p className="text-gray-400 mt-2">
                Already have a account ?{" "}
                <span className="text-amber-500">
                  <Link to={"/login"}>
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
