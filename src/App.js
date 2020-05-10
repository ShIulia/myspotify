import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LabeledInput from "./pages/LabeledInput";
import Header from "./pages/Header";

import About from "./pages/About";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Categories from "./pages/Categories";
import SpotifyCallback from "./pages/SpotifyCallback";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Switch>
          <Route path="/" exact render={() => <div>Home page</div>} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/categories" exact component={Categories} />
          {/* <Route path="/categories/:id" component={Category} /> */}
          <Route path="/callback/" component={SpotifyCallback} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
