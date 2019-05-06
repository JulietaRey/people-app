import React from "react";
import { Row, Col } from "react-flexbox-grid";

const PreviewData = props => {
  const { user } = props;
  return (
    <Row>
      <Col xs={12}>
        <h3>Email Address</h3>
        <p>{user.email}</p>
      </Col>
      <Col xs={12}>
        <h3>Phone Number</h3>
        <p>{user.phone}</p>
      </Col>
    </Row>
  );
};

export default PreviewData;
