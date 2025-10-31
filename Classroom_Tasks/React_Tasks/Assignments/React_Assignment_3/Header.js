import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="user-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="User"
        />
      </div>
    </header>
  );
};

export default Header;
