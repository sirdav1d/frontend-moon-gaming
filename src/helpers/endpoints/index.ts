import { auth } from './auth';
import {profile } from './profile';
import { game } from './game';
import { gender } from './gender';
import { user } from './user';

export const endpoint = {
    baseUrl: "estjs-moon-gaming-api-production.up.railway.app",
    ...auth,
    ...user,
    ...gender,
    ...profile,
    ...game,
};