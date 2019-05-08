import React from "react";
import injectSheet from "react-jss";
import { Row, Col } from "react-flexbox-grid";
import UserImage from "./UserImage";
import classnames from "classnames";
import { compose } from "recompose";
import { connect } from "react-redux";
import { isUserSelected } from "../HomepageSelector";
import { bindActionCreators } from "redux";
import * as HomepageActions from "../HomepageActions";

const styles = {
  root: {
    borderRadius: "48px",
    height: "50px",
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    flexWrap: "unset",
    textAlign: "left",
    "&.selected": {
      border: "0.5px solid #c5c5c5"
    }
  },
  label: {
    paddingLeft: "15px",
    textTransform: "capitalize"
  }
};

const buildName = ({ first, last }) => `${first} ${last}`;

const UserChip = props => {
  const {
    classes,
    user: { name, picture },
    selected,
    selectUser
  } = props;

  const handleClick = () => {
    selectUser(props.user);
  };

  return (
    <button
      onClick={handleClick}
      className={classnames(classes.root, { selected })}
    >
      <Row middle="xs">
        <Col>
          <UserImage image={picture.thumbnail} />
        </Col>
        <Col className={classes.label}>{buildName(name)}</Col>
      </Row>
    </button>
  );
};

const mapStateToProps = (state, ownProps) => ({
  selected: isUserSelected(state)(ownProps.user.email)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...HomepageActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(UserChip);
