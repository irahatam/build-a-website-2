import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Matahari's Weather App </h1>
      </div>
      <nav>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=New%20York"> New York </a>
        <a href="/?city=Tokyo"> Tokyo </a>
        <a href="/?city=Sydney"> Sydney </a>
      </nav>
    </header>
  );
}

export default Header;
