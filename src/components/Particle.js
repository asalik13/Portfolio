import React from "react";
import {Particles} from "@blackbox-vision/react-particles";

export default () => (
  <Particles
    id="simple"
    width="100%"
    height="100vh"
    style={{
      backgroundColor: "black",
      position: "fixed",
      zIndex: -100,
      top: 0,
      left: 0
    }}
    params={{
      particles: {
        number: {
          value: 50
        },
        size: {
          value: 3
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    }}
  />
);
