import React from "react";
import { musicList2 } from "../server/musicList2";

const MusicLIst2 = () => {
  return (
    <section className="MusicList2 MusicList">
      <div className="MusicList_wrap">
        <div className="MusicListTiTle">
          <h4>
            {musicList2.map((data) => {
              return <>{data.title}</>;
            })}
          </h4>
        </div>
        <ul className="MusicAlbumList">
          {musicList2.map((data) => {
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

export default MusicLIst2;
