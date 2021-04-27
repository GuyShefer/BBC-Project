import React from "react";
import Comment from "../../Components/Comment/Comment.component";

const ArticlePage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {props.comments.map((v) => {
        //
        <Comment time={v.time} author={v.author} comment={v.comment} />;
        //
      })}
      <Comment
        comment={"this is so good!!!! love it!! "}
        author={"Orel Alon"}
        time={"2 days ago"}
      />
      <Comment
        comment={"Great article, I would love to see more"}
        author={"Itai Levi"}
        time={"20 minutos ago"}
      />
    </div>
  );
};

export default ArticlePage;
