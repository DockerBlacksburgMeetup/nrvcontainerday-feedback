import * as React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { disabled : true, password : null, userId : null };
  }

  componentDidMount() {
    this.firstField.focus();
  }

  updatePassword = (event) => {
    const password = event.target.value;
    this.setState({ password });
    this.updateDisableState();
  };

  updateUserId = (event) => {
    const userId = event.target.value;
    this.setState({ userId });
    this.updateDisableState();
  };

  updateDisableState = () => {
    const { password, userId } = this.state;
    const disabled = !(password !== null && password.length > 0 && userId !== null && userId.length > 0);
    this.setState({ disabled });
  };

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.userId, this.state.password);
  };

  render() {
    const { disabled } = this.state;
    const submitting = this.props.status === 'PENDING';
    const failure = this.props.status === 'FAILURE';

    return (
        <form className="form-horizontal" onSubmit={this.submit}>
          <div className="form-group">
            <label className="control-label col-md-3">
              User ID
            </label>
            <div className="col-md-9">
              <input type="text" className="form-control" onChange={this.updateUserId} ref={(input) => { this.firstField = input; }} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-md-3">
              Password
            </label>
            <div className="col-md-9">
              <input type="text" className="form-control" onChange={this.updatePassword} />
            </div>
          </div>

          <div className="col-md-offset-3 col-md-9">
            {failure && <div className="alert alert-warning">Wrong password!</div>}

            { submitting ?
                (<button className="btn btn-primary" disabled><i className="fa fa-spin fa-circle-o-notch" />&nbsp;Submitting...</button>) :
                (<button className="btn btn-primary" disabled={disabled}>Submit!</button>)
            }
          </div>
        </form>
    );
  }
}

export default LoginForm;