import { Api } from 'helpers/endpoints/Api';
import { endpoint } from 'helpers/endpoints';
import { ErrorResponse } from 'types/api/error';
import { Gender, GenderResponse } from 'types/api/gender';

export const GenderService = {
	getLista: (): Promise<GenderResponse[]> =>
		Api(endpoint.listAllGender(), {
			method: 'GET',
		}).then((response) => response.json()),

	create: (gender: Gender) =>
		Api(endpoint.createGender(), {
			method: 'POST',
			body: JSON.stringify(gender),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json()),

	getById: (id: string) =>
		Api(endpoint.genderById(id), {
			method: 'GET',
		}).then((response) => response.json()),

	updateById: (
		gender: GenderResponse,
	): Promise<GenderResponse & ErrorResponse> =>
		Api(endpoint.genderById(gender.id), {
			method: 'PATCH',
			body: JSON.stringify({ number: gender.number }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((response) => response.json()),

	deleteById: (id: string) =>
		Api(endpoint.genderById(id), {
			method: 'DELETE',
		}).then((response) => response.json()),
};
