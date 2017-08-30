import {CHECK_AUTHORIZATION} from "../constants";

export const checkAuthorization = (userId, password) => ({
  type : CHECK_AUTHORIZATION,
  payload : { userId, password },
});
