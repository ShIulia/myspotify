import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LabeledInput from "./LabeledInput";
import Header from "./Header";

import About from "./pages/About";
import Login from "./pages/Login";
import Category from "./pages/Category";

function App() {
  const learnReactDescription = "Learn React from Scoala IT";
  const reactTurorialUrl = "https://www.w3schools.com/REACT/default.asp";

  return (
    <div className="App">
      <Header></Header>

      <main>
        <Switch>
          <Route path="/" exact render={() => <div>Home page</div>} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/categories" component={Category} />
          <Route path="/categories/:id" component={Category} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
