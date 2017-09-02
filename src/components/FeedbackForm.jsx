import * as React from "react";
import Rating from "./Rating";
import "./FeedbackForm.css";

class FeedbackForm extends React.Component {

  constructor(props) {
    super(props);
    this.setDefaultState();
  }

  setDefaultState = () => {
    this.state = { disabled : true, model : {} };
  };

  sessionSelected = (event) => {
    this.updateModel("sessionId", parseInt(event.target.value, 10));
  };

  setPresenterPresenting = (rating) => {
    this.updateModel("presenterPresenting", rating);
  };

  setMaterialEasyToUnderstand = (rating) => {
    this.updateModel("materialEasyToUnderstand", rating);
  };

  setMoreExcited = (rating) => {
    this.updateModel("moreExcited", rating);
  };

  setBetter = (event) => {
    this.updateModel("howToBeBetter", event.target.value);    
  };

  setComment = (event) => {
    this.updateModel("comments", event.target.value);
  };

  updateModel = (key, value) => {
    this.setState({ model: {...this.state.model, [key]: value }}, this.updateDisabledState);
  };

  updateDisabledState = () => {
    const {sessionId, presenterPresenting, materialEasyToUnderstand, moreExcited} = this.state.model;
    const disabled = (sessionId === undefined || presenterPresenting === undefined ||
        materialEasyToUnderstand === undefined || moreExcited === undefined);
    this.setState({ disabled });
  };

  resetForm = (event) => {
    event.preventDefault();
    this.props.onReset();
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.model);
  };

  renderSessionOption = (session) => (
      <option key={session.id} value={session.id}>{session.name}</option>
  );

  render() {
    const { sessions, status } = this.props;
    const { disabled } = this.state;
    const submitting = (status === "PENDING");
    const failure = (status === "FAILURE");
    const success = (status === "SUCCESS");

    return (
        <form className="feedback-form" onSubmit={this.onFormSubmit} ref={(ref) => this.form = ref}>
          <div className="form-group">
            <label>Session</label>
            <select className="form-control" id="session" onChange={this.sessionSelected}>
              <option value="">Select session...</option>
              { sessions.map(this.renderSessionOption)}
            </select>
          </div>

          <div className="form-group">
            <label>The presenter did a good job presenting the material</label>
            <Rating onSelection={this.setPresenterPresenting} />
          </div>

          <div className="form-group">
            <label>The material was easy to understand</label>
            <Rating onSelection={this.setMaterialEasyToUnderstand} toggledClass="text-success" />
          </div>

          <div className="form-group">
            <label>The presentation made me more excited about the use of containers</label>
            <Rating onSelection={this.setMoreExcited} toggledClass="text-warning" />
          </div>
          
          <div className="form-group">
            <label>How could the session have been better? <small className="text-muted">(optional)</small></label>
            <textarea className="form-control" onChange={this.setBetter} />
          </div>

          <div className="form-group">
            <label>Other Comments <small className="text-muted">(optional)</small></label>
            <textarea className="form-control" onChange={this.setComment} />
          </div>

          <div className="form-group">
            <label>Data to be submitted:</label>
            <pre>{ JSON.stringify(this.state.model, "", 2) }</pre>
          </div>

          <div>
            { failure && (
                <div className="alert alert-warning">Submitting feedback failed for some reason! Please try again or bug someone at the event!</div>
            )}
            { success && (
                <div className="alert alert-success">
                  Feedback submitted successfully! <button href="javascript:void(0)" onClick={this.resetForm} className="btn btn-sm btn-default">Reset Form</button>
                </div>
            )}

            { submitting ?
                (<button className="btn btn-primary" disabled><i className="fa fa-spin fa-circle-o-notch" />&nbsp;Submitting...</button>) :
                (<button className="btn btn-primary" disabled={disabled}>Submit Feedback!</button>)
            }
          </div>
        </form>
    );
  }
}

export default FeedbackForm;