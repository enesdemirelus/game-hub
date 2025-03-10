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
  metacritic: number
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      apiClient
        .get<FetchGameResponse>("/games")
        .then((res) => {setGames(res.data.results),
          setLoading(false)
        })
        .catch((err) => {setError(err.message)
          setLoading(false)
        });
    }, []);

    return {games, error, isLoading}
}

export default useGames;
