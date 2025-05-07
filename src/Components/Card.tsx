import { useNavigate } from "react-router-dom";

export default function Card({ game }: { game: any }) {
  let navigate = useNavigate();

  return (
    <div
      key={game.id}
      onClick={() => {
        navigate(`/game/${game.id}`);
      }}
      className="p-2 rounded-lg h-[40vh] w-[15vw] flex-shrink-0 flex flex-col cursor-pointer"
      style={{
        backgroundImage: `url(${game.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-700/40 w-fit p-2 mt-auto">
        <span>{game.name}</span>
        <div className="flex flex-row gap-x-1">
          {game.genres.map((genre: any) => (
            <span className="bg-gray-700/40 rounded-lg p-1 text-sm">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
