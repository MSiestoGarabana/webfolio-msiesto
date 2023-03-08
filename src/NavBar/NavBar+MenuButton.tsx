import React from "react";
import NavBar from "./NavBar";
import "./NavBar.css";
import "./menuButton.css";

export default function NavBarAndButton() {
  return (
    <div>
      <button className="menuButton">
        <svg
          className="menuIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <NavBar />
    </div>
  );
}
