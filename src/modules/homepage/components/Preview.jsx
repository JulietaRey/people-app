import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserSelected } from "../HomepageSelector";
import PreviewHeader from "./PreviewHeader";
import PreviewData from "./PreviewData";

const Preview = props => {
  const { user } = props;
  return !user ? null : (
    <Row>
      <Col xs={12}>
        <Row>
          <PreviewHeader user={user} />
        </Row>
        <Row>
          <PreviewData user={user} />
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  user: getUserSelected(state)
});

export default compose(connect(mapStateToProps))(Preview);
