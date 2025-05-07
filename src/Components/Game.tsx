import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Game() {
  let params = useParams();
  const [data, setData] = useState<any>(null);
  const [platformId, setPlatformId] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${params.id}?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        data.description_raw =
          data.description_raw.length > 500
            ? data.description_raw.substring(0, 500) + "..."
            : data.description_raw;
        setData(data);
        calculatePlatformId(data.platforms);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
        setLoading(false);
      });
  }, [params.id]);

  const calculatePlatformId = (platforms: any) => {
    for (let i=0;i<platforms.length;i++) {
      if (platforms[i].platform.id === 4) {
        setPlatformId(i);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No game data found</div>;
  }

  return (
    <div className="flex flex-col m-2 w-[84vw]">
      <div
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.background_image})`
        }}
        className="bg-cover bg-center h-96 rounded-lg p-12 text-white"
      >
        <h1 className="font-bold">{data.name}</h1>
        <span className="text-sm text-gray-300">{data.description_raw}</span>
        <p className="mt-4">
          <span className="text-2xl text-yellow-500">
            {data.metacritic || "N/A"}
          </span>
          <span className="text-lg">/100</span>
          <span className="mx-3 text-sm">{data.released || ""}</span>
        </p>
        <div className="flex flex-row gap-x-2">
          {data.genres?.map((genre: any) => (
            <span className="bg-gray-400/40 rounded-lg p-2 text-sm" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row mt-4 gap-x-12">
      <span className="whitespace-pre-line">{platformId !== -1 ? data.platforms[platformId].requirements.minimum : "Minimum requirements not available"}</span>
      <span className="whitespace-pre-line">{platformId !== -1 ? data.platforms[platformId].requirements.recommended : "Recommended requirements not available"}</span>
      </div>
    </div>
  );
}
