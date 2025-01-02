import React, { useState } from "react";
import Schedule from "./Schedule";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddChild = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    classgrade: "",
    dob: "",
    teachername: "",
    allergies: "",
    pickupaddress: "",
    school: "",
    childSeat: "",
    childphoto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      grade: formData.classgrade,
      dob: formData.dob,
      teacher: formData.teachername,
      allergies: formData.allergies,
      pickupAddr: formData.pickupaddress,
      school: formData.school,
      childSeat: formData.childSeat,
      childphoto: formData.childphoto,
    };

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Authentication token is missing.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.27:3000/api/v1/user/add-child",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log("Response:", response.data);
      alert("Child added successfully!");
      navigate("/selectbooking");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to add child. Please try again.");
    }
  };

  return (
    <div className="flex bg-primary-color items-center justify-center mx-auto h-screen">
      <div className="flex flex-col items-center justify-between container mx-auto w-fit">
        <ProgressBar num1="✅" num2="2" num3="3" num4="4" />
        <div className="w-full">
          <div className="flex flex-col gap-8 items-center bg-white justify-center w-full px-10 border border-gray-400 p-5 rounded-xl shadow-md mx-auto">
            <h1 className="text-3xl font-geist font-medium">Add Child</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full font-geist"
            >
              {/* First Name and Last Name */}
              <div className="flex gap-5 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    onChange={handleChange}
                    value={formData.firstname}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    onChange={handleChange}
                    value={formData.lastname}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {/* Class Grade and DOB */}
              <div className="flex gap-5 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="classgrade"
                    name="classgrade"
                    onChange={handleChange}
                    value={formData.classgrade}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="classgrade"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Class Grade
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    onChange={handleChange}
                    value={formData.dob}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                  />
                  <label
                    htmlFor="dob"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Date of Birth
                  </label>
                </div>
              </div>

              {/* Teacher Name and Allergies */}
              <div className="flex gap-5 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="teachername"
                    name="teachername"
                    onChange={handleChange}
                    value={formData.teachername}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="teachername"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Teacher's Name
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    onChange={handleChange}
                    value={formData.allergies}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="allergies"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Allergies
                  </label>
                </div>
              </div>

              {/* Pickup Address and School */}
              <div className="flex gap-5 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="pickupaddress"
                    name="pickupaddress"
                    onChange={handleChange}
                    value={formData.pickupaddress}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="pickupaddress"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Pickup Address
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="school"
                    name="school"
                    onChange={handleChange}
                    value={formData.school}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="school"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    School
                  </label>
                </div>
              </div>

              {/* Child Seat and Photo */}
              <div className="flex gap-5 w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="childSeat"
                    name="childSeat"
                    onChange={handleChange}
                    value={formData.childSeat}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="childSeat"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Child Seat
                  </label>
                </div>
                <div className="relative flex-1">
                  <input
                    type="file"
                    id="childphoto"
                    name="childphoto"
                    onChange={handleChange}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 focus:outline-none peer"
                  />
                  <label
                    htmlFor="childphoto"
                    className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 bg-white px-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Child Photo
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary-color text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChild;
