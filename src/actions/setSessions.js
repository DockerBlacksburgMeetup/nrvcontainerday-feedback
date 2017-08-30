import {SET_SESSIONS} from "../constants";
export const setSessions = (sessions) => ({
  type : SET_SESSIONS,
  payload : { sessions },
});
