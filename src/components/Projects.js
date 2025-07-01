import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
const projectList = [
    {
        title: 'Digit Insurance',
        description: 'Digit Insurance is a leading insurance app available on both Android and iOS, trusted by over 1 million users with a 4.8 rating on the Play Store. The app allows users to easily buy, manage, and claim insurance policies, offering a seamless and secure experience.',
        image: '/images/digitlogo.png',
        tech: 'React Native, Firebase, Redux, TypeScript, React Navigation, Axios, Git,CI/CD, Android Studio, Xcode,',
        android : 'https://play.google.com/store/apps/details?id=com.godigit.digit&pcampaignid=web_share',
        ios: 'https://apps.apple.com/in/app/digit-insurance/id1453841964', // if published, add store/play link
    },
    // {
    //   title: 'TodoX',
    //   description: 'An offline-capable todo app with dark mode, sync, and animations.',
    //   image: '/images/todox.png',
    //   tech: 'React Native, AsyncStorage, Expo',
    //   github: 'https://github.com/yourusername/todox',
    //   live: '', // optional
    // },
];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
