import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";

import About from "./pages/About";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import SpotifyCallback from "./pages/SpotifyCallback";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <main>
        <Switch>
          <Route path="/" exact={true} render={() => <div>Home page</div>} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/:id" component={Category} />
          <Route path="/playlists/:id" component={Playlists} />
          <Route path="/tracks/:id" component={Tracks} />
          <Route path="/callback" component={SpotifyCallback} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
