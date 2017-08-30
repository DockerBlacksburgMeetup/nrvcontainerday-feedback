import {applyMiddleware} from "redux";
import {authorizationChecker} from "./authorizationChecker";
import {sessionGrabber} from "./sessionGrabber";
import {feedbackSubmitter} from "./feedbackSubmitter";

export default applyMiddleware(
    authorizationChecker,
    sessionGrabber,
    feedbackSubmitter,
);