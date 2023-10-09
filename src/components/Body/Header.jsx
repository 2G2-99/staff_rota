function Header({ siteTitle, children }) {
	return (
		<div>
			{siteTitle}
			<div>{children}</div>
		</div>
	);
}

export default Header;
