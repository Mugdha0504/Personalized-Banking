import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      </div> 
        <div className="relative md:ml-64 bg-blueGray-100 px-4 md:px-10 mx-auto">
          {children}
        </div>
      
    </>
  );
}
