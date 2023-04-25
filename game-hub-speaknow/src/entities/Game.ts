import { Genre } from "./Genre";
import { Platform } from "./Platform";

interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  website: string;
}

export default Game;
