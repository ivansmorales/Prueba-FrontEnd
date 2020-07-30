import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div id="header">
      <img src={props.img} alt={props.alt} />
      <h1>
        {props.title} <span className="orange">{props.span}</span>
      </h1>
    </div>
  );
}

export default Header;
