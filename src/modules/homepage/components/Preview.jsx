import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserSelected } from "../HomepageSelector";
import PreviewHeader from "./PreviewHeader";
import PreviewData from "./PreviewData";
import injectSheet from "react-jss";

const styles = {
  root: {
    border: "1px solid #c5c5c5",
    borderTop: "none",
    borderRadius: "2px",
    padding: "10px"
  }
};

const Preview = props => {
  const { user, classes } = props;
  return !user ? null : (
    <Row>
      <Col xs={12}>
        <Row>
          <PreviewHeader user={user} />
        </Row>
        <Row className={classes.root}>
          <PreviewData user={user} />
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: getUserSelected(state)
});

export default compose(
  connect(mapStateToProps),
  injectSheet(styles)
)(Preview);
