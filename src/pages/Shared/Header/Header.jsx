import React, { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  const navItems = (
    <>
      <li>
        <ActiveLink to={`/`}>Home</ActiveLink>
      </li>
      <li tabIndex={0}>
        <ActiveLink to={`/about`}>About</ActiveLink>
      </li>
      <li>
        <ActiveLink to={`/services`}>Services</ActiveLink>
      </li>
      <li>
        <ActiveLink to={`/blog`}>Blog</ActiveLink>
      </li>
      <li>
        <ActiveLink to={`/contact`}>Contact</ActiveLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <ActiveLink to={`/myBooking`}>My Booking</ActiveLink>
          </li>
          <li>
            <button onClick={handleLogout} className=" ">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <ActiveLink to={`/login`}>Login</ActiveLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-error">Appointment</a>
      </div>
    </div>
  );
};

export default Header;
