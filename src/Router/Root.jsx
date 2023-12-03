import { Outlet } from '@tanstack/react-router';
import Navbar from '../components/Body/Navbar';
import CustomLink from '../components/CustomLink';
import { useState } from 'react';
import '../styles/Root.css';

function Root() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header id='App_header'>
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
			<div className='App_divider' />
			<main id='App_main' className='content-grid'>
				<Outlet />
			</main>
			<div className='App_divider' />
			<footer id='App-footer'></footer>
		</>
	);
}

export default Root;

// TODO: continue with the video
