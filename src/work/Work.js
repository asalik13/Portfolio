import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import WorkComponent from "../components/Work";

export default function (props) {
  return (
    <div style={{ textAlign: "center", paddingTop: "80px" }}>
      <span
        style={{
          position: "relative",
          fontSize: "40px",
          color: "white",
          fontWeight: "bold",
          margin: "auto",
        }}
      >
        My Experiences
      </span>
      <div style={{ paddingTop: "20px", textAlign: "left" }}>
        <VerticalTimeline animate = {false}>
          <WorkComponent
            company="BiNDS Lab"
            title="Research Assistant"
            details={[
              "Researching parallel computing in relation to biologically inspired neural networks under the mentorship of Prof. Ed Rietman.",
            ]}
            backgroundColor="white"
            color="black"
            iconStyle={{ background: "white", color: "#fff" }}
            date="Aug 2020 - Dec 2020"
            image="umass"
          />
          <WorkComponent
            company="The Girl Code"
            title="Fullstack Developer Intern"
            details={["In Progress..."]}
            backgroundColor="rgb(33, 150, 243)"
            color="white"
            iconStyle={{ background: "#ec008c", color: "#fff" }}
            date="July 2020 - Sept 2020"
            image="tgc"
          />
          <WorkComponent
            company="Tech For Good Inc"
            title="ML and Software Engineer Intern"
            details={[
              "Built a lifesaving firearm detection system for public buildings, within a group of 6 in an Agile environment to combat increasing occurrences of public shootings.",
              "Built an intranet-based web and desktop app with React, Electron, and Flask with pipelines for live video from security cameras, and deployed model using TensorFlow.",
              "Trained multiple convolution-based classification and segmentation networks including RetinaNet, Yolo v4 on Azure, and determined the best model for the company's use case",
            ]}
            backgroundColor="white"
            color="black"
            iconStyle={{ background: "white", color: "#fff" }}
            date="May 2020 - Aug 2020"
            image="tfg"
          />
          <WorkComponent
            company="Dr Manesh Kumar's Clinic"
            title="Consulting Software Engineer"
            details={[
              "Developed full stack multi-level-auth website with React, MongoDB, Express and NodeJS to serve as the main website for the clinic and over 30,000 patients.",
              "Implemented appointment system from scratch, added features including appointment booking, scheduling product delivery and customer management.",
              "Digitised the administrative and financial operations by integrating payment hooks, Google Calendar and Zoom, thereby reducing the patient waiting time by 50%.",
            ]}
            backgroundColor="rgb(33, 150, 243)"
            color="white"
            iconStyle={{ background: "white", color: "#fff" }}
            date="Jan 2019 - Jan 2020"
            image="drsalik"
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
