import { Link, Outlet } from '@tanstack/react-router';
import Header from '../components/Body/Header';
import Footer from '../components/Body/Footer';
import CustomLink from '../components/CustomLink';

function Root() {
	return (
		<>
			<Header siteTitle={'staff rota'}>
				<li>
					<CustomLink to="/">Home</CustomLink>
				</li>
				<li>
					<CustomLink to="/week">Week</CustomLink>
				</li>
				<li>
					<CustomLink to="/team">Team</CustomLink>
				</li>
				<li>
					<CustomLink to="/team/test">Test</CustomLink>
				</li>
			</Header>
			<Outlet />
			<Footer />
		</>
	);
}

export default Root;
