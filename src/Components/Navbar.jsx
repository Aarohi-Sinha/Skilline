import React, { useState } from "react";
import "../Styles/Navbar.css";
import loGo from "../Assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <img src={loGo} alt="Logo" />

      {/* Only show hamburger when nav is closed */}
      {!isOpen && (
        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu color="#252641" />
        </div>
      )}

      <div className={`navitems ${isOpen ? "show" : ""}`}>
        {isOpen && (
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <MdClose size={24} color="#252641"  />
          </button>
        )}
        <a href="#">Home</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>

        {isOpen ? (
            <>
                <a href="#" className="linklogin">Login</a>
                <a href="#" className="linksignup">Sign Up</a>
            </>
            ): (
            <>
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
