import '../../styles/Header.css';

function Header({ siteTitle, children }) {
	return (
		<div>
			<span id="site-title">{siteTitle}</span>
			<div>{children}</div>
		</div>
	);
}

export default Header;
