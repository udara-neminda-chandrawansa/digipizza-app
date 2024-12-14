import { fetchUserByID } from "../services/UserApiService";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import ManageUser from "../components/ManageUser";

function CustomerDash({ uid }) {
  const [openItem, setOpenItem] = useState("General");
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
    <div className="flex flex-grow">
      {/*sidebar*/}
      <div className="flex flex-col justify-between w-1/6 h-screen bg-white border-e">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <a
                onClick={() => setOpenItem("General")}
                className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              >
                General
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpenItem("Billing")}
                className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              >
                Billing
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpenItem("Invoices")}
                className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
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
                      onClick={() => setOpenItem("ManageUser")}
                      className="block px-4 py-2 text-sm font-medium text-gray-500 no-underline rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                    >
                      Manage
                    </a>
                  </li>

                  <li>
                    <form>
                      <Link href="/login">
                        <button className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700">
                          Logout
                        </button>
                      </Link>
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
      {/*main content*/}
      <div className="w-5/6">
        {openItem === "ManageUser" ? <ManageUser id={uid} type={"Customer"}/> : ""}
      </div>
    </div>
  );
}

export default CustomerDash;
