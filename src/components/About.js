import React from 'react';
import FadeWrapper from "./FadeWrapper";

const About = () => (
  <FadeWrapper>
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-800 text-white px-6"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I am a passionate <span className="font-semibold text-yellow-300">React Native Developer</span> with 2.7+ years of experience crafting high-quality mobile applications.  
          Skilled in building cross-platform apps that deliver seamless user experiences on both Android and iOS. I focus on clean, maintainable code and enjoy implementing engaging UI designs with smooth animations.  
          <br /><br />
          Currently, I work on large-scale insurance applications with over 1M+ downloads, contributing to modules that are live on the Play Store and App Store.
        </p>
      </div>
    </section>
  </FadeWrapper>
);

export default About;
