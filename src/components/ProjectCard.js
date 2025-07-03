import React from 'react';

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  android,
  ios,
  isSingle, // 👈 Add this prop
}) => (
  <div
    className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center ${
      isSingle ? 'max-w-lg w-full' : ''
    }`}
  >
    <img
      src={process.env.PUBLIC_URL + image}
      alt={`${title} logo`}
      className="w-24 h-24 object-contain mb-4"
    />
    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="font-semibold text-gray-700">Tech Stack:</h4>
      <p className="text-sm text-gray-500">{tech}</p>
    </div>
    <div className="flex space-x-4">
      {android && (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Android App
        </a>
      )}
      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          iOS App
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
