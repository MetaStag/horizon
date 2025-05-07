import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

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
          <div key={game.slug} className="rounded-lg p-2 h-[20vw]" style={{backgroundImage: `url(${game.background_image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex flex-col mt-auto bg-gray-700/40 w-fit p-2 rounded-lg">
            <span>{game.name}</span>
            <div className="flex flex-row gap-x-1">
            {game.genres.map((genre: any) => (
              <span className="bg-gray-700/40 rounded-lg p-1 text-sm">{genre.name}</span>
            ))}
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
