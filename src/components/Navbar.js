import React, { useState } from "react";
import Home from "../routes/Home";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to={"/"}>
        <h2 className="title">
          <span className="title-word title-word-1">Senam </span>
          <span className="title-word title-word-2">K. </span>
          <span className="title-word title-word-3">Humado</span>
        </h2>
      </Link>

      <div>
        <ul className={click ? "navBar active" : "navBar"}>
          <li>
            <Link to={"/"} className="active">
              Home
            </Link>
          </li>

          <li>
            <Link to={"/project"}>Project </Link>
          </li>

          <li>
            <Link to={"/about"}>About Me </Link>
          </li>

          <li>
            <Link to={"/contact"}>Contact </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
