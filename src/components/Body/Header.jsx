import { useState } from 'react';
import '../../styles/Header.css';
import { Link } from '@tanstack/react-router';

function Header({ siteTitle, children }) {
	const [isActive, setIsActive] = useState(false);

	const toggleActiveClass = () => setIsActive(!isActive);

	return (
		<header className="App_Header">
			<nav className="navbar">
				<Link to="/" className="logo">
					<span id="site-title">{siteTitle}</span>
				</Link>
				<ul className={`nav_list ${isActive ? 'active' : ''}`}>{children}</ul>

				{/* Hamburger Menu */}
				<div
					className={`nav_menu ${isActive ? 'active' : ''}`}
					onClick={toggleActiveClass}
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
		</header>
	);
}

export default Header;
