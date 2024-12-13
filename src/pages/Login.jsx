import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { useState } from "react";
import { fetchUserByEmail } from "../services/UserApiService";
import { Link } from "wouter";

function Login() {
  const [visible, setVisible] = useState(false); // for modal visibility
  const [userType, setUserType] = useState("customer"); // for storing user type (customer/delivery-person)
  // for storing user info after fetching from db
  const [userDTO, setUserDTO] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    telNo: "",
  });

  const [userInput, setUserInput] = useState({ email: "", password: "" }); // for storing user input from UI

  // for storing user input from UI
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  // for fetching user info from db
  const handleFetchUserByEmail = async () => {
    if (userInput.email && userInput.password) {
      try {
        const res = await fetchUserByEmail(userInput.email);
        if (res !== "Error fetching user.") {
          console.log("Fetched user data:", res);
          // Check the fetched user data directly
          if (
            res.email === userInput.email &&
            res.password === userInput.password
          ) {
            alert("Login Success!");
            setVisible(true);
          } else {
            alert("Login Error!");
          }
          // Update the state for later use
          setUserDTO(res);
          console.log("User DTO: ", userDTO);
        } else {
          alert("Login Error!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        alert("An error occurred during login.");
      }
    } else {
      alert("User data is missing.");
    }
  };

  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="w-1/2 p-6 my-6 border rounded-lg max-md:w-2/3 max-sm:w-5/6">
        <h1 className="mb-6 text-center">Login</h1>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="flex justify-between mb-2 text-sm font-medium text-gray-900"
          >
            Password
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => {
                  const passwordInput = document.getElementById("password");
                  passwordInput.type = e.target.checked ? "text" : "password";
                }}
              />
              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <label className="flex justify-between w-full mb-6">
          I'm a {userType}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={(e) => {
                const newType = e.target.checked
                  ? "delivery-person"
                  : "customer";
                setUserType(newType); // Update state based on checkbox
                console.log(newType); // Log the correct value
              }}
            />
            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </label>
        <button
          onClick={handleFetchUserByEmail}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Login
        </button>
      </div>
      {/*Modal*/}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle></CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Do you want to load the dashboard?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary">Cancel</CButton>
          <Link href={`/users/${userDTO.id}`}>
            <CButton color="primary">Confirm</CButton>
          </Link>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default Login;
