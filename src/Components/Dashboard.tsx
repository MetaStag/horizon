import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function Dashboard() {
  let navigate = useNavigate();

  const [popular, setPopular] = useState<any[]>([
    { name: " ", genres: [{ name: " " }] }, // display whitespace until data is fetched
  ]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?page_size=5&&key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    )
      .then((res) => {
        if (!res.ok) {
          console.error(`HTTP error! status: ${res.status}`);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setPopular(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular games:", error);
      });
  }, []);

  // Prevent going beyond 0-4 range for popular games
  const handlePopularIndex = (index: number) => {
    if (index < 0) {
      console.log("index is less than 0");
      setPopularIndex(4);
    } else if (index > 4) {
      setPopularIndex(0);
    } else {
      setPopularIndex(index);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-lg p-4 w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-row gap-4">
        <div
          className="p-2 rounded-lg h-[40vh] flex-1"
          style={{
            backgroundImage: `url(${popular[popularIndex].background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-gray-700/40 w-1/2 rounded-lg p-2 flex flex-col">
            <div className="bg-gray-700/40 w-fit rounded-full p-2 flex flex-row gap-x-2 items-center">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Popular</span>
            </div>
            <h1>{popular[popularIndex].name}</h1>
            <span>{popular[popularIndex].genres[0].name}</span>
            <button className="w-24 bg-red-500 rounded-lg p-2 cursor-pointer my-3">
              Track
            </button>
            <div className="flex flex-row gap-x-2">
              <div className="bg-gray-700/40 rounded-lg p-2 cursor-pointer">
                <ArrowLeft onClick={() => handlePopularIndex(popularIndex - 1)}>
                  Previous
                </ArrowLeft>
              </div>
              <div className="bg-gray-700/40 rounded-lg p-2 cursor-pointer">
                <ArrowRight
                  onClick={() => handlePopularIndex(popularIndex + 1)}
                >
                  Next
                </ArrowRight>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400/40 flex flex-col p-4 rounded-lg h-[40vh] w-[25vw]">
          <h2>In Library</h2>
          <div className="flex flex-col">
            <span>Clash of Clans</span>
            <div className="flex flex-row gap-x-1">
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">
                Strategy
              </span>
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">
                Battle Royale
              </span>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex flex-col">
            <span>Clash of Clans</span>
            <div className="flex flex-row gap-x-1">
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">
                Strategy
              </span>
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">
                Battle Royale
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2>You Might Also Like</h2>
        <div className="flex flex-row gap-4 overflow-x-auto">
          {popular.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
