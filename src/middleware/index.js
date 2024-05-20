import {thunk} from "redux-thunk";
import logger from "./logger";
import checkLogin from "./checkLogin";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger, checkLogin);