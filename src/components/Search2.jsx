import React from "react";

import Footer from "./Footer";
import { searchList1 } from "../server/searchList1";
import { Link } from "react-router-dom";

const Search2 = () => {
  return (
    <div className="Search">
      <div className="SearchWrap">
        <div className="SearchHeaderBox">
          <div className="SearchIconBox">
            <p className="SearchIconText">R</p>
          </div>
          <div className="SearchTitleBox">
            <p>검색</p>
          </div>
        </div>
        <div className="SearchTopBox">
          <input
            className="SearchBar"
            type="text"
            placeholder="어떤 것을 듣고 싶으세요?"
          />
        </div>

        <div className="SearchBottomBox">
          <ul className="grid-container">
            {searchList1.map((data) => {
              return (
                <Link to="/SearchList">
                  <li key={data.id}>
                    <img src={data.photo} alt="" />
                    <p>{data.title}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search2;
