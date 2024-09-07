import React from "react";
import Back from "../../assets/images/aaa.jpg";

const CategoryHero = () => {
  return (
    <div className="pb-8 px-32">
      {" "}
      {/* Removed px-32 to make the image full width */}
      <div
        className="relative h-[400px] w-full rounded-xl"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367133.jpg?uid=R157407297&ga=GA1.1.336651591.1720684343&semt=ais_hybrid')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire container
          backgroundPosition: "center",
        }}
      ></div>
      <div className="max-w-3xl p-4 isolate z-30 mt-[-2rem] mx-auto">
        <div className="shadow-lg bg-white p-4 sm:p-8 overflow-hidden rounded-2xl">
          <div className="relative z-10 flex flex-col space-y-6 text-left h-[100px]">
            <h1 className="text-4xl leading-none font-bold text-[#060640]">
              Explore Our <span className="text-[#FADED9]">Category</span>{" "}
              Reviews
            </h1>
            <h1 className="text-gray-400 text-xl max-w-2xl leading-none">
              Dive into detailed reviews and ratings for Category. Our platform
              features user experiences and expert insights to help you choose
              the best options available.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
