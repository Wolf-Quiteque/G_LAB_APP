import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Auth from "./src/Navigation/Authnavigation.js";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api/";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Auth />
      </Provider>
    </>
  );
};

export default App;
