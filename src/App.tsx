import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}