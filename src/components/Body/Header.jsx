import '../../styles/Header.css';

function Header({ siteTitle, children }) {
	return (
		<header>
			<span id="site-title">{siteTitle}</span>
			<div>{children}</div>
		</header>
	);
}

export default Header;
