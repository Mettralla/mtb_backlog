import { Link } from "react-router-dom";
import "../styles/MenuSection.css";

function MenuSection() {
  return (
    <div>
      <p
        className={`menu-label has-text-white`}
      >
        Navegacion
      </p>
      <ul className="menu-list navbar__list">
        <div className="navbar__li-box">
          <li className="navbar__li">
            <Link
              to="/"
              className={`navbar-item has-text-white light-mode`}
            >
              <i className="fa fa-home fa-1x itemLogo" aria-hidden="true"></i>{" "}
              Home
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default MenuSection;
