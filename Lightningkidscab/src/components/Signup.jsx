import React from "react";
import { useState } from "react";
import Schedule from "./Schedule";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify/unstyled";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.1.30:3000/api/v1/user/register",
        {
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneno,
        }
      );

      console.log("Response:", response.data);
      toast.success("Signup successful!");

      setformData({
        firstname: "",
        lastname: "",
        email: "",
        phoneno: "",
        password: "",
        confirmpass: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="grid   grid-cols-1 lg:grid-cols-3  ">
        <div className="hidden lg:block col-span-2 bg-primary-color h-screen place-content-center">
          <Schedule />
        </div>

        <div className="mt-10 lg:mt-0 flex justify-center items-center  container px-5 mx-auto">
          <div className=" flex flex-col gap-8 items-center  justify-center w-full border border-gray-400  p-5 rounded-xl shadow-md mx-auto">
            <div>
              <img src="\lightning-kids-logo.webp" />
            </div>
            <form
              action=""
              className="flex flex-col gap-5 w-full font-geist"
              onSubmit={handleSubmit}
            >
              <div class="relative">
                <input
                  type="text"
                  id="first-name"
                  name="firstname"
                  onChange={handleChange}
                  value={formData.firstname}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="first-name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  First Name
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="last-name"
                  name="lastname"
                  onChange={handleChange}
                  value={formData.lastname}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="last-name"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Last Name
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="phone_no"
                  name="phoneno"
                  onChange={handleChange}
                  value={formData.phoneno}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="phone_no"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone Number
                </label>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="password"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <div class="relative">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmpass"
                  onChange={handleChange}
                  value={formData.confirmpass}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                />
                <label
                  for="confirm-password"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Confirm Password
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary-color hover:bg-secondary-hover rounded font-geist text-black py-2 px-5 font-medium "
              >
                Submit
              </button>
              <div className="flex gap-1 justify-end items-end font-medium">
                <p>Already a member?</p>
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-600 underline font-medium"
                  href=""
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
