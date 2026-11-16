import {Link} from 'react-router';
import posts from '../../data/posts';
import './Navbar.css';
import { useTheme } from '../ThemeContext/ThemeContext';
function Navbar() {
    const {theme, toggleTheme} = useTheme();
    return (
        <nav className="navbar">
            <Link  to="/">Home</Link>
            {posts.map((post)=> (
                <Link key={post.id} to={`/posts/${post.id}`}>{post.title}</Link>
            ))}
            <Link to="/contact">Contact</Link>
            <button type="button" className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </nav>
    );
}
export default Navbar;