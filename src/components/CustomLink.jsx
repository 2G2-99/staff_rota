import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import '../styles/Header.css';

function CustomLink({ to, children }) {
	const [isActive, setIsActive] = useState(false);

	const toggleActiveClass = () => setIsActive(!isActive);
	// const removeActive = () => setIsActive(false);

	// const handleClick = e => {
	// 	if (onClick) {
	// 		onClick(e);
	// 	}
	// 	toggleActiveClass();
	// };

	return (
		<Link to={to} onClick={toggleActiveClass} className="link">
			{children}
		</Link>
	);
}

export default CustomLink;
