import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/SearchComponent/SearchBar";
import Activities from "./Components/SearchComponent/Activities";
import Comments from "./Components/Comment/Comment.component";
import Footer from "./Components/Footer/Footer";
import SearchPage from "./Pages/SearchPage/SearchPage.component";
import "./App.css";
import ArticlePage from "./Pages/ArticlePage/ArticlePage.component";
import Navbar from "./Components/Navbar/Navbar.componenet";
import Main from "./Components/Main/Main.components";

import AboutPage from "./Pages/About/About.page";

export default function App() {
  return (
    <div className="homepage">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/translate" component={SearchPage} />
          <Route exact path="/item/:id" component={ArticlePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
      <div>
        <div className="landingContainer">
          <div className="wrapper"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
