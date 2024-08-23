import { Outlet } from "react-router-dom";
import "../styles/WebBody.css";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <div className="body-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
