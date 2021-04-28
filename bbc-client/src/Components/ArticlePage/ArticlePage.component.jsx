import React from "react";
import Comments from "../ArticleComponent/Comments";

const ArticlePage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
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
  );
};

export default ArticlePage;