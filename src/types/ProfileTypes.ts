import { GameResponse } from "./api/game";

export interface ProfileTypes {
	userId: string;
	title: string;
	image_url: string;
	game: GameResponse[];
}
