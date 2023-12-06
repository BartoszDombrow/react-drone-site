import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { GrLanguage } from "react-icons/gr";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="logo_wrapper">
        <img src={logo} alt="logo" width={60} height={60} />
        <p>DRONE_PRO</p>
      </div>
      <ul>
        <li>
          <Link className="a_tag" to="/">
            O nas
          </Link>
        </li>
        <li>
          <Link className="a_tag" to="/oferta">
            Usługi
          </Link>
        </li>
        <li>
          <Link className="a_tag" to="/flota">
            Flota
          </Link>
        </li>
        <li>
          <Link className="a_tag" to="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
      <div className="language_selector">
        <GrLanguage className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
