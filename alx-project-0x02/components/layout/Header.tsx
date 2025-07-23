import * as React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}>
      <h1>My Next.js App</h1>
      <nav>
        <a href="/" style={{ margin: "0 15px" }}>
          Root
        </a>
        <a href="/home" style={{ margin: "0 15px" }}>
          Home
        </a>
        <a href="/about" style={{ margin: "0 15px" }}>
          About
        </a>
        <a href="/contact" style={{ margin: "0 15px" }}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
