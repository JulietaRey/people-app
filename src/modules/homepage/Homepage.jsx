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
import Spinner from "../../assets/spinner.svg";

const styles = {
  root: {
    padding: "50px",
    minWidth: "700px"
  },
  userList: {
    height: "calc(100vh - 161px)",
    overflowY: "scroll",
    alignContent: "flex-start"
  },
  input: {
    border: "none",
    borderBottom: "2px solid #c5c5c5",
    margin: "20px 0",
    width: "100%",
    fontSize: "18px",
    "&:focus": {
      borderBottom: "2px solid #010161",
      transition: "border 1s ease-in",
      outline: "none"
    },
    "&::placeholder": {
      color: "#bfbfbf"
    }
  },
  chipContainer: {
    margin: "5px 0",
    height: "50px"
  },
  inputContainer: {
    paddingRight: "10px"
  },
  spinner: {
    width: "60px"
  }
};

class Homepage extends Component {
  state = {
    search: "",
    loading: true
  };
  async componentDidMount() {
    const { loadUsers } = this.props;
    await loadUsers();
    this.setState({
      loading: false
    });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value
    });
  };

  matchesSearch = ({ name }) => {
    const fullName = `${name.first} ${name.last}`;
    return fullName.includes(this.state.search);
  };

  render() {
    const { users, classes } = this.props;
    const { search } = this.state;
    return (
      <Row className={classes.root}>
        <Col xs={6} xl={8}>
          <Row>
            <h4>Users</h4>
          </Row>
          <Row className={classes.inputContainer}>
            <input
              value={this.state.search}
              placeholder={"Search for user"}
              className={classes.input}
              onChange={this.handleChange}
            />
          </Row>
          <Row />
          <Row className={classes.userList} top="xs">
            {this.state.loading ? (
              <img className={classes.spinner} src={Spinner} alt={"loading"} />
            ) : (
              (search ? users.filter(this.matchesSearch) : users).map(user => (
                <Col
                  xs={12}
                  md={6}
                  xl={4}
                  key={user.email}
                  className={classes.chipContainer}
                >
                  <UserChip user={user} />
                </Col>
              ))
            )}
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
