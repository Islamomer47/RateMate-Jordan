import Icon from "@mdi/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { mdiStarCircleOutline, mdiStar } from "@mdi/js";
import { Link } from "react-router-dom";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <div className="AboutSection-80 flex flex-row-reverse lg:w-4/5 sm:w-full mx-auto m-32">
          <div
            className="R lg:w-1/2 md:w-11/12 sm:w-11/12"
            data-aos="fade-left"
          >
            <h5>ABOUT US</h5>
            <h1>RateMate - Rating Platform</h1>
            <p>
              Welcome to RateMate, your go-to platform for insightful ratings
              and reviews in Jordan. At RateMate, we are dedicated to helping
              you make informed decisions by providing comprehensive and
              reliable ratings for various services and products. Our mission is
              to offer a transparent and user-friendly platform where you can
              share and explore honest feedback on your favorite places and
              experiences.
            </p>
            <Link
              to={"/review"}
              className="inline-block px-7 py-3 border-2 border-[#060640] text-white font-medium text-sm leading-snug uppercase rounded-lg hover:bg-[#060640] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Explore Ratings Now
            </Link>
          </div>
          <div
            className="L flex justify-center me-10 lg:w-1/2 md:w-11/12 sm:w-11/12"
            data-aos="fade-right"
          >
            <div className="LL sm:w-11/12 me-3 ">
              <div className="LLT mb-5 text-center py-5">
                <div className="LLT-Icon">
                  <Icon
                    path={mdiStar}
                    className="inline-block color-[#060640]"
                    size={2}
                  />
                </div>
                <h3 className="text-2xl py-3">Top-Rated Spots</h3>
                <p className="text-gray-500">
                  Discover the highest-rated places and services in Jordan,
                  handpicked by our community of reviewers.
                </p>
              </div>
              <div className="LLB">
                <div className="LLB-img">
                  <img src="./src/assets/images/home.jpg" alt="f1" />
                </div>
              </div>
            </div>
            <div className="LR sm:w-11/12">
              <div className="LRB">
                <div className="LRT-img">
                  <img src="./src/assets/images/rest.jpg" alt="f2" />
                </div>
              </div>
              <div className="LRT flex flex-col mt-5 text-center py-5">
                <div className="LRB-Icon text-center">
                  <Icon
                    path={mdiStarCircleOutline}
                    className="inline-block color-[#060640]"
                    size={2}
                  />
                </div>
                <h3 className="text-2xl py-3">Exclusive Reviews</h3>
                <p className="text-gray-500">
                  Explore exclusive reviews and insights on the best places to
                  visit and the top services to use, all rated by real users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
