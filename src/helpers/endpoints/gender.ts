import { endpoint } from '../../helpers/endpoints';

export const gender = {
    createGender: () => `${endpoint.baseUrl}/gender`,
    listAllGender: () => `${endpoint.baseUrl}/gender`,
    genderById: (id: string) => `${endpoint.baseUrl}/gender/${id}`,
};