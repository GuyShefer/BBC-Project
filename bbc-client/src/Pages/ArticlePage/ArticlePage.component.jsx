import React from "react";
import Comment from "../../Components/Comment/Comment.component";

const comments = [
  { time: new Date(), author: "Ronaldo", comment: "siiiiiiiiiiiiiiiiii" },
  {
    time: new Date(),
    author: "Ronaldo",
    comment: "siiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  },
  { time: new Date(), author: "Ronaldo", comment: "siiiiiiiiiiiiiiiiii" },
  {
    time: new Date(),
    author: "Ronaldo",
    comment: "siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  },
];

const ArticlePage = (props) => {
  const renderComents = () => {
    return comments.map((v) => {
      //
      return <Comment time={v.time} author={v.author} comment={v.comment} />;
      //
    });
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {renderComents()}
    </div>
  );
};

export default ArticlePage;
