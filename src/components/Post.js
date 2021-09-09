function Post(props) {
  return (
    <div className="post">
      <div className="tweet">{props.post.tweet}</div>
    </div>
  )
}

export default Post;