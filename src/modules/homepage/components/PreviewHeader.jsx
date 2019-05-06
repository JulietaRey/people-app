import React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";
import { Row, Col } from "react-flexbox-grid";

const styles = {
  root: {
    position: "relative"
  },
  fullWidth: {
    width: "100%"
  },
  background: {
    maxHeight: "400px",
    objectFit: "cover",
    filter: "blur(5px)",
    left: "-15px",
    top: "-15px",
    bottom: "-15px",
    right: "-15px"
  },
  backgroundContainer: {
    position: "relative",
    overflow: "hidden"
  },
  info: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    "& > div": {
      height: "100%"
    },
    "& *": {
      color: "white"
    }
  },
  avatar: {
    borderRadius: "50%",
    border: "2px solid white",
    marginTop: "5vh"
  },
  occupation: {
    marginBottom: "5vh"
  }
};

const PreviewHeader = props => {
  const { user, classes } = props;
  return (
    <div className={classnames(classes.fullWidth, classes.root)}>
      <div
        className={classnames(classes.fullWidth, classes.backgroundContainer)}
      >
        <img
          className={classnames(classes.fullWidth, classes.background)}
          src={user.picture.large}
          alt={"background"}
        />
      </div>
      <div className={classes.info}>
        <Row center="xs" bottom="xs">
          <Col xs={12}>
            <img
              className={classes.avatar}
              src={user.picture.large}
              alt={"avatar"}
            />
          </Col>
          <Col xs={12}>
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
          </Col>
          <Col xs={12} className={classes.occupation}>
            <h6>student</h6>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default injectSheet(styles)(PreviewHeader);
