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
        <VerticalTimeline>
          <WorkComponent
            company="BiNDS Lab"
            title="Incoming Research Assistant"
            details="
              I am going to be researching parallel computing in relation with
              Machine Learning on FPGAs under the mentorship of my professor, Ed
              Reitman.
            "
            backgroundColor="white"
            color="black"
            iconStyle={{ background: "white", color: "#fff" }}
            date="Aug 2020 - Dec 2020"
            image="umass"
          />
          <WorkComponent
            company="The Girl Code"
            title="Fullstack Developer Intern"
            details="In Progress..."
            backgroundColor="rgb(33, 150, 243)"
            color="white"
            iconStyle={{ background: "#ec008c", color: "#fff" }}
            date="July 2020 - Sept 2020"
            image="tgc"
          />
          <WorkComponent
            company="Tech For Good Inc"
            title="ML and Software Engineer Intern"
            details="I worked within a group of 6 to build a lifesaving firearm
          detection system that uses a deep learning object segmentation and
          detection network.
          I tested and trained various convolution-based
          classification and segmentation networks including FasterRCNN,
          RetinaNet, Yolo v4 in PyTorch, and TensorFlow on a VM on Azure to
          determine the best model for the company's use case. I also
          labeled 10k pictures of the dataset using labelimg."
            backgroundColor="white"
            color="black"
            iconStyle={{ background: "white", color: "#fff" }}
            date="May 2020 - Aug 2020"
            image="tfg"
          />
          <WorkComponent
            company="Dr Manesh Kumar's Clinic"
            title="Consulting Software Engineer"
            details="I developed a full-stack multi-level-auth website with React,
          MongoDB, Express, and NodeJS where I implemented an appointment
          system from scratch, added features including appointment booking,
          scheduling medicine delivery at the customer level and customer
          management at admin level. <br />
          <br />I also built a Tkinter and Pandas based desktop app in Python
          which digitized the administrative and clinical operations, thereby
          reducing the patient lead time by 12.5% and hence increasing profits
          margin by 8%"
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
