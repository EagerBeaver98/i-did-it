import React from "react";
import Post from "./Post";

function Home(props) {
  return (
    <div className="posts">
      {props.tweets.map((post) => {
        return (
          <Post key={post.tweetID} post={post} dateFormat={props.dateFormat} />
        );
      })}
    </div>
  );
}

export default Home;
