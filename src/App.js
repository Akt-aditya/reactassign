import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import FirstScreen from "./components/FirstScreen";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FirstScreen} />
      <Route path="/:info/home" component={Home} />
      <Route path="/:info/user/:id" component={User} />
    </div>
  );
}
