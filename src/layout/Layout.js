import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import Particles from "../components/Particle";
import Home from "../home/Home";
import Work from "../work/Work";
import Projects from "../projects/Projects";
import {
  ScrollingProvider,
  SectionLink,
  SectionLinks,
  Section,
} from "react-scroll-section";

function Navbar(props) {
  let navbarStyle = {
    position: "relative",
    maxWidth: "100%",
    height: "40px",
    lineHeight: "40px",
    backgroundColor: "white",
    position: "-webkit-sticky",
    position: "sticky",
    top: 0,
    padding: "1%",
    zIndex: 100,
    backgroundColor: "#fff",
    borderBottom: "3px solid gray",
  };

  let linksStyle = {
    float: "right",
    marginRight: "3%",
    color: "black",
    borderRadius: "10px",
    padding: "0 1% 0 1%",
    cursor: "pointer",
  };

  let welcomeStyle = {
    float: "left",
    marginLeft: "5%",
  };
  return (
    <div style={navbarStyle}>
      <SectionLinks>
        {({ allLinks }) =>
          Object.entries(allLinks)
            .reverse()
            .map(([key, link]) => (
              <span
                style={linksStyle}
                key={key}
                onClick={link.onClick}
                selected={link.isSelected}
              >
                {key}
              </span>
            ))
        }
      </SectionLinks>
    </div>
  );
}

let allLinks = { Work: "#work", Projects: "#projects", Home: "#home" };

const App = () => (
  <div>
    <ScrollingProvider>
      <Navbar />

      <Particles />
      <Section id="Home">
        <Home />
      </Section>
      <Section id="Work">
        <Work />
      </Section>
      <Section id="Projects">
        <Projects />
      </Section>
    </ScrollingProvider>
  </div>
);

export default App;
