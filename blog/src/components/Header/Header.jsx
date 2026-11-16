import './Header.css';
import Navbar from '../NavBar/Navbar';
function Header({title, subtitle}) {
    return (
    <header className="header">
    <h1 className="header-logo">{title}</h1>
    <p className="header-subtitle">{subtitle}</p>
    <Navbar />
    </header>
    );
    
}
export default Header;