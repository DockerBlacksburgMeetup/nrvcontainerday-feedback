import {SET_AUTHENTICATION} from "../constants";

export const setAuthentication = (userId, password) => ({
  type : SET_AUTHENTICATION,
  payload : {
    authToken : btoa(`${userId}:${password}`),
  },
});