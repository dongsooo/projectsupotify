import React from "react";
import { musicList1 } from "../server/musicList1";
import { Link, Route, Routes } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";

const MusicList1 = () => {
  return (
    <>
      <section className="MusicList1 MusicList">
        <div className="MusicList_wrap">
          <div className="MusicListTiTle">
            <h4>
              {musicList1.map((data) => {
                return <>{data.title}</>;
              })}
            </h4>
          </div>
          <ul className="MusicAlbumList">
            {musicList1.map((data) => {
              return (
                <>
                  <li className="box" key={data.id}>
                    <Link to="/MusicPlayer">
                      <img className="content" src={data.photo} alt="" />
                      <p>{data.musicTitle}</p>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MusicList1;
