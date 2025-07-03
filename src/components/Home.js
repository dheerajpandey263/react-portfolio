import React from "react";
import FadeWrapper from "./FadeWrapper";

const Home = () => (
  <FadeWrapper>
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-indigo-800 text-white px-4"
    >
      <img
        src={process.env.PUBLIC_URL + "/images/profileimage.jpg"}
        alt="Dheeraj Pandey"
        className="w-40 h-40 rounded-full mb-6 shadow-lg border-4 border-white"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Dheeraj Pandey
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl">
        React Native Developer with 2.7+ years of experience building high-quality mobile applications.
      </p>
      <a
        href="/deeraj_pandey_react_native.pdf"
        className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 font-semibold"
        download
      >
        Download Resume
      </a>
    </section>
  </FadeWrapper>
);

export default Home;
