// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from @reduxjs/toolkit
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
