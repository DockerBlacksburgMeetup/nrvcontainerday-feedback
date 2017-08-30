import * as React from "react";
import Panel from "./Panel";
import {connect} from "react-redux";
import FeedbackForm from "./FeedbackForm";
import {submitFeedback} from "../actions/submitFeedback";

class FeedbackView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { status : null };
  }

  onSubmit = (model) => {
    this.setState({ status : "PENDING" });
    this.props.submitFeedback(model);
  };

  onReset = () => {
    // Hack to reset = go to "empty" route and back to force a full re-render of the form
    this.props.history.push({ pathname: "/empty" });
    setTimeout(() => this.props.history.replace({ pathname: "/feedback" }));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.feedbackSuccessful !== this.props.feedbackSuccessful && nextProps.feedbackSuccessful !== null) {
      this.setState({ status : (nextProps.feedbackSuccessful) ? "SUCCESS" : "FAILURE" })
    }
  };

  render() {
    const { sessions } = this.props;
    const { status } = this.state;

    return (
        <Panel title="Feedback Form" width="8">
          <FeedbackForm sessions={sessions} status={status} onSubmit={this.onSubmit} onReset={this.onReset} />
        </Panel>
    );
  }
}

const mapStoreToProps = (store) => ({
  sessions : store.sessions,
  feedbackSuccessful : store.feedback.lastResultSuccess,
});

const mapDispatchToProps = {
  submitFeedback,
};

export default connect(mapStoreToProps, mapDispatchToProps)(FeedbackView);