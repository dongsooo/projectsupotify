import React from "react";
import { musicList3 } from "../server/musicList3";

const MusicList3 = () => {
  return (
    <section className="MusicList3 MusicList">
      <div className="MusicList_wrap">
        <div className="MusicListTiTle">
          <h4>
            {musicList3.map((data) => {
              return <>{data.title}</>;
            })}
          </h4>
        </div>
        <ul className="MusicAlbumList">
          {musicList3.map((data) => {
            return (
              <>
                <li className="box" key={data.id}>
                  <img className="content" src={data.photo} alt="" />
                  <p>{data.musicTitle}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MusicList3;
