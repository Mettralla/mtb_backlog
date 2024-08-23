import { Outlet } from "react-router-dom";
import "../styles/WebBody.css";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Layout() {
  return (
    <div className="app">
      <NavBar />
      <SearchBar />
      <div className="body-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
