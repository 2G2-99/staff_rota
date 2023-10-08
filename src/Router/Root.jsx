import { Link, Outlet } from '@tanstack/react-router';

function Root() {
	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/week">Week</Link>
				<Link to="/team">Team</Link>
				<Link to="/team/test">Test</Link>
			</div>
			<hr />
			<Outlet />
		</>
	);
}

export default Root;
