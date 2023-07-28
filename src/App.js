// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Doctors from "./components/Doctors";
import Home from "./components/Home";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
