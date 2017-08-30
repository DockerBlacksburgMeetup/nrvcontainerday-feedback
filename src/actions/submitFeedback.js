import {SUBMIT_FEEDBACK} from "../constants";

export const submitFeedback = (model) => ({
  type : SUBMIT_FEEDBACK,
  payload : { ...model },
});
