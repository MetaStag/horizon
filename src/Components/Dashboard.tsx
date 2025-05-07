export default function Dashboard() {
  return (
    <div className="rounded-lg p-2 m-2 w-[90vw] h-[90vh]">
      <div className="flex flex-row">
        <div className="flex flex-col p-2 m-2 rounded-lg bg-gray-700 h-[40vh] w-[55vw]">
          <span>Popular</span>
          <h1>Marvel's Spider-Man Remastered</h1>
          <span>Spider-Man Remastered is a game of courage, sacrifice, and the price of heroism.</span>
          <button className="w-24 bg-red-500 rounded-lg p-2 cursor-pointer my-3">Track</button>
        </div>

        <div className="bg-gray-400/40 flex flex-col p-4 m-2 rounded-lg h-[40vh] w-[25vw]">
          <h2>In Library</h2>
            <div className="flex flex-col">
              <span>Clash of Clans</span>
              <div className="flex flex-row gap-x-1">
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Strategy</span>
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Battle Royale</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col">
              <span>Clash of Clans</span>
              <div className="flex flex-row gap-x-1">
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Strategy</span>
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Battle Royale</span>
              </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2>You Might Also Like</h2>
        <div className="flex flex-row">
          <div className="bg-gray-400 p-2 m-2 rounded-lg h-[40vh] flex flex-col">
            <span>Clash of Clans</span>
            <div className="flex flex-row gap-x-1">
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Strategy</span>
              <span className="bg-gray-400/40 rounded-lg p-1 text-sm">Battle Royale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
