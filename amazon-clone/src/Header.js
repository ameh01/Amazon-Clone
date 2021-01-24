import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://pngimg.com/image/61246" />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* logo */}
      </div>
      <div></div>
    </div>
  );
}

export default Header;
