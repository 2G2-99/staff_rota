import '../../styles/Navbar.css';
import { Link } from '@tanstack/react-router';

function Navbar({ siteTitle, children, isOpen, setIsOpen }) {
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<nav className="navbar">
			<Link to="/" className="logo">
				<span id="site-title">{siteTitle}</span>
			</Link>
			<ul className={`nav_list ${isOpen ? 'open' : ''}`}>{children}</ul>

			<button
				className={`nav_menu ${isOpen ? 'open' : ''}`}
				onClick={toggleOpen}
			>
				{/* isopen => cross if !isOpen => Hamburger */}
				{isOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 12 12"
					>
						<path
							fill="#d21033"
							d="M2.22 2.22a.749.749 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.749.749 0 0 1 0-1.06Z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2em"
						height="2em"
						viewBox="0 0 512 512"
					>
						<path
							d="M417.4 224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
							fill="#d21033"
						/>
						<path
							d="M417.4 96H94.6C77.7 96 64 110.3 64 128s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
							fill="#d21033"
						/>
						<path
							d="M417.4 352H94.6C77.7 352 64 366.3 64 384s13.7 32 30.6 32h322.8c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z"
							fill="#d21033"
						/>
					</svg>
				)}
			</button>
		</nav>
	);
}

export default Navbar;
