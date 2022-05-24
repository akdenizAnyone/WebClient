import React from "react";
import "./App.css";
import SignIndex from "./pages/SignIndex/SignIndex";
import Login from "./pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";

function App() {
  return (
    <Switch>
      <Route path="/" component={SignIndex} exact />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/Explore" component={Explore} />
      <Route path="/Messages" component={Messages}></Route>
      <Route path="/Profile" component={Profile} />
    </Switch>
  );
}

export default App;
