// src/components/Resume.js
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import FadeWrapper from "./FadeWrapper";

const Resume = () => {
const resumeUrl = "/deeraj_pandey_react_native.pdf"; 
  const plugin = defaultLayoutPlugin();

  return (
    <FadeWrapper>
      <div className="resume-container">
        <h2>My Resume</h2>
        <a href={resumeUrl} download className="download-btn">Download Resume</a>
        <div className="pdf-viewer">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={resumeUrl} plugins={[plugin]} />
          </Worker>
        </div>
      </div>
    </FadeWrapper>
  );
};

export default Resume;
