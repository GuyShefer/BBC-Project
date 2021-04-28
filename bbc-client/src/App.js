import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ArticlePage from "./Components/ArticlePage/ArticlePage.component";
import Navbar from "./Components/Navbar/Navbar.componenet";
import Main from "./Components/Main/Main.components";

export default function App() {
  return (
    <div className='homepage'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/item/:id" component={ArticlePage} />
        </Switch>
      </Router>
    </div>
  );
}



