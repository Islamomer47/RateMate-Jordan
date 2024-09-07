import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiLogOut } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Logo from "../../assets/images/Logo.png";

import { AuthContext } from "../../hooks/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); // Add a ref for the menu

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    // Handle profile navigation here
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // Close the menu if clicked outside
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openSignUp = () => setIsSignUpOpen(true);
  const closeSignUp = () => setIsSignUpOpen(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (setState) => {
    setState(true);
  };

  const handleMouseLeave = (setState) => {
    setState(false);
  };

  const handleMobileMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <nav className="bg-white px-10 relative z-50 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-[100px] w-[100px]" />
          </div>
        </NavLink>
        <div className="hidden md:flex flex-grow text-center justify-center">
          <ul className="flex justify-center space-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 underline font-bold"
                    : "text-gray-700 hover:text-gray-900"
                }
              >
                Home
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
              onMouseLeave={() => handleMouseLeave(setIsAboutOpen)}
            >
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <NavLink
                  to="/listing/Restaurants"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 underline font-bold flex items-center"
                      : "text-gray-700 flex items-center"
                  }
                >
                  Restaurants
                </NavLink>

                <svg
                  className={`ml-2 w-4 h-4 transition-transform transform ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    className="absolute left-0 w-64 mt-2 bg-white border border-gray-200 rounded shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => handleMouseEnter(setIsAboutOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsAboutOpen)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul>
                          <li>
                            <NavLink
                              to="/category/Restaurants/TakeOut"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              TakeOut
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Delivery"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Delivery
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Reservations"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Reservations
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Burgers"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Burgers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="overflow-y-auto max-h-48">
                        <ul>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Thai"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Thai
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Italian"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Italian
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Chinese"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Chinese
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/Restaurants/Mexican"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Mexican
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsHomeOpen)}
              onMouseLeave={() => handleMouseLeave(setIsHomeOpen)}
            >
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <NavLink
                  to="/listing/HomeServices"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 underline font-bold flex items-center"
                      : "text-gray-700 flex items-center"
                  }
                >
                  Home Services
                </NavLink>
                <svg
                  className={`ml-2 w-4 h-4 transition-transform transform ${
                    isHomeOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isHomeOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 bg-white w-[20rem] border border-gray-200 rounded shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => handleMouseEnter(setIsHomeOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsHomeOpen)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Contractors"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Contractors
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Electricians"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Electricians
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/HomeCleaners"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Home Cleaners
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/HVAC"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              HVAC
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="overflow-y-auto max-h-48">
                        <ul>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Landscaping"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Landscaping
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Locksmiths"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Locksmiths
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Movers"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Movers
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/HomeServices/Plumbers"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Plumbers
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
            >
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <NavLink
                  to="/listing/AutoServices"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 underline font-bold flex items-center"
                      : "text-gray-700 flex items-center"
                  }
                >
                  Auto Services
                </NavLink>
                <svg
                  className={`ml-2 w-4 h-4 transition-transform transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 bg-white w-[20rem] border border-gray-200 rounded shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul>
                          <li>
                            <NavLink
                              to="/category/AutoServices/CarWash"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Car Wash
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Detailing"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Detailing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Towing"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Towing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Repair"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Repair
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="overflow-y-auto max-h-48">
                        <ul>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Insurance"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Insurance
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Parts"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Parts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/Tires"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Tires
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/AutoServices/WindowTinting"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Window Tinting
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsContactOpen)}
              onMouseLeave={() => handleMouseLeave(setIsContactOpen)}
            >
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                <NavLink
                  to="/listing/More"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-900 underline font-bold flex items-center"
                      : "text-gray-700 flex items-center"
                  }
                >
                  More
                </NavLink>
                <svg
                  className={`ml-2 w-4 h-4 transition-transform transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    className="absolute left-0 w-64 mt-2 bg-white border border-gray-200 rounded shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => handleMouseEnter(setIsContactOpen)}
                    onMouseLeave={() => handleMouseLeave(setIsContactOpen)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <ul>
                          <li>
                            <NavLink
                              to="/category/more/DryCleaning"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Dry Cleaning
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/PhoneRepair"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Phone Repair
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/Bars"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Bars
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/Nightlife"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Nightlife
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div className="overflow-y-auto max-h-48">
                        <ul>
                          <li>
                            <NavLink
                              to="/category/more/HairSalons"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Hair Salons
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/Gyms"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Gyms
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/Massage"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Massage
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/category/more/Shopping"
                              className={({ isActive }) =>
                                `block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                                  isActive ? "font-bold" : ""
                                }`
                              }
                            >
                              Shopping
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-900 underline font-bold flex items-center"
                    : "text-gray-700 flex items-center"
                }
              >
                Category
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="flex items-center mr-10 hidden md:block">
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 underline font-bold"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Write a Review
          </NavLink>
        </div>
        {user ? (
          <>
            <div className="flex items-center">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-4 cursor-pointer"
                onClick={toggleDropdown}
              />
              <span className="mr-4">{user.displayName || "User"}</span>
              <FaChevronDown
                className="cursor-pointer"
                onClick={toggleDropdown}
              />
            </div>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-28 right-0 w-48 bg-white rounded-md shadow-lg py-2"
              >
                <Link to="/uprofile">
                  <div
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={handleProfileClick}
                  >
                    <FiUser className="mr-2" />
                    <span>Profile</span>
                  </div>
                </Link>
                <div
                  onClick={logout}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <FiLogOut className="mr-2" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center hidden md:block">
              <button
                onClick={openLogin}
                className="bg-[#060640] hover:bg-[#060640] hover:opacity-80 text-white font-bold h-8 px-4 rounded-3xl mr-2"
              >
                LogIn
              </button>
            </div>
            <Login
              isOpen={isLoginOpen}
              onClose={closeLogin}
              onSignUpOpen={openSignUp}
            />
            <Signup
              isOpen={isSignUpOpen}
              onClose={closeSignUp}
              onLoginOpen={openLogin}
            />
          </>
        )}
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />
            <motion.div
              className="fixed inset-y-0 right-0 w-72 bg-gradient-to-b from-white to-gray-100 shadow-lg z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-300">
                <img src={Logo} alt="Logo" className="h-12 w-12" />
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-800 hover:text-gray-900"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col mt-4">
                <li className="px-6 py-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-gray-800 font-semibold border-l-4 border-[#060640] pl-4"
                        : "block text-gray-700 hover:text-gray-900  pl-4"
                    }
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative">
                  <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 px-6 py-3">
                    <NavLink
                      to="/Restaurants"
                      className={({ isActive }) =>
                        isActive
                          ? "block text-gray-800 font-semibold border-l-4 border-[#060640] pl-4"
                          : "block text-gray-700 hover:text-gray-900  pl-4"
                      }
                      onClick={toggleMobileMenu}
                    >
                      Restaurants
                    </NavLink>
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform transform cursor-pointer ${
                        activeMenu === "about" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleMobileMenuClick("about")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeMenu === "about" && (
                      <motion.ul
                        className="bg-white border border-gray-300 rounded-lg mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li>
                          <NavLink
                            to="/Restaurants/TakeOut"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            TakeOut
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/Restaurants/Delivery"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Delivery
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/Restaurants/Reservation"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Reservation
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/Restaurants/Burgers"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Burgers
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/Restaurants/Thai"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Thai
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/Restaurants/Italian"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Italian
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/Restaurants/chinese"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Chinese
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/Restaurants/Mexican"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Mexican
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li className="relative">
                  <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 px-6 py-3">
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "block text-gray-800 font-semibold border-l-4 border-[#060640] pl-4"
                          : "block text-gray-700 hover:text-gray-900  pl-4"
                      }
                      onClick={toggleMobileMenu}
                    >
                      Home Services
                    </NavLink>
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform transform cursor-pointer ${
                        activeMenu === "services" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleMobileMenuClick("services")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeMenu === "services" && (
                      <motion.ul
                        className="bg-white border border-gray-300 rounded-lg mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li>
                          <NavLink
                            to="/services/Contractors"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Contractors{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/services/Electricians"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Electricians{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/services/Cleaners"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Cleaners{" "}
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/services/HVAC"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            HVAC{" "}
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/services/Landscaping"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Landscaping{" "}
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/services/Locksmiths"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Locksmiths{" "}
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/services/Plumbers"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Plumbers{" "}
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/services/Cleaners"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Cleaners{" "}
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="relative">
                  <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 px-6 py-3">
                    <NavLink
                      to="/AutoServices"
                      className={({ isActive }) =>
                        isActive
                          ? "block text-gray-800 font-semibold border-l-4 border-[#060640] pl-4"
                          : "block text-gray-700 hover:text-gray-900  pl-4"
                      }
                      onClick={toggleMobileMenu}
                    >
                      Auto Services
                    </NavLink>
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform transform cursor-pointer ${
                        activeMenu === "more" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleMobileMenuClick("more")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeMenu === "more" && (
                      <motion.ul
                        className="bg-white border border-gray-300 rounded-lg mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li>
                          <NavLink
                            to="/AutoServices/AutoRepair"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Auto Repair
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/AutoServices/Towing"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Towing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/AutoServices/AutoDetailing"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Auto Detailing
                          </NavLink>
                        </li>{" "}
                        {/*          */}
                        <li>
                          <NavLink
                            to="/AutoServices/BodyShops"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Body Shops
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/CarWash"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Car Wash
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/CarDealers"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Car Dealers
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/OilChange"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Oil Change
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/Parking"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Parking
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li className="relative">
                  <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900 px-6 py-3">
                    <NavLink
                      to="/More"
                      className={({ isActive }) =>
                        isActive
                          ? "block text-gray-800 font-semibold border-l-4 border-[#060640] pl-4"
                          : "block text-gray-700 hover:text-gray-900  pl-4"
                      }
                      onClick={toggleMobileMenu}
                    >
                      More
                    </NavLink>
                    <svg
                      className={`ml-2 w-4 h-4 transition-transform transform cursor-pointer ${
                        activeMenu === "contact" ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleMobileMenuClick("contact")}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <AnimatePresence>
                    {activeMenu === "contact" && (
                      <motion.ul
                        className="bg-white border border-gray-300 rounded-lg mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <li>
                          <NavLink
                            to="/AutoServices/DryCleaning"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Dry Cleaning
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/AutoServices/PhoneRepair"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Phone Repair
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/AutoServices/Bars"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Bars
                          </NavLink>
                        </li>{" "}
                        {/*          */}
                        <li>
                          <NavLink
                            to="/AutoServices/Nightlife"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Nightlife
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/HairSalons"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Hair Salons
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/Gyms"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Gyms
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/Massage"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Massage
                          </NavLink>
                        </li>{" "}
                        <li>
                          <NavLink
                            to="/AutoServices/Shopping"
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                            onClick={toggleMobileMenu}
                          >
                            Shopping
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li className="px-6 py-3">
                  <NavLink
                    to="/review"
                    className={({ isActive }) =>
                      isActive
                        ? "block text-[#060640] font-semibold border-l-4 border-[#060640] pl-4"
                        : "block text-gray-700 hover:text-gray-900 hover:bg-gray-200 pl-4"
                    }
                    onClick={toggleMobileMenu}
                  >
                    Write a Review
                  </NavLink>
                </li>
                <li className="px-6 py-3">
                  {user ? (
                    <>
                      <div className="flex items-center">
                        <img
                          src={
                            user.photoURL || "https://via.placeholder.com/150"
                          }
                          alt="Avatar"
                          className="w-10 h-10 rounded-full mr-4 cursor-pointer"
                          onClick={toggleDropdown}
                        />
                        <span className="mr-4">
                          {user.displayName || "User"}
                        </span>
                        <FaChevronDown
                          className="cursor-pointer"
                          onClick={toggleDropdown}
                        />
                      </div>
                      {isDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute mt-12 w-48 bg-white rounded-md shadow-lg py-2"
                        >
                          <Link to="/uprofile">
                            <div
                              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                              onClick={handleProfileClick}
                            >
                              <FiUser className="mr-2" />
                              <span>Profile</span>
                            </div>
                          </Link>
                          <div
                            onClick={logout}
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                          >
                            <FiLogOut className="mr-2" />{" "}
                            {/* Updated logout icon */}
                            <span>Logout</span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex items-center  md:block">
                        <button
                          onClick={openLogin}
                          className="bg-[#060640] hover:bg-[#060640] hover:opacity-80 text-white font-bold h-8 px-4 rounded-3xl mr-2"
                        >
                          LogIn
                        </button>
                      </div>
                      <Login
                        isOpen={isLoginOpen}
                        onClose={closeLogin}
                        onSignUpOpen={openSignUp}
                      />
                      <Signup
                        isOpen={isSignUpOpen}
                        onClose={closeSignUp}
                        onLoginOpen={openLogin}
                      />
                    </>
                  )}
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
