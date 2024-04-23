import todoReducer from "./addTodoList";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer,
});
export default rootReducer;
