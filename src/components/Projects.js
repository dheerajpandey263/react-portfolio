import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Digit Insurance",
      description:
        "Digit Insurance is a leading mobile application in the insurance domain, trusted by over 1 million users and rated 4.8+ on the Play Store. The app empowers users to seamlessly purchase, manage, and claim insurance policies, ensuring a smooth and secure experience across Android and iOS platforms. I contributed to the development of core modules in both Life and General insurance sections, delivering performant and intuitive user interfaces.",
      image: "/images/digitlogo.png",
      tech: "React Native, TypeScript, Firebase, Redux, React Navigation, Axios, Git, CI/CD, Android Studio, Xcode",
      android:
        "https://play.google.com/store/apps/details?id=com.godigit.digit&pcampaignid=web_share",
      ios: "https://apps.apple.com/in/app/digit-insurance/id1453841964",
    },
    // Add more projects here in future
  ];

  const isSingleProject = projectList.length === 1;

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Projects
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600">
          Explore some of the key projects I have contributed to as a React
          Native Developer.
        </p>
        <div
          className={
            isSingleProject
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 gap-8"
          }
        >
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} isSingle={isSingleProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
