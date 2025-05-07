import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./Components/Dashboard.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import Navbar from "./Components/Navbar.tsx";
import Search from "./Components/Search.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
);
