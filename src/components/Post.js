import React from "react";

function Post(props) {
  return (
    <div className="post">
      <div className="tweet">{props.post.tweet}</div>
      <div className="time">{props.dateFormat(props.post.datetime)}</div>
      <div>
        <div className="alterName">Alter: {props.post.alterName}</div>
        <div className="accountName">{props.post.profileName}</div>
      </div>
    </div>
  );
}

export default Post;
