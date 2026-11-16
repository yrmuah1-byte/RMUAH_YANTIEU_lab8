import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Comments.css';

function CommentSection({ initialComments, postId }) {
  const [comments, setComments] = useState(initialComments);
  function addComment(author, text) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({postId, name: author, body: text}),
  })
  .then(response=> {
    if (!response.ok) {
        throw new Error('Failed to post comment');
    }
    return response.json();
  })
  .then(data=> {
    const newComment={id:Date.now(), author: data.name, text: data.body};
    setComments(prev=> [...prev, newComment]);
  })
  .catch(error=> console.error('Error posting comment:', error));
}
  return (
    <section className="commentsection">
      <h3>Comments ({comments.length})</h3>
      <CommentForm onAddComment={addComment} />
      <CommentList comments={comments} />
    </section>
  );
}

export default CommentSection;