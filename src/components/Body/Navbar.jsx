import '../../styles/Navbar.css';
import { Link } from '@tanstack/react-router';
import Button from '../Button';
import BurgerIcon from '../Icons/BurgerIcon';
import CrossIcon from '../Icons/CrossIcon';

import button from '../../styles/Button.module.css';

function Navbar({ siteTitle, children, isOpen, setIsOpen }) {
	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<nav className='navbar'>
			<Link to='/' className='logo'>
				<span id='site-title'>{siteTitle}</span>
			</Link>
			<ul className={`nav_list ${isOpen ? 'open' : ''}`}>{children}</ul>

			<Button
				className={`${button.nav_menu} ${isOpen ? button.open : ''}`}
				onClick={toggleOpen}
			>
				{/* isOpen => cross if !isOpen => burger */}
				{isOpen ? (
					<CrossIcon width={'2em'} height={'2em'} />
				) : (
					<BurgerIcon width={'2em'} height={'2em'} />
				)}
			</Button>
		</nav>
	);
}

export default Navbar;
