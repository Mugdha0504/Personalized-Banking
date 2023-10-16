import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";


export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-20 min-h-screen">
          {children}
        </section>
      </main>
    </>
  );
}
