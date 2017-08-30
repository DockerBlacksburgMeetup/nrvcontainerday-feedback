import * as React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Panel from "./Panel";
import {checkAuthorization} from "../actions/checkAuthorization";

class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { authCheckStatus : "NONE" };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated)
      this.props.history.push("/feedback");
    else if (nextProps.failureCount !== this.props.failureCount)
      this.setState({ authCheckStatus : "FAILURE" });
  }

  onSubmit = (userId, password) => {
    this.setState({ authCheckStatus : "PENDING" });
    this.props.checkAuthorization(userId, password);
  };

  render() {
    const { authCheckStatus } = this.state;

    return (
        <Panel title="Login" icon="lock">
          <p>In order to provide feedback, you must first provide the authentication token!</p>
          <p>You will only need to do this once, as the <em>super, secret</em> password will be stored in local storage.</p>
          <hr />

          <LoginForm status={authCheckStatus} onSubmit={this.onSubmit} />
        </Panel>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated : state.auth.authenticated,
  failureCount : state.auth.failureCount,
});

const mapDispatchToProps = {
  checkAuthorization,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginView));