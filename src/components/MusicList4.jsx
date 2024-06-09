import React from "react";
import { musicList4 } from "../server/musicList4";

const MusicList4 = () => {
  return (
    <section className="MusicList4 MusicList">
      <div className="MusicList_wrap">
        <div className="MusicListTiTle">
          <h4>
            {musicList4.map((data) => {
              return <>{data.title}</>;
            })}
          </h4>
        </div>
        <ul className="MusicAlbumList">
          {musicList4.map((data) => {
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

export default MusicList4;
