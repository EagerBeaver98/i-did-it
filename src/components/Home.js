import Post from "./Post";


function Home(props) {
  return (
    <div className="posts">
      {() => {
        for (let post of props.tweets) {
          <Post post={post}/>
        }
      }}
    </div>
  )
}

export default Home;