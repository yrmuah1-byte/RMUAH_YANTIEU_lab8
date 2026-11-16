function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p className="nocomments">No comments yet. Be the first to comment!</p>;
  }

  return (
    <ul className="commentlist">
      {comments.map((comment) => (
        <li key={comment.id} className="comment">
          <strong>{comment.author}</strong>
          <p>{comment.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;