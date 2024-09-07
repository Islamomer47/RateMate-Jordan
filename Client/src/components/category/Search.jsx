import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const audioRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const startRecording = async () => {
    console.log("Attempting to start recording");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        const audioData = URL.createObjectURL(e.data);
        setAudioURL(audioData);
        console.log("Audio data available:", audioData);
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
      console.log("Recording started");
    } catch (err) {
      console.error("Error accessing microphone", err);
    }
  };

  const stopRecording = () => {
    console.log("Attempting to stop recording");
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      console.log("Recording stopped");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:justify-center">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[55px] lg:w-[480px] w-full lg:mx-0 justify-between items-center rounded-3xl border border-[#060640] p-2 shadow-md">
        <input
          type="text"
          placeholder="Search for places..."
          className="border-none focus:outline-none focus:ring-0 focus:border-none w-full lg:w-60 mb-2 lg:mb-0"
        />
        <div className="border-t border-black border-[1px] w-full lg:w-auto h-[1px] lg:h-[25px]"></div>
        <div className="relative z-50">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-full focus:outline-none z-50"
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
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-[100000000000]"
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
      <div className="relative w-full lg:w-auto">
        <motion.button
          className={`w-full lg:w-auto p-2 text-white ${
            isRecording ? "bg-red-500" : "bg-[#060640]"
          } font-bold rounded-xl`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
        >
          {isRecording ? "Recording..." : "Record Voice Filter"}
        </motion.button>
        {audioURL && (
          <audio ref={audioRef} controls className="mt-2">
            <source src={audioURL} type="audio/webm" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Search;
