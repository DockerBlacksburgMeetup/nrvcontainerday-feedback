import * as React from "react";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

class AuthRoute extends React.Component {
  render() {
    const { component : Component, authenticated, ...rest} = this.props;

    return (
      <Route {...rest} render={props => (
          authenticated ? (
              <Component {...props}/>
          ) : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }}/>
          )
      )}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated : state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(AuthRoute);