import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgHero from "../../assets/images/Rectangle .png";
import HeroImag from "../../assets/images/reviews-concept-landing-page.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative flex justify-center mt-5 z-[-30] ">
        <img src={BgHero} alt="" className="hidden lg:block" />
      </div>
      <div className="absolute w-full p-5 top-[-40px] flex flex-col lg:flex-row lg:items-center lg:p-[6rem] lg:justify-around">
        <div className="order-2 lg:order-1">
          <h3 className="text-left  text-2xl font-bold text-[#060640] lg:text-white tracking-[0.25rem] w-full lg:w-[600px] pl-0 lg:pl-28">
            Discover Your City's Best Kept{" "}
            <span className="text-[#FADED9]">Secrets</span> Secrets Find
            top-rated restaurants, shops, and experiences curated by locals just
            for you.
          </h3>
          <div className="flex justify-around mt-5 lg:mt-10 lg:pl-20  items-center">
            <Link to="/review">
              <button className="w-[150px] h-[35px] bg-[#FADED9] rounded-xl hover:opacity-80">
                Start Reviewing
              </button>
            </Link>
            <div className="flex flex-col items-center mx-2">
              <p className="font-serif lg:text-white text-[#060640] font-semibold text-2xl leading-7">
                236+
              </p>
              <p className="font-bitter font-normal text-xs leading-3 text-[#FADED9]">
                Business today
              </p>
            </div>
            <div className="flex flex-col items-center mx-2">
              <p className="font-serif lg:text-white text-[#060640] font-semibold text-2xl leading-7">
                98%
              </p>
              <p className="font-bitter font-normal text-xs leading-3 text-[#FADED9]">
                Results rated
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-right mb-5 lg:mb-0">
          <img
            src={HeroImag}
            alt="Description"
            className="h-[400px] w-[300px] mt-12 lg:h-[513px] lg:w-[600px] mx-auto lg:mx-0 lg:mt-10 lg:pr-14"
          />
        </div>
      </div>

      <div className="flex flex-col mt-[30rem] lg:mt-0 lg:flex-row  lg:w-[480px] w-[350px] lg:mx-0 justify-between align-middle items-center rounded-3xl border border-[#060640] p-2 shadow-md absolute left-[200px] lg:left-[200px] top-[350px] lg:top-[505px]  transform -translate-x-1/2 lg:translate-x-0">
        <input
          type="text"
          placeholder="Search for places..."
          className="border-none focus:outline-none focus:ring-0 focus:border-none w-full lg:w-60 mb-2 lg:mb-0"
        />
        <div className="border-t  border-black border-[1px] w-full lg:w-auto h-[1px] lg:h-[25px]"></div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-full focus:outline-none"
          >
            Amman, Jordan
            <svg
              className="ml-2 w-4 h-4"
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
              ></path>
            </svg>
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <ul className="py-1 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Location 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Location 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Location 3
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button className="p-2 text-white bg-[#060640] rounded-3xl focus:outline-none mt-2 lg:mt-0">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Hero;
