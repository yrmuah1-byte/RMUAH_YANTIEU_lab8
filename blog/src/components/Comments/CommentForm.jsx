import { useState } from 'react';
function CommentForm({ onAddComment }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!author.trim() || !text.trim()) {
        setError('Please enter your name and a comment.');
        return;
  }
  setError('');

  onAddComment(author.trim(), text.trim());
  setAuthor('');
  setText('');
}

  return (
    <form className="commentform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write a comment..."
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;