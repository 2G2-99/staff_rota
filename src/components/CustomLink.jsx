import { Link } from '@tanstack/react-router';
import '../styles/Navbar.css';

function CustomLink({ to, children, setIsOpen }) {
  const handleClick = () => setIsOpen(false);

  return (
    <Link to={to} onClick={handleClick} className='nav_link'>
      {children}
    </Link>
  );
}

export default CustomLink;
