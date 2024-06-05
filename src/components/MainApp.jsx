import React from "react";
import Header from "./Header";
import MusicList1 from "./MusicList1";
import MusicLIst2 from "./MusicLIst2";
import MusicList3 from "./MusicList3";
import MusicList4 from "./MusicList4";
import Footer from "./Footer";

const MainApp = () => {
  return (
    <section className="MainApp">
      <Header />
      <MusicList1 />
      <MusicLIst2 />
      <MusicList3 />
      <MusicList4 />
      <Footer />
    </section>
  );
};

export default MainApp;
