import { auth } from './auth';
import { profile } from './profile';
import { game } from './game';
import { gender } from './gender';
import { user } from './user';

export const endpoint = {
	baseUrl: 'https://api-moon-g.onrender.com',
	...auth,
	...user,
	...gender,
	...profile,
	...game,
};
