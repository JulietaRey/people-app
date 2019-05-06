import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as HomepageActions from "./HomepageActions";
import UserChip from "./components/UserChip";
import { Row, Col } from "react-flexbox-grid";
import { userListSelector } from "./HomepageSelector";
import injectSheet from "react-jss";
import { compose } from "recompose";
import Preview from "./components/Preview";

const styles = {
  root: {
    padding: "50px",
    minWidth: "700px"
  },
  userList: {
    height: "calc(100vh - 161px)",
    overflowY: "scroll"
  }
};

class Homepage extends Component {
  async componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }
  render() {
    const { users, classes } = this.props;
    return (
      <Row className={classes.root}>
        <Col xs={6} xl={8}>
          <Row>
            <h4>Users</h4>
          </Row>
          <Row />
          <Row className={classes.userList}>
            {users.map(user => (
              <Col xs={12} md={6} xl={4} key={user.email}>
                <UserChip user={user} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={6} xl={4}>
          <Preview />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  users: userListSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...HomepageActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectSheet(styles)
)(Homepage);
