export interface Game {
	title: string;
	cover_image_url: string;
	description: string;
	year: number;
	imdb_score: number;
	trailer_youtube_url: string;
	gameplay_youtube_url: string;
}

export interface GameUpdate {
	game: Game;
	id: string;
}

export interface GameResponse {
	id: string;
	title: string;
	description: string;
	cover_image_url: string;
	year: number;
	imdb_score: number;
	trailer_youtube_url: string;
	gameplay_youtube_url: string;
}
