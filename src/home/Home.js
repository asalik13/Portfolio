import React from "react";
import Typist from "react-typist";

let styles = {
  heroText: {
    margin: 0,
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    color: "white",
    fontSize: "70px",
    textAlign: "center",
    width: "100%",
    fontFamily: "Times New Roman",
  },
  container: {
    position: "relative",
    height: "700px",
  },
  image: {
    borderRadius: "50%",
  },
  info: {
    fontSize: "50px",
    fontFamily: "Times New Roman",
  },
};

function TextAnimation(props) {
  let roles = [
    "Software Engineer",
    "Machine Learning Engineer",
    "Researcher",
    "Peer Mentor",
  ];
  return (
    <span style={styles.info}>
      <Typist>
        <span>I am a</span>
        <span> {roles[0]} </span>
        <Typist.Backspace count={roles[0].length + 1} delay={200} />

        <span> {roles[1]} </span>
        <Typist.Backspace count={9} delay={200} />
        <span> {roles[2]} </span>
        <Typist.Backspace count={30} delay={200} />
        <span> {roles[3]} </span>
        <Typist.Backspace count={roles[3].length + 1} delay={200} />
        <span> {roles[0]} </span>
      </Typist>
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
        <br />
        <TextAnimation />
      </div>
    </div>
  );
}
