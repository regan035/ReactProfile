import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">
        <div className="container-fluid">
                <img src="./img/logo.png" height="60" alt="" />

                <ul className="navbar-nav ml-auto ">
                    <li className="navbar-item "><a href="index.html">Home</a></li>

                    <li className="navbar-item "><a href="contact.html">Contact</a></li>
                </ul>
            
        </div>
    </nav>
  );
}

export default Navbar;
