import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link href="/home">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/posts">
          <a className="hover:underline">Posts</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
