import { ProfileTypes } from '../../types/ProfileTypes';

export interface Profile {
	userId: string;
	title: string;
	image_url: string;
	games: ProfileTypes[];
}

export interface ProfileResponse {
	id: string;
	userId: string;
	title: string;
	image_url: string;
	games: ProfileTypes[];
}