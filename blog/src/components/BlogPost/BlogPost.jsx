import { useState } from 'react';
import CommentSection from '../Comments/CommentSection';
import './BlogPost.css';
import { Link } from 'react-router';
const PREVIEW_LENGTH = 120;
function BlogPost({ id, title, author, date, content, comments }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = content.length > PREVIEW_LENGTH;
  const shownText =
    expanded || !isLong ? content : content.substring(0, PREVIEW_LENGTH) + '...';
  const formattedDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  : null;

  return (
    <article className="blogpost">
      <h2> <Link to={`/posts/${id}`}>{title}</Link> </h2>
      <p className="blogpostmeta">
        By {author}{formattedDate && ` on ${formattedDate}`}
      </p>
      <p>{shownText}</p>
      {isLong && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
      <CommentSection initialComments={comments} postId={id} />
    </article>
  );
}

export default BlogPost;