import React from "react";
import Typist from "react-typist";
import TextLoop from "react-text-loop";

let styles = {
  heroText: {
    margin: 0,
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    color: "white",
    fontSize: "10vw",
    textAlign: "center",
    width: "100%",
    fontFamily: "Times New Roman",
    transition: 0,
  },
  container: {
    position: "relative",
    height: "700px",
  },
  image: {
    borderRadius: "50%",
  },
  info: {
    fontSize: "5vw",
    fontFamily: "Times New Roman",
  },
  rotate: {
    color: "#aec6cf",
  },
};

function TextAnimation(props) {
  let roles = [
    "Software Engineer",
    "Machine Learning Engineer",
    "Research Assistant",
    "Peer Mentor",
  ];
  return (
    <span style={styles.info}>
      <TextLoop mask={true} interval={700}>
        {roles.map((role) => (
          <span style={styles.rotate}>{role}</span>
        ))}
      </TextLoop>
    </span>
  );
}
export default function (props) {
  return (
    <div style={styles.container}>
      <div style={styles.heroText}>
        <img style={styles.image} src={require("./../images/picme.jpeg")} />
        <br />
        <span>Ayush Salik</span>
        <br />
        <TextAnimation />
      </div>
    </div>
  );
}
