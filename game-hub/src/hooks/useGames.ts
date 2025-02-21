import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";


export interface Platform {
  id: number;
  name: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setError(err.message));
    }, []);

    return {games, error}
}

export default useGames;
