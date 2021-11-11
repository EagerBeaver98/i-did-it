import React from "react";

function dateFormat(utcCode) {
  var date = new Date(utcCode);

  const month = date.toLocaleString('default', {month: "short"});
  const day = date.toLocaleString('default', {day: "numeric"})
  const year = date.toLocaleString('default', {year: "numeric"})

  return (day + " " + month + " " + year);
}

function Post(props) {


  return (
    <div className="post">
      <div className="tweet">{props.post.tweet}</div>
      <div className="time">{dateFormat(props.post.datetime)}</div>
    </div>
  )
}

export default Post;