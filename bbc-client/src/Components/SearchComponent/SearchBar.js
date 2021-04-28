import React, { useEffect, useState } from "react";
import api from "../../api/api";

import "./searchbar.css";
const SearchBar = () => {
  const [webSearch, setWebSearch] = useState("");
  const [language, setLanguage] = useState("arabic");
  const [data, setData] = useState("");

  useEffect(() => {}, []);

  const checkUrl = () => {
    const string = webSearch;
    const check = string.startsWith("https://www.bbc.com/");
    if (check) {
      handleClick();
    }
  };

  const handleClick = async () => {
    try {
      const { data } = await api.post("/newPost", {
        url: webSearch,
        language: language,
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fullpage">
      <div className="title"></div>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Paste your URL website here..."
            onChange={(e) => setWebSearch(e.target.value)}
          ></input>
          <div className="select-wrap">
            <select
              className="select"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="hebrew">Hebrew</option>
              <option value="arabic">Arabic</option>
            </select>
            <button className="translateBtn" onClick={checkUrl}>
              Translate
            </button>
          </div>
        </div>
      </div>
      <div className="APIdataContainer">
        <h1>{data.title}</h1>
        <h4>
          {data &&
            data.content.map((v) => {
              return <p>{v}</p>;
            })}
        </h4>
      </div>
    </div>
  );
};

export default SearchBar;
