import "../styles/NavBar.css";
import MenuSection from "./MenuSection";
import LogoDark from "../assets/react.svg";

function Navbar() {

  return (
    <div
      className={`navbar-container has-background-dark`}
    >
      <aside className="menu">
        <div className="navbar-logo">
          <img src={LogoDark} alt="Logo" />
        </div>
        <MenuSection title="Navegacion" />
      </aside>
    </div>
  );
}

export default Navbar;
