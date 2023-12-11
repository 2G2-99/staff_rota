function BurgerIcon({ width, height }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
		>
			<path
				fill='none'
				stroke='#d21033'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='3'
				d='M4 12h16M4 6h16M4 18h16'
			/>
		</svg>
	);
}

export default BurgerIcon;
