import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navigation">
            <div className="logo_wrapper">
                <img src={logo} alt="logo" width={60} height={60} />
                <p>DRONEPRO</p>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <HiOutlineMenu size={30} />
            </div>
            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <Link className="a_tag" to="/" onClick={toggleMenu}>
                        O nas
                    </Link>
                </li>
                <li>
                    <Link className="a_tag" to="/oferta" onClick={toggleMenu}>
                        Usługi
                    </Link>
                </li>
                <li>
                    <Link className="a_tag" to="/kontakt" onClick={toggleMenu}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
