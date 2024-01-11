import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Adjust the path accordingly

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	);
}

export default MyApp;
