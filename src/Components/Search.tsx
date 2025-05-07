import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Card from "./Card";

export default function Search() {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState<any[]>([]);

  const searchGames = () => {
    if (search === '') {
      setGames([]);
      return;
    }
    fetch(
      `https://api.rawg.io/api/games?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray-400/40 w-1/2 p-2 rounded-lg flex flex-row items-center gap-x-1">
        <SearchIcon className="w-4 h-4" />
        <input
          type="text"
          className="w-full outline-none bg-transparent"
          placeholder="Search for games..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchGames();
            }
          }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4 m-8">
        {games.map((game) => (
          <Card key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}
