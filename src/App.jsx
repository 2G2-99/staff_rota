import { RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import router from './Router/routerConfig';
import Header from './components/Body/Header';
import Layout from './components/Body/Layout';
import Footer from './components/Body/Footer';

function App() {
	return (
		<>
			<Header siteTitle={'Staff Rota'}>
				<RouterProvider router={router} />
				<TanStackRouterDevtools router={router} />
			</Header>
			<Layout />
			<Footer />
		</>
	);
}

export default App;
