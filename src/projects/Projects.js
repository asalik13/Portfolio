import React, {useState, useEffect} from "react";
import Card from "../components/Card";
import Deviceful from "deviceful";

export default function Layout(props) {
  const imageStyle = {
    objectFit: "contain",
    width: "100%",
    height: "70%"
  };
  let numberOfFeeds = 5;
  let keys = Array.from(Array(numberOfFeeds).keys());
  let feeds = keys.map(key => <Card key={key} />);
  let layoutStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "60px"
  };

  return (
    <center style={{paddingTop: "80px"}}>
      <span
        style={{
          fontSize: "40px",
          color: "white",
          fontWeight: "bold"
        }}
      >
        My Projects
      </span>
      <div style={layoutStyle}>
        <Card
          name="MREC"
          summary="A Movie Recommender Enginer based on a collaborative filtering algorithm running on a Restricted Boltzmann Machine"
          tools="React.js, Python, Numpy, Flask, Gunicorn"
          image="mrec"
        />
        <Card
          name="GENIE"
          summary="A Python library for building diverse, performant neural networks, with the option to use an optimizer based on genetic algorithm"
          tools="Python, Pandas, Numba, Numpy"
          image="genie"
        />
        <Card
          name="MERN Boilerplate"
          summary="A production ready, full stack boilerplate for writing full stack web apps with login, register, forget, verify backend routes"
          tools="MongoDB, Express.js, React.js, Node.js, Passport.js"
          image="mern"
        />
      </div>
    </center>
  );
}
