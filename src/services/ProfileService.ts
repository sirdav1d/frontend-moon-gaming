import { Api } from 'helpers/endpoints/Api';
import { endpoint } from 'helpers/endpoints';
import { Profile, ProfileResponse } from 'types/api/profile';
import { ErrorResponse } from 'types/api/error';

export const ProfileService = {
	getLista: (): Promise<ProfileResponse[]> =>
		Api(endpoint.lisAlltProfile(), {
			method: 'GET',
		}).then((response) => response.json()),

	create: (profile: Profile) => {
		return Api(endpoint.createProfile(), {
			method: 'POST',
			body: JSON.stringify({ ...profile }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json());
	},

	getById: (id: string) =>
		Api(endpoint.profileById(id), {
			method: 'GET',
		}).then((response) => response.json()),

	updateById: (
		profile: ProfileResponse,
	): Promise<ProfileResponse & ErrorResponse> =>
		Api(endpoint.profileById(profile.id), {
			method: 'PATCH',
			body: JSON.stringify(profile),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json()),

	deleteById: (id: string) =>
		Api(endpoint.profileById(id), {
			method: 'DELETE',
		}).then((response) => response.json()),
};
