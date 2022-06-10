import React from "react";
import { Provider } from "react-redux";
import CakeCart from "./components/CakeCart";
import Header from "./components/Header";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <CakeCart />
    </Provider>
  );
};

export default App;
