import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {signOut} from "../actions/signout";

class Header extends React.Component {

  render() {
    const { authenticated, signOut } = this.props;

    return (
        <div className="navbar navbar-default navbar-fixed-top" style={{marginBottom:"80px"}}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="images/nrv-logo.png" style={{display:"inline-block", height:"26px"}} alt="NRV ContainerDay Logo" /> ContainerDay<sub>Dev</sub>
            </a>
            { authenticated && (
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="javascript:void(0)" onClick={signOut}>Sign out</a></li>
                </ul>
            )}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated : state.auth.authenticated,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));