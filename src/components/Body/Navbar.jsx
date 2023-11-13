import '../../styles/Navbar.css';
import { Link } from '@tanstack/react-router';

function Navbar({ siteTitle, children, isOpen, setIsOpen }) {
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				<span id="site-title">{siteTitle}</span>
			</Link>
			<ul className={`nav_list ${isOpen ? 'active' : ''}`}>{children}</ul>

			{/* Hamburger Menu */}
			<div
				className={`nav_menu ${isOpen ? 'active' : ''}`}
				onClick={toggleOpen}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="2.5em"
					height="2.5em"
					viewBox="0 0 512 512"
					className="icon"
				>
					<path
						fill="#d21033"
						d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
					/>
				</svg>
			</div>
		</nav>
	);
}

export default Navbar;
