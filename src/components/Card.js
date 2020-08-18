import React, {useState} from "react";

export default function Card(props) {
  const cardStyle = {
    margin: "2%",
    marginBottom: "5%",
    width: "350px",
    height: "500px",
    border: "6px solid white",
    backgroundColor: "white",
    position: "relative",
    borderRadius: "20px",
    objectFit: "contain"
  };
  const imageStyle = {
    objectFit: "contain",
    width: "100%",
    height: "60%"
  };
  const topInfoStyle = {
    height: "7%",
    backgroundColor: "white",
    textAlign: "center",
    paddingTop: "2%",
    fontWeight: "bold",
    fontSize: "200%"
  };
  const summaryStyle = {
    paddingTop: "3%",
    fontWeight: "bold"
  };

  const toolsInfoStyle = {
    position: "absolute",
    paddingBottom: "2%",
    fontWeight: "bold",
    color: "gray",
    width: "100%",
    textAlign: "center",
    bottom: 0
  };

  return (
    <div style={cardStyle}>
      <div style={topInfoStyle}> {props.name}</div>
      <img
        style={imageStyle}
        src={require("./../images/" + props.image + ".png")}
        objectFit="fill"
      />
      <div className="summary" style={summaryStyle}>
        {props.summary}
      </div>

      <div>
        <br />
        <br />
        <div className="tools" style={toolsInfoStyle}>
          {props.tools}
        </div>
      </div>
    </div>
  );
}
