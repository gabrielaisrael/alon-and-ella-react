import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "#FFD500",
    color: "#222222",
    position: "relative",
    borderRadius: 28,
    height: 56,
    borderTop: "solid 1px white",
    padding: "0 30px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, .5)",
    fontFamily: "'Varela Round', sans-serif",
    fontSize: 20,
    whiteSpace: "nowrap",
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
