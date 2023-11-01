import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Hero from "./Hero";
import DiatRout from "../Diat/IndianDiat/DiatRout";
import DiatGain from "../Diat/IndianDiat/DiatGain";
import MondayGain from "../Diat/DiatForweightGain/MondayGain";
import TuesdayGain from "../Diat/DiatForweightGain/TuesdayGain";
import WednesdayGain from "../Diat/DiatForweightGain/WednesdayGain";
import ThursdayGain from "../Diat/DiatForweightGain/ThursdayGain";
import FridayGain from "../Diat/DiatForweightGain/FridayGain";
import SaturdayGain from "../Diat/DiatForweightGain/SaturdayGain";
import SundayGain from "../Diat/DiatForweightGain/SundayGain";
import DiatLoss from "../Diat/IndianDiat/DiatLoss";
import MondayLoss from "../Diat/DiatForweightLoss/MondayLoss";
import TuesdayLoss from "../Diat/DiatForweightLoss/TuesdayLoss";
import WednesdayLoss from "../Diat/DiatForweightLoss/WednesdayLoss";
import SundayLoss from "../Diat/DiatForweightLoss/SundayLoss";
import SaturdayLoss from "../Diat/DiatForweightLoss/SaturdayLoss";
import FridayLoss from "../Diat/DiatForweightLoss/FridayLoss";
import ThursdayLoss from "../Diat/DiatForweightLoss/ThursdayLoss";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ForgotPasswordUI from "../Authentication/Forgotpassword";
import Reset from "../Authentication/PasswordReast";
import Verify from "../Authentication/Verify";
import Registercheck from "../Authentication/Registercheck";
import Profile from "../Authentication/Profile/Profile";
import PrivateRoute from "../../PrivateRoute";
import EditUser from "../Authentication/Profile/Editprofile";
import Diatcuisine from "../Diat/Diatcuisine";

import TamilDiatGain from "../Diat/TamilnaduDiat/TamilDiatGain";
import TamilDiatLoss from "../Diat/TamilnaduDiat/TamilDiatLoss";
import TamilMondayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilMondayGain";
import TamilDiatRout from "../Diat/TamilnaduDiat/TamilDiatRout";
import TamilTuesdayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilTuesdayGain";
import TamilWednesdayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilWednesdayGain";
import TamilThursdayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilThursdayGain";
import TamilFridayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilFridayGain";
import TamilSaturdayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilSaturdayGain";
import TamilSundayGain from "../Diat/TamilnaduDiat/TamilDiatForweightGain/TamilSundayGain";
import TamilMondayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilMondayLoss";
import TamilTuesdayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilTuesdayLoss";
import TamilWednesdayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilWednesdayLoss";
import TamilThursdayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilThursdayLoss";
import TamilFridayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilFridayLoss";
import TamilSaturdayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilSaturdayLoss";
import TamilSundayLoss from "../Diat/TamilnaduDiat/TamilDiatForweightLoss/TamilSundayLoss";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user data is present in localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleButtonClick = () => {
    if (loggedIn) {
      // If user is logged in, perform logout action
      localStorage.removeItem("user");
      setLoggedIn(false); // Update the state to reflect the logout
      window.location.reload(); // Reload the page after logout
    } else {
      window.location.href = "/login"; // Replace with your login page URL
    }
  };

  return (
    <BrowserRouter>
      <div className="navbox">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
          {/* The rest of your original navigation code */}
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button
              className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7">
                {/* Hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {/* Collapsible navigation container */}
            <div
              className={`${
                isMobileNavOpen ? "block" : "hidden"
              } flex-grow basis-[100%] items-center lg:flex lg:basis-auto`}
              id="navbarSupportedContent1"
              data-te-collapse-item
            >
              {/* Logo */}

              {/* Left navigation links */}
              <ul
                className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                data-te-navbar-nav-ref
              >
                {/* Dashboard link */}
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    to={"/"}
                    data-te-nav-link-ref
                  >
                    Dashboard
                  </Link>
                </li>
                {/* Team link */}
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <Link
                    to={"/diatcuisine"}
                    data-te-nav-link-ref
                    className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  >
                    Diat Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right elements */}
            <div className="relative flex items-center">
              {/* Cart Icon */}

              {/* Container with two dropdown menus */}
              <div
                className="relative"
                data-te-dropdown-ref
                data-te-dropdown-alignment="end"
              >
                {/* First dropdown trigger */}
                <Link
                  className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  id="dropdownMenuButton1"
                  role="button"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <span className="[&>svg]:w-5">
                    <button
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onClick={handleButtonClick}
                    >
                      {" "}
                      <i className="fa fa-sign-out" aria-hidden="true">
                        {loggedIn ? "Logout" : "Login"}
                      </i>
                    </button>
                    {/* <button onClick={handleLogout}>
                      <i className="fa fa-sign-out" aria-hidden="true">
                      Logout
                      </i>
                    </button> */}
                  </span>
                </Link>
              </div>
              {/* Second dropdown container */}
              <div
                className="relative"
                data-te-dropdown-ref
                data-te-dropdown-alignment="end"
              >
                {/* Second dropdown trigger */}
                {loggedIn ? (
                  <Link
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    to={"/profile"}
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    {/* User avatar */}
                    <img
                      src="../assets/Profilelogo.png"
                      className="rounded-full"
                      style={{ height: "40px", width: "40px" }}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                ) : (
                  <Link
                    className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                    to={"/profile"}
                    id="dropdownMenuButton2"
                    role="button"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    {/* User avatar */}
                    <img
                      src="../assets/Profilelogo.png"
                      className="rounded-full"
                      style={{ height: "40px", width: "40px", display: "none" }}
                      alt=""
                      loading="lazy"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route index path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ForgotPasswordUI />} />
        <Route path="/paswordreset" element={<Reset />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/twostep" element={<Registercheck />} />

        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route
          path="/editprofile"
          element={<PrivateRoute element={<EditUser />} />}
        />
        {/* <Route
          path="/tamil"
          element={<PrivateRoute element={<TamilFridayGain />} />}
        /> */}
        {/* <Route path="/diat" element={<PrivateRoute element={<DiatRout />} />} />
        <Route index path="/DiatGain" element={<DiatGain />} /> */}

        <Route path="/diatcuisine">
          <Route index element={<PrivateRoute element={<Diatcuisine />} />} />

          <Route path="diat">
            <Route index element={<PrivateRoute element={<DiatRout />} />} />
            <Route path="diatgain" element={<DiatGain />} />
            <Route path="diatgain">
              <Route index element={<PrivateRoute element={<DiatGain />} />} />
              <Route
                path="mondaygain"
                element={<PrivateRoute element={<MondayGain />} />}
              />
              <Route
                path="tuesdaygain"
                element={<PrivateRoute element={<TuesdayGain />} />}
              />
              <Route
                path="wednesdaygain"
                element={<PrivateRoute element={<WednesdayGain />} />}
              />
              <Route
                path="thursdaygain"
                element={<PrivateRoute element={<ThursdayGain />} />}
              />
              <Route
                path="fridaygain"
                element={<PrivateRoute element={<FridayGain />} />}
              />
              <Route
                path="saturdaygain"
                element={<PrivateRoute element={<SaturdayGain />} />}
              />
              <Route
                path="sundaygain"
                element={<PrivateRoute element={<SundayGain />} />}
              />
            </Route>

            <Route path="diatloss" element={<DiatLoss />} />
            <Route path="diatloss">
              <Route index element={<PrivateRoute element={<DiatLoss />} />} />
              <Route
                path="mondayloss"
                element={<PrivateRoute element={<MondayLoss />} />}
              />
              <Route
                path="tuesdayloss"
                element={<PrivateRoute element={<TuesdayLoss />} />}
              />
              <Route
                path="wednesdayloss"
                element={<PrivateRoute element={<WednesdayLoss />} />}
              />
              <Route
                path="thursdayloss"
                element={<PrivateRoute element={<ThursdayLoss />} />}
              />
              <Route
                path="fridayloss"
                element={<PrivateRoute element={<FridayLoss />} />}
              />
              <Route
                path="saturdayloss"
                element={<PrivateRoute element={<SaturdayLoss />} />}
              />
              <Route
                path="sundayloss"
                element={<PrivateRoute element={<SundayLoss />} />}
              />
            </Route>
          </Route>

          <Route path="tamildiat">
            <Route
              index
              element={<PrivateRoute element={<TamilDiatRout />} />}
            />
            <Route path="tamildiatgain">
              <Route
                index
                element={<PrivateRoute element={<TamilDiatGain />} />}
              />
              <Route
                path="tamilmondaygain"
                element={<PrivateRoute element={<TamilMondayGain />} />}
              />
              <Route
                path="tamiltuesdaygain"
                element={<PrivateRoute element={<TamilTuesdayGain />} />}
              />
              <Route
                path="tamilwednesdaygain"
                element={<PrivateRoute element={<TamilWednesdayGain />} />}
              />
              <Route
                path="tamilthursdaygain"
                element={<PrivateRoute element={<TamilThursdayGain />} />}
              />
              <Route
                path="tamilfridaygain"
                element={<PrivateRoute element={<TamilFridayGain />} />}
              />
              <Route
                path="tamilsaturdaygain"
                element={<PrivateRoute element={<TamilSaturdayGain />} />}
              />
              <Route
                path="tamilsundaygain"
                element={<PrivateRoute element={<TamilSundayGain />} />}
              />
            </Route>

            <Route path="tamildiatloss">
              <Route
                index
                element={<PrivateRoute element={<TamilDiatLoss />} />}
              />
              <Route
                path="tamilmondayloss"
                element={<PrivateRoute element={<TamilMondayLoss />} />}
              />
              <Route
                path="tamiltuesdayloss"
                element={<PrivateRoute element={<TamilTuesdayLoss />} />}
              />
              <Route
                path="tamilwednesdayloss"
                element={<PrivateRoute element={<TamilWednesdayLoss />} />}
              />
              <Route
                path="tamilthursdayloss"
                element={<PrivateRoute element={<TamilThursdayLoss />} />}
              />
              <Route
                path="tamilfridayloss"
                element={<PrivateRoute element={<TamilFridayLoss />} />}
              />
              <Route
                path="tamilsaturdayloss"
                element={<PrivateRoute element={<TamilSaturdayLoss />} />}
              />
              <Route
                path="tamilsundayloss"
                element={<PrivateRoute element={<TamilSundayLoss />} />}
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="/404"
          element={<h3>Page not found ,please check url</h3>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
