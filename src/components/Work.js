import React, {useEffect, useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import {useMediaQuery} from "../hooks/Mediastate";
const Accordion = withStyles({
  root: {
    margin: "0px",
    border: "0px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummaryStyles = props => {
  return withStyles({
    root: {
      backgroundColor: props.backgroundColor,
      borderBottom: "0px solid rgba(0, 0, 0, 0)",
      marginBottom: -1,
      minHeight: 56,
      padding: 0,
      color: props.color,
      "&$expanded": {
        minHeight: 56
      }
    },
    content: {
      padding: 0,

      "&$expanded": {
        margin: "0px 0"
      }
    },
    expanded: {}
  });
};

const AccordionDetailsStyle = props =>
  withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
      backgroundColor: props.backgroundColor,
      color: props.color
    }
  }));

export default function(props) {
  const AccordionSummary = AccordionSummaryStyles(props)(MuiAccordionSummary);
  const AccordionDetails = AccordionDetailsStyle(props)(MuiAccordionDetails);
  const isMobile = useMediaQuery("(max-width: 1170px)");
  const iconStyle = {
    container: isMobile => ({
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: isMobile ? "40px" : "60px",
      width: isMobile ? "40px" : "60px",
      objectFit: "contain"
    })
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: props.backgroundColor,
        color: isMobile ? props.color : "white"
      }}
      contentArrowStyle={{borderRight: "7px solid " + props.backgroundColor}}
      className="vertical-timeline-element--work"
      iconStyle={props.iconStyle}
      date={props.date}
      icon={
        <img
          src={require("./../images/" + props.image + ".png")}
          style={iconStyle.container(isMobile)}
        />
      }
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3
            style={{paddingLeft: "16px"}}
            className="vertical-timeline-element-title"
          >
            {props.company + ","}
            <br />
            {props.title}
          </h3>
          <br />
        </AccordionSummary>
        <AccordionDetails>{props.details}</AccordionDetails>
      </Accordion>
    </VerticalTimelineElement>
  );
}
