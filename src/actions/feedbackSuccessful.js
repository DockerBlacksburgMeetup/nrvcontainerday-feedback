import {FEEDBACK_SUCCESS} from "../constants";

export const feedbackSuccessful = (model) => ({
  type : FEEDBACK_SUCCESS,
  payload : { ...model },
});
