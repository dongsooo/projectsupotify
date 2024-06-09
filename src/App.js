import "./App.css";
import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import MainApp from "./components/MainApp";
import Search from "./components/Search";
import { Route, Router, Routes } from "react-router-dom";
import MusicList1 from "./components/MusicList1";
import MusicPlayer from "./components/MusicPlayer";
import MusicPlayerMini from "./components/MusicPlayerMini";
import SideMenu from "./components/SideMenu";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        {/* <Routes>
          <Route path="/MusicPlayer" element={<MusicPlayer />} />
        </Routes> */}

        {/* {showIntro ? (
          <Intro className={transition ? "fade-out" : ""} />
        ) : (
          <MainApp className={transition ? "fade-in" : ""} />
        )} */}

        {/* <MainApp /> */}
        {/* <MusicPlayerMini /> */}
        <SideMenu />
      </div>
    </>
  );
}

export default App;
