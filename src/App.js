import "./App.css";
import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import MainApp from "./components/MainApp";
import Search from "./components/Search";
import { Route, Router, Routes } from "react-router-dom";
import MusicList1 from "./components/MusicList1";
import MusicPlayer from "./components/MusicPlayer";
import MusicPlayerMini from "./components/MusicPlayerMini";
import Library from "./components/Library";
import Premium from "./components/Premium";
import Settings from "./components/Settings";
import SearchList from "./components/SearchList";
import Coment from "./components/Coment";
import MusicPlayer2 from "./components/MusicPlayer2";
import MusicPlayer3 from "./components/MusicPlayer3";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/MusicPlayer3" element={<MusicPlayer3 />} />
          <Route path="/MusicPlayer2" element={<MusicPlayer2 />} />
          <Route path="/Coment" element={<Coment />} />
          <Route path="/MusicPlayer" element={<MusicPlayer />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Premium" element={<Premium />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/SearchList" element={<SearchList />} />
        </Routes>

        {showIntro ? (
          <Intro className={transition ? "fade-out" : ""} />
        ) : (
          <MainApp className={transition ? "fade-in" : ""} />
        )}

        {/* <Coment /> */}
      </div>
    </>
  );
}

export default App;
