
import BlogList from '../components/BlogList/BlogList';
import {useState, useEffect} from 'react';
function BlogPostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(data=> {
                const formatted=data.map(post=> ({
                    id: post.id,
                    title: post.title,
                    content: post.body,
                    author: `User ${post.userId}`,
                    comments: [],
                }));
                setPosts(formatted);
                setLoading(false);
            })
            .catch(error=> {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <p className="status"> Getting posts...</p>
    }
    return <BlogList posts={posts} />;

}

export default BlogPostsPage;