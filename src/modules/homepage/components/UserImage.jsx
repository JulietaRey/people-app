import React from "react";
import injectSheet from "react-jss";

const styles = {
  root: {
    borderRadius: "50%"
  }
};

const UserImage = props => {
  const { image, classes } = props;
  return <img className={classes.root} src={image} alt="thumb" />;
};
export default injectSheet(styles)(UserImage);
