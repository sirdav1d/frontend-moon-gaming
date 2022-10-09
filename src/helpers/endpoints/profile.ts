import { endpoint } from 'helpers/endpoints';

export const profile = {
    createProfile: () => `${endpoint.baseUrl}/profile`,
    lisAlltProfile: () => `${endpoint.baseUrl}/profile`,
    orofileById: (id: string) => `${endpoint.baseUrl}/profile/${id}`,
};