import React from "react";
import FadeWrapper from "./FadeWrapper";

const Home = () => (
  <FadeWrapper>
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-600 to-indigo-800 text-white px-4"
    >
      {/* Profile Image */}
      <img
        src={process.env.PUBLIC_URL + "/images/profileimage.jpg"}
        alt="Dheeraj Pandey"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 shadow-lg border-4 border-white object-cover"
      />

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Dheeraj Pandey
      </h1>

      {/* Title/Description */}
      <p className="text-base sm:text-lg md:text-xl text-center max-w-xl leading-relaxed">
        React Native Developer with 2.7+ years of experience delivering high-quality cross-platform mobile apps with a focus on UI/UX and performance.
      </p>

      {/* Resume Button */}
      <a
        href="/deeraj_pandey_react_native.pdf"
        className="mt-6 bg-white text-blue-600 px-5 py-2.5 rounded-full shadow-md hover:bg-blue-100 transition duration-300 font-semibold"
        download
      >
        Download Resume
      </a>
    </section>
  </FadeWrapper>
);

export default Home;
