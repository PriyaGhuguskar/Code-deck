import React from "react";

function Navbar({ isFullScreen }) {
  return (
    <div
      className={`relative ${
        isFullScreen ? "h-0" : "h-13"
      } bg-black flex justify-center items-center gap-4`}
    >
      <img className="w-14" src="/logo.png" alt="logo" />
      <div className="text-white text-2xl">Code Deck</div>
    </div>
  );
}

export default Navbar;
