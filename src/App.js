import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LabeledInput from "./LabeledInput";

import About from "./pages/About";
import Login from "./pages/Login";
import Category from "./pages/Category";

function App() {
  const learnReactDescription = "Learn React from Scoala IT";
  const reactTurorialUrl = "https://www.w3schools.com/REACT/default.asp";

  const getGithubProfile = () => "https://github.com/mmioana/webdevelopment-02";

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
        <Route path="/" exact render={() => <div>Home page</div>} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/categories/:id" component={Category} />

        
        </Switch>
      </main>
    </div>
  );
}

export default App;
