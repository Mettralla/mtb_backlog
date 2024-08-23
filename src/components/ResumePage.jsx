import "../styles/Home.css";
import { Link } from "react-router-dom";

function ResumePage() {
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
      <h2 className="title is-3 has-text-white mt-4">Resumen de Proyecto</h2>

      <h4 className="title is-5 mt-4">Imágen:</h4>
      <div className="image-gallery">
        <figure className="image">
          <img className="mt-5" src="pages/01_resumen.png" alt={`Resumen`} />
        </figure>
      </div>

      <div className="elements mt-4">
        <div className="box">
          <h3 className="title is-4">Componentes</h3>
          <ul style={listStyle}>
            <li>
              <Link to="/components/7">Proyecto Navbar</Link>
              <i
                className="ml-3 fa fa-times-circle"
                aria-hidden="true"
                style={colorRed}
              ></i>
            </li>
            <li>
              <Link to="/components/8">Informacion Proyecto</Link>
              <i
                className="ml-3 fa fa-times-circle"
                aria-hidden="true"
                style={colorRed}
              ></i>
            </li>
            <li>
              <Link to="/components/9">Envios Dashboard</Link>
              <i
                className="ml-3 fa fa-times-circle"
                aria-hidden="true"
                style={colorRed}
              ></i>
            </li>
            <li>
              <Link to="/components/10">Barra de enlaces</Link>
              <i
                className="ml-3 fa fa-times-circle"
                aria-hidden="true"
                style={colorRed}
              ></i>
            </li>
            <li className="ml-5">
              <Link to="/components/11">Modal de Compartir Proyecto</Link>
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

export default ResumePage;
