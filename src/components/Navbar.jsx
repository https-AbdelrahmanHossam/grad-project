import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="max-container padding-container mt-3 flex h-[80px] w-[95%] items-center justify-between">
      <img src="/logos.svg" alt="trippy logo" width={70} height={70} />

      <ul className="hidden items-center justify-center gap-[10px] lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            to={link.href}
            key={link.key}
            className="px-[1rem] py-[0.7rem] text-[16px] text-navy-blue-dark"
          >
            {link.label}
          </Link>
        ))}

        <div className="flex items-center justify-center gap-3 pl-4">
          <Link to="login" className="text-navy-blue">
            Login
          </Link>
          <Link
            to="signup"
            className="rounded-[200px] bg-navy-blue-dark px-[25px] py-[10px] text-[14px] font-medium text-off-white shadow-md duration-150 ease-in-out hover:-translate-y-1 hover:shadow-navy-blue-dark"
          >
            Register
          </Link>
        </div>
      </ul>

      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-center gap-3">
          <Link to="login" className="text-lg text-navy-blue">
            Login
          </Link>
          <span onClick={handleNav}>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </span>
        </div>

        <div
          className={
            nav
              ? "sm:top- fixed right-5 top-[15%] z-50 h-[260px] w-[50%] rounded-3xl bg-off-white px-5 drop-shadow-2xl duration-500 ease-in-out md:w-[30%]"
              : "fixed -top-[100%]"
          }
        >
          <ul className="flex w-full flex-col items-center justify-center text-sm uppercase">
            {NAV_LINKS.map((link) => (
              <li
                className="cursor-pointer border-b p-4 text-navy-blue-dark"
                key={link.key}
              >
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
            <li className="mt-1 capitalize">
              <Link
                to="signup"
                className="rounded-[200px] bg-navy-blue-dark px-[25px] py-[10px] text-[14px] font-medium text-off-white shadow-md duration-150 ease-in-out hover:-translate-y-1 hover:shadow-navy-blue-dark"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
