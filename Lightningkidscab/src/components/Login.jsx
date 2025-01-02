import React, { useState } from "react";
import Schedule from "./Schedule";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify/unstyled";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // console.log("Email:", email, "Password:", password);

    try {
      const response = await fetch(
        "http://192.168.1.27:3000/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      const data = await response.json();
      // console.log("Response from API:", data);

      localStorage.setItem("token", data.token);
      // document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;

      toast.success("Form Submitted Successfully");
      setEmail("");
      setPassword("");
      navigate("/addchild");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit form");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3  ">
        <div className="hidden lg:block col-span-2 bg-primary-color h-screen place-content-center">
          <Schedule />
        </div>

        <div className="flex justify-center items-center container px-5 mx-auto">
          <div className="flex flex-col gap-8 items-center w-full border border-gray-400 p-5 rounded-xl shadow-md mx-auto">
            <div>
              <img src="/lightning-kids-logo.webp" alt="Logo" />
            </div>
            <form
              className="flex flex-col gap-5 w-full font-geist"
              onSubmit={handleSubmitForm}
            >
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Password
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary-color hover:bg-secondary-hover rounded font-geist text-black py-2 px-5 font-medium"
              >
                Submit
              </button>
              <div className="flex gap-1 justify-end items-end font-medium">
                <p>New Here?</p>
                <button
                  onClick={() => navigate("/signup")}
                  type="button"
                  className="text-blue-600 underline font-medium"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
