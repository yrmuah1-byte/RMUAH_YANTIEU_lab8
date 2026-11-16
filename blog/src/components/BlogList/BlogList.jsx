import BlogPost from '../BlogPost/BlogPost';
import './BlogList.css';

function BlogList({ posts }) {
    return (
        <section className="bloglist">
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    author={post.author}
                    date={post.date}
                    comments={post.comments}
                />
            ))}
        </section>
    );
}


export default BlogList;
   