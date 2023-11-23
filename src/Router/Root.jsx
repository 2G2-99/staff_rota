import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/Body/Navbar';
import Footer from '../components/Body/Footer';
import CustomLink from '../components/CustomLink';
import { useState } from 'react';
import '../styles/Root.css';

function Root() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className='App_header'>
				<Navbar siteTitle={'staff rota'} isOpen={isOpen} setIsOpen={setIsOpen}>
					<li>
						<CustomLink to='/' setIsOpen={setIsOpen}>
							Home
						</CustomLink>
					</li>
					<li>
						<CustomLink to='/rota' setIsOpen={setIsOpen}>
							Rota
						</CustomLink>
					</li>
					<li>
						<CustomLink to='/team' setIsOpen={setIsOpen}>
							Team
						</CustomLink>
					</li>
					<li>
						<CustomLink to='/team/test' setIsOpen={setIsOpen}>
							Test
						</CustomLink>
					</li>
				</Navbar>
			</header>
			<main className='App_main'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Root;
