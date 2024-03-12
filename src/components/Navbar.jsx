import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { handleClickScroll } from "../utils";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleNavClick = (e) => {
    handleClickScroll(e);
    handleMenuOpen();
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="menu">
              <h2 className="nav-logo">Rent Wheels</h2>
              <button className="menu-button" onClick={handleMenuOpen}>
                <GiHamburgerMenu />
              </button>
            </div>
            <ul className={isMenuOpen ? "open growDown" : "closed"}>
              <li><a href="#home">Home</a></li>
              <li><a href="#why">Why Choose us</a></li>
              <li><a href="#fleet">Inventory</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <ul className={isMenuOpen ? "open growDown" : "closed"} >
              <li className="login-btn">Sign In</li>
              <li className="register-btn">Register</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
