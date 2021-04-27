import React from "react";
// import Comments from "./Components//ArticleComponent/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import ArticlePage from "./Components/ArticlePage/ArticlePage.component";
import Navbar from "./Components/Navbar/Navbar.componenet";
import Main from "./Components/Main/Main.components";

export default function App() {
  return (
    <div>
      {/* <Comments
        comment={"this is so good!!!! love it!! "}
        author={"Orel Alon"}
        time={"2 days ago"}
      />
      <Comments
        comment={"Great article, I would love to see more"}
        author={"Itai Levi"}
        time={"20 minutos ago"}
      /> */}

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



