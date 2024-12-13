import { Link } from "wouter";
import { saveUser } from "../services/UserApiService";
import { useState } from "react";

function Signup({ type }) {
  const [showAlert, setShowAlert] = useState(false);
  const [userDTO, setUserDTO] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    telNo: "",
  });

  const [confirmPsw, setConfirmPsw] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDTO((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmPswChange = (e) => {
    setConfirmPsw(e.target.value);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (confirmPsw === userDTO.password) {
      try {
        const res = await saveUser(userDTO);
        console.log("User saved successfully:", res);
        setShowAlert(true);
        setUserDTO({
          id: "",
          username: "",
          password: "",
          email: "",
          telNo: "",
        });
        setConfirmPsw("");
        setTimeout(() => setShowAlert(false), 3000);
      } catch (error) {
        console.error("Error saving user:", error);
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  const successAlert = showAlert && (
    <div
      id="alert-3"
      className="absolute flex items-center p-4 mb-4 text-green-800 rounded-lg top-5 bg-green-50"
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div className="text-sm font-medium ms-3">Signed Up successfully!</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
        onClick={() => setShowAlert(false)} // Close alert manually
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-3 p-6">
      {successAlert}
      <form className="p-6 my-6 border rounded-lg" onSubmit={handleSaveUser}>
        <h1>Sign Up as a {type}</h1>
        <div className="grid gap-6 mt-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userDTO.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="telNo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="telNo"
              name="telNo"
              value={userDTO.telNo}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
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
            value={userDTO.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userDTO.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            value={confirmPsw}
            onChange={handleConfirmPswChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Signup
        </button>
        <Link href="/login" className="text-sm sm:ml-3">Already have an account?</Link>
      </form>
    </div>
  );
}

export default Signup;
