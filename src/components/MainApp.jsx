import React from "react";
import Header from "./Header";
import MusicList1 from "./MusicList1";
import MusicLIst2 from "./MusicLIst2";
import MusicList3 from "./MusicList3";
import MusicList4 from "./MusicList4";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

const MainApp = () => {
  return (
    <section className="MainApp">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />

              <MusicList1 />
              <MusicLIst2 />
              <MusicList3 />
              <MusicList4 />
            </>
          }
        />
      </Routes>
      <Footer />
      {/* <MusicPlayer /> */}
    </section>
  );
};

export default MainApp;
