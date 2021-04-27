import React from "react";
import { FaHeart } from "react-icons/fa";

import "./comment.css";

const Comments = ({ comment, author, time }) => {
  return (
    <div className="comment-box">
      <div className="comment-head">
        <div className="comment-name ">
          <h4>{author}</h4>
        </div>
        <span>{time}</span>
        <FaHeart className="fa-heart" />
      </div>
      <div className="comment-content">{comment}</div>
    </div>
  );
};

export default Comments;
