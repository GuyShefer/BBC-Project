import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import SearchBar from "./Components/SearchComponent/SearchBar";
import Activities from "./Components/SearchComponent/Activities";
import Comments from "./Components//ArticleComponent/Comments";
import Footer from "./Components/Footer/Footer";

>>>>>>> 3c254f40dad94e86db35071d0c4a135194dbd4b1
import "./App.css";
import ArticlePage from "./Components/ArticlePage/ArticlePage.component";
import Navbar from "./Components/Navbar/Navbar.componenet";
import Main from "./Components/Main/Main.components";

export default function App() {
  return (
<<<<<<< HEAD
    <div className='homepage'>
=======
    <div>
>>>>>>> 3c254f40dad94e86db35071d0c4a135194dbd4b1
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/item/:id" component={ArticlePage} />
        </Switch>
      </Router>
      <div>
        <div className="landingContainer">
          <div className="wrapper">
            <h1>BBC Science-Environment Translator</h1>
            <SearchBar />
          </div>
        </div>
        <div className="landingContainer">
          <h1>Latest:</h1>
          <Activities />
        </div>
        <Comments
          comment={"this is so good!!!! love it!! "}
          author={"Orel Alon"}
          time={"2 days ago"}
        />
        <Comments
          comment={"Great article, I would love to see more"}
          author={"Itai Levi"}
          time={"20 minutos ago"}
        />
      </div>
      <Footer />
    </div>
  );
}



