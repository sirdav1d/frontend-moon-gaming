import { endpoint } from 'helpers/endpoints';

export const user = {
    createUser: () => `${endpoint.baseUrl}/user`,
    lisAllUser: () => `${endpoint.baseUrl}/user`,
    userById: (id: string) => `${endpoint.baseUrl}/user/${id}`,
};