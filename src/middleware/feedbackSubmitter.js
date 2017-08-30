import {SUBMIT_FEEDBACK} from "../constants";
import {feedbackFailure} from "../actions/feedbackFailure";
import {feedbackSuccessful} from "../actions/feedbackSuccessful";
import {submitFeedback} from "../services/api";

export const feedbackSubmitter = ({ getState, dispatch }) => next => action => {
  if (action.type !== SUBMIT_FEEDBACK)
    return next(action);

  setTimeout(async () => {
    const result = await submitFeedback(action.payload, getState().auth.authToken);

    if (result === false)
      dispatch(feedbackFailure());
    else
      dispatch(feedbackSuccessful(result));
  }, 500);

  next(action);
};
