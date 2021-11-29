import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongCreate from "./components/SongCreate";
import LyricCreate from "./components/LyricCreate";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="container mt-3">
      <BrowserRouter>
        <Routes>
          <Route path="/songs" element={<SongList />} />
          <Route path="/song/new" element={<SongCreate />} />
          <Route path="/song/:id" element={<SongDetail />} />
          <Route path="/song/:id/lyric" element={<LyricCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
