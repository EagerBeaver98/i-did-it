function dateFormat(utcCode) {
  var month = new Date(utcCode);

  return month.toLocaleString('default', {month: "short"});
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