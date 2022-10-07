import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './types/routes';
import Home from './pages/homepage/Home';
import Login from './pages/singup/Login';
import Register from './pages/singup/Register';
import Thanks from './pages/thanks/Thanks';

const Router = () => {
	return (
		<Routes>
			<Route
				path={RoutePath.HOME}
				element={<Home />}
			/>
			<Route
				path={RoutePath.LOGIN}
				element={<Login />}
			/>
			<Route
				path={RoutePath.REGISTER}
				element={<Register />}
			/>
			<Route
				path={RoutePath.THANKS}
				element={<Thanks />}
			/>
		</Routes>
	);
};

export default Router;
