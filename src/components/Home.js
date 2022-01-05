import {React, useState} from "react";
import Post from "./Post";
import {Button} from "react-bootstrap";
import HomeTextBox from "./HomeTextBox";

function Home(props) {
  const [state, setState] = useState({showTextBox: false})
  
  const textBoxHandler = () => {
    if (state.showTextBox) {
      return <HomeTextBox diaries={state.diaries} addPost={props.newPost}></HomeTextBox>;
    } else {
      return (
        <Button id="newPost" onClick={buttonHandler}>
          New Post
        </Button>
      );
    }
  };

  const buttonHandler = () => {
    setState({ showTextBox: true });
  };

  return (
    <div className="posts">
      {textBoxHandler()}
      {props.tweets.map((post) => {
        return (
          <Post key={post.tweetID} post={post} dateFormat={props.dateFormat} />
        );
      })}
    </div>
  );
}

export default Home;
