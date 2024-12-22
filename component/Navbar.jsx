// "use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div>Facebook</div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
