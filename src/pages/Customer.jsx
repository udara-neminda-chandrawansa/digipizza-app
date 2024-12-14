import { fetchUserByID } from "../services/UserApiService";
import { useEffect, useState } from "react";
function CustomerDash({ uid }) {
  // for storing user info after fetching from db
  const [userDTO, setUserDTO] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    telNo: "",
  });

  // auto load user data
  useEffect(() => {
    handleFetchUserByID();
  }, []);
  
  // for fetching user info from db
  const handleFetchUserByID = async () => {
    if (uid) {
      try {
        const res = await fetchUserByID(uid);
        setUserDTO(res);
        console.log("done");
      } catch (error) {
        console.error("Error fetching user:", error);
        alert("An error occurred fetching user data.");
      }
    } else {
      alert("User data is missing.");
      window.location.href = "/login";
    }
  };
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-between w-1/6 h-screen bg-white border-e">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-700 no-underline bg-gray-100 rounded-lg"
              >
                General
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="px-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Billing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Invoices
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="px-4 mt-2 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="#">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 p-4 bg-white hover:bg-gray-50"
          >
            <div>
              <p className="text-xs">
                <strong className="block font-medium">
                  {userDTO.username}
                </strong>

                <span> {userDTO.email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CustomerDash;
