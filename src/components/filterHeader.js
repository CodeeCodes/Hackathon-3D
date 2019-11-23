import React from "react";
import Filter from "../assets/icon_filter.png";

export default function FilterHeader() {
  return (
    <header className="filterheader">
      <div className="filterheader__container">
        <div className="filterheader__div">
          <h2 className="filterheader_header">Because You Like</h2>
          <img className="filterheader__icon" src={Filter}></img>
        </div>
        <div className="filterheader__cat__div">
          <p className="filterheader__cat-one">Technology</p>
          <p className="filterheader__cat-two">Environment </p>
        </div>
      </div>
    </header>
  );
}
