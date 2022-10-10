import { endpoint } from '../../helpers/endpoints';

export const profile = {
    createProfile: () => `${endpoint.baseUrl}/profile`,
    lisAlltProfile: () => `${endpoint.baseUrl}/profile`,
    profileById: (id: string) => `${endpoint.baseUrl}/profile/${id}`,
};