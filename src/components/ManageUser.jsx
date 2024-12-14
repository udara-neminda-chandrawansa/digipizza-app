import { Link } from "wouter";
import { updateUser } from "../services/UserApiService";
import { useState } from "react";

function ManageUser({ id, type }) {
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

  const setUserId = (newId) => {
    setUserDTO((prev) => ({
      ...prev,
      id: newId,
    }));
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault(); // Prevent the form from submitting
    setUserId(id); // Update the user ID

    // Use the `id` parameter for logging instead of `userDTO.id`
    console.log("Setting UserDTO ID to:", id);

    if (confirmPsw === userDTO.password) {
      try {
        const res = await updateUser({ ...userDTO, id }); // Use the parameter directly here
        console.log("User updated successfully:", res);
        alert("Update successful!");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6 h-dvh">
      <form className="p-6 my-6 border rounded-lg" onSubmit={handleUpdateUser}>
        <h1>Manage Account as a {type}</h1>
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
            className="flex justify-between mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => {
                  const passwordInput2 =
                    document.getElementById("confirm_password");
                  passwordInput2.type = e.target.checked ? "text" : "password";
                }}
              />
              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
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
          Update
        </button>
      </form>
    </div>
  );
}

export default ManageUser;
