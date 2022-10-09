import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { RoutePath } from './types/routes';
import Home from './pages/homepage/Home';
import Login from './pages/singup/Login';
import Register from './pages/singup/Register';
import Thanks from './pages/thanks/Thanks';
import Proflie from './pages/profile/Proflie';
import { Auth } from './helpers/Auth';


const AuthenticatedRoutes = () => {
	const isAuthenticated = Auth.isAuth();
	return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};
const Router = () => {
	return (
		<Routes>
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
			
{/* ROTAS AUTENTICADAS */}
			<Route
				path='/'
				element={<AuthenticatedRoutes />}>

				<Route
					path={RoutePath.HOME}
					element={<Home />}
				/>
				<Route
					path={RoutePath.PROFILES}
					element={<Proflie />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
