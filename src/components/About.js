import React from 'react';
import FadeWrapper from "./FadeWrapper";

const About = () => (
  <FadeWrapper>
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-800 text-white px-4 sm:px-6"
    >
      <div className="max-w-2xl sm:max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          I am a passionate{" "}
          <span className="font-semibold text-yellow-300">React Native Developer (Android &amp; iOS)</span>{" "}
          with <span className="font-semibold">3.5 years</span> of experience crafting high-quality mobile applications.
          Skilled in building cross-platform apps that deliver seamless user experiences on both Android and iOS.
          I focus on clean, maintainable code and enjoy implementing engaging UI designs with smooth animations.
          <br /><br />
          Currently, I work on large-scale insurance applications with over{" "}
          <span className="font-semibold text-yellow-300">1M+ downloads</span>, contributing to modules that are live on the Play Store and App Store.
        </p>

        {/* Achievements */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>2× Tech Titan Awards</li>
            <li>Winner — Digit Mastermind</li>
          </ul>
        </div>
      </div>
    </section>
  </FadeWrapper>
);

export default About;
