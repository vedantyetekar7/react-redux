import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import "./App.css";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement Counter</h1>
          <h4>Using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber(5))}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={myState}
            />
            <a className="quantity__plus" title="Increment">
              <span onClick={() => dispatch(incNumber(5))}>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
