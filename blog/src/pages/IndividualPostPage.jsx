import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router';
import CommentSection from '../components/Comments/CommentSection';
import '../components/BlogPost/BlogPost.css';
function IndividualPostPage() {
    const {id}=useParams();
    const[post, setPost] = useState(null);
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);  
    const[comments, setComments] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=> {
                if (!response.ok) {
                    throw new Error('The post was not found');
                }
                return response.json();
            })
            .then(postData=> {
                setPost(postData);
                return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
            })
            .then(response=>response.json())
            .then(userData=> {
                setUser(userData);
                setLoading(false);
            })
            .catch(error=> {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
        }, [id]);
        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response=>response.json())
            .then(data=> {
                const formatted = data.map(comment=> ({
                    id: comment.id,
                    author: comment.name,
                    text: comment.body,
            }));
            setComments(formatted);
        })
        .catch(error=> {
            console.error('Error in fetching comments:', error);
            setComments([]);
            });
        }, [id]);

        if (loading) {
            return <p>Loading post...</p>;
        
    }
    if (!post){
        return (
            <section>
                <h2>Post is not found</h2>
                <Link to="/">Back to all posts</Link>
            </section>
        );
    }
    return (
        <article className="blogpost">
            <h2>{post.title}</h2>
            { user && (
                <div className="blogpostmeta">
                <p>By {user.name} (@{user.username})</p>
                <p>Email: <a href ={`mailto:${user.email}`}>{user.email}</a></p>
                <p>Website: {user.website}</p>
                </div>
            )}
            <p>{post.body}</p>
            {comments ? (
            <CommentSection initialComments={comments} postId={id} />
            ) : (
                <p>Loading comments...</p>
            )}
            <Link to="/">Back to all post</Link>
        </article>
    );
}

export default IndividualPostPage;