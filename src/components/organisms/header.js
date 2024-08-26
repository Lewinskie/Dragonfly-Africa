import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import { NavTitles } from "../../frontend-data";
import NavLinkList from "../molecules/navLinkList";
import SideNavLinkList from "../molecules/sideNavLinkList";
import { OpenedMenu } from "../icons";
import { ClosedMenu } from "../icons";
import { BookingIcon } from "../icons";
// import PromoHeader from "../molecules/promoHeader";
import Logo from "../atoms/brand";
import { Button } from "../cva/buttonCVA";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <div className="mb-0">
      {/* <PromoHeader /> */}
      <div>
        <nav
          className={` left-0 top-4 z-[900] w-full ${
            sticky ? "bg-white md:shadow-md" : "bg-white md:shadow-md"
          }`}
        >
          {/* Our Main Navigation section */}
          <div className="relative mx-auto flex max-w-7xl items-center justify-between  p-4">
            {/* Our Logo */}
            <Logo />
            <div className="flex flex-row items-center space-x-5">
              {/* Our Main Menu */}
              <NavLinkList sticky={sticky} />
            </div>
            {/* Our Mobile Humbuger Menu */}
            <div className="z-[999]  md:hidden" onClick={handleMenu}>
              {!open ? (
                <OpenedMenu className="text-primary-500" />
              ) : (
                <ClosedMenu className="text-primary-500" />
              )}
            </div>
            <div
              // className={`absolute  top-0 ${
              //   open ? "right-0 z-20" : "right-[-100%] "
              // } h-screen w-2/3 bg-white px-4 py-2 text-blue-900 md:hidden `}

              className={`fixed top-0 right-0 z-40 h-full w-full bg-white px-4 py-2 text-blue-900 md:hidden ${
                open ? "" : "hidden"
              } transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <SideNavLinkList sticky={sticky} onClosemenu={handleCloseMenu} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

import { cva } from "class-variance-authority";
