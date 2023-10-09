import { Link, Outlet } from '@tanstack/react-router';
import Header from '../components/Body/Header';
import Footer from '../components/Body/Footer';

function Root() {
	return (
		<>
			<Header siteTitle={'staff rota'}>
				<Link to="/">Home</Link>
				<Link to="/week">Week</Link>
				<Link to="/team">Team</Link>
				<Link to="/team/test">Test</Link>
			</Header>
			<Outlet />
			<Footer />
		</>
	);
}

export default Root;
