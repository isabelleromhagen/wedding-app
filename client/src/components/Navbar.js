import React, { useState } from "react";
import { isMobileView } from "../utils/MobileView";
import { NavLink } from "react-router-dom";
import "../styling/App.css";
import "../styling/NavigationBar.css";
import MenuIcon from "../images/menu.svg";
import Sticker from "../images/monogram.jpg";
import Header from "./Header";
import { useHistory } from "react-router-dom";


const Navbar = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={isMobileView() ? "navigationWrapperMobile" : "navigationWrapperDesktop"}>
      <div className={isMobileView() ? "mobileIconDiv" : "desktopIconDiv"}>
        <img
          src={MenuIcon}
          alt="menu icon"
          className={isMobileView() ? "mobileIcon" : "desktopIcon"}
          onClick={() => !showMenu ? setShowMenu(true): setShowMenu(false)}
        />
        {showMenu && (
          <div
            className={
              isMobileView() ? "menuDropDownMobile" : "menuDropDownDesktop"
            }
          >
            <NavLink
              to={"/"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Välkomna
            </NavLink>
            <NavLink
              to={"/info"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Bröllopsdagen
            </NavLink>
            <NavLink
              to={"/hitta-hit"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Buss & Vägbeskrivning
            </NavLink>
            <NavLink
              to={"/toastmadames"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Toastmadames
            </NavLink>
            <NavLink
              to={"/boende"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Boende
            </NavLink>
            <NavLink
              to={"/osa"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              O.S.A
            </NavLink>
            <NavLink
              to={"/programpunkt"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Programpunkt
            </NavLink>
            <NavLink
              to={"/padel"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Padelturnering
            </NavLink>
            <NavLink
              to={"/admin"}
              className="navLinks"
              onClick={() => setShowMenu(false)}
            >
              Admin
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

