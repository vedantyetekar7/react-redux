import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../../src/App.css";
import { AddCakeToCart, RemoveCakeFromCart } from "../redux/actions";

const CakeCart = (props) => {
  useEffect(() => {
    if (props.numOfCakes !== 10) {
      document.title = `Items(${props.numOfCakes})`;
    } else {
      document.title = "Cake Cart";
    }
  }, [props.numOfCakes]);
  return (
    <div className="container">
      <h5>{props.numOfCakes > 0 ? props.numOfCakes : "Cart Empty!"}</h5>
      <div className="btn-container">
        <button onClick={props.AddCakeToCart}>ADD CAKE</button>
        <button onClick={props.RemoveCakeFromCart}>REMOVE CAKE</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddCakeToCart: () => dispatch(AddCakeToCart(1)),
    RemoveCakeFromCart: () => dispatch(RemoveCakeFromCart(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCart);
