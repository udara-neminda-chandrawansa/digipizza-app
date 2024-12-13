import { Link } from "wouter";
import logo from "/logo.png";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
} from "@coreui/react";

import { useState } from "react";

function Nav() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar expand="lg" id="top" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand>
            <Link href="/">
              <img src={logo} alt="logo" className="w-20" />
            </Link>
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="items-center gap-6">
              <CNavItem className="p-0 m-0 h-fit">
                <Link href="/" className="p-0 m-0 text-gray-500 no-underline">
                  Home
                </Link>
              </CNavItem>
              <CNavItem>
                <Link
                  href="/login"
                  className="p-0 m-0 text-gray-500 no-underline"
                >
                  Login
                </Link>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle>Sign Up</CDropdownToggle>
                <CDropdownMenu className="flex flex-col h-[100px]">
                  <Link
                    href="/signup/customer"
                    className="p-0 m-0 text-gray-500 no-underline"
                  >
                    <p className="p-1 px-3 hover:bg-[#FFA100] hover:text-white">Customer</p>
                  </Link>

                  <Link
                    href="/signup/delivery-person"
                    className="p-0 m-0 text-gray-500 no-underline"
                  >
                    <p className="p-1 px-3 hover:bg-[#FFA100] hover:text-white">Delivery Person</p>
                  </Link>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}
export default Nav;
