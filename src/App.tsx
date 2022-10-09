import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './router';
import Login from './pages/singup/Login';
import Thanks from './pages/thanks/Thanks';
import CardList from './components/CardList';
import Proflie from './pages/profile/Proflie';


const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
