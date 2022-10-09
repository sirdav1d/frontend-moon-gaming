import { endpoint } from 'helpers/endpoints';

export const game = {
    createGame: () => `${endpoint.baseUrl}/game`,
    listAllGame: () => `${endpoint.baseUrl}/game`,
    gameById: (id: string) => `${endpoint.baseUrl}/game/${id}`,
};