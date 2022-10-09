import { Game } from "./game";

export interface Profile {
  userId: string;
  title:string;
  image_url: string;
  games: Game[];
}