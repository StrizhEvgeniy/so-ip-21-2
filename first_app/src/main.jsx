import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./components/form/Form";
import Row from "./Row";
import Test from "./components/test/Test";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer as testReducer } from "./store/testSlice";

const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Test />
  </Provider>
);
