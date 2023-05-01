import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClickToTop from "./Components/ClickToTop/ClickToTop";
import Header from "./Components/Header/Header";
import DoiSong from "./Components/Pages/DoiSong";
import DuLich from "./Components/Pages/DuLich";
import Home from "./Components/Pages/Home";
import { default as SucKhoe } from "./Components/Pages/SucKhoe";
import TheGioi from "./Components/Pages/TheGioi";
import ThoiSu from "./Components/Pages/ThoiSu";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suc-khoe" element={<SucKhoe />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/the-gioi" element={<TheGioi />} />
        <Route path="/doi-song" element={<DoiSong />} />
        <Route path="/thoi-su" element={<ThoiSu />} />
        <Route path="/du-lich" element={<DuLich />} />
      </Routes>
      <ClickToTop />
    </div>
  );
}

export default App;
