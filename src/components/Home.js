import Post from "./Post";


function Home(props) {
  return (
    <div className="posts">
      {props.tweets.map((post) => {
        return <Post key={post.tweetID} post={post} />
      })}
    </div>
  )
}

export default Home;