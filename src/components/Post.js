function dateFormat(utcCode) {
  
}

function Post(props) {


  return (
    <div className="post">
      <div className="tweet">{props.post.tweet}</div>
      <div className="time">{Date.getMonth(props.post.datetime)}</div>
    </div>
  )
}

export default Post;