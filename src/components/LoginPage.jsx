import "../styles/Home.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const listStyle = {
    listStyleType: "disc", 
    paddingLeft: "1.5em",
    marginBottom: "1em",
  };

  const colorRed = {
    color: "red",
  };

  return (
    <div>
      <h2 className="title is-3 has-text-white mt-4">Login</h2>

      <h4 className="title is-5 mt-4">Imágen:</h4>
      <div className="image-gallery">
        <figure className="image">
          <img className="mt-5" src="pages/03_Login.png" alt={`Home`} />
        </figure>
      </div>

      <div className="elements mt-4">
        <div className="box">
          <h3 className="title is-4">Componentes</h3>
          <ul style={listStyle}>
            <li>
              <Link to="/components/12">Caja Logueo</Link>
              <i
                className="ml-3 fa fa-times-circle"
                aria-hidden="true"
                style={colorRed}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
