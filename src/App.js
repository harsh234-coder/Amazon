import "./styles.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  const [{ user }, dispatch] = useStateValue();
  //its kind of an if statement in react
  useEffect(() => {
    //if the square bracket is empty, this will run only once when the app loads
    //this is a listener, will refire this code evry time aith state changes(login,logout)
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is", authUser);
      if (authUser) {
        //if user just logged in/was logged in
        //push user on to react context api
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //the user logged out
        //remove user from data link layer
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
