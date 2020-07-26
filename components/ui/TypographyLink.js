import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
  root: {
    background: styledBy("color", {
      default: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    }),
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      default: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      blue: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    }),
  },
};

const TypographyLink = withStyles(styles)(({ classes, color, ...other }) => (
  <Typography className={classes.root} {...other} />
));

export default TypographyLink;
