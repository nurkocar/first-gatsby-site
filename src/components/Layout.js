import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>Copywright 2021 NurKocar</p>
      </footer>
    </div>
  );
}
