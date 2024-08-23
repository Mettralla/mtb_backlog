import { useParams } from "react-router-dom";
import componentsData from "../data/components.json";

const ComponentDetail = () => {
  const { id } = useParams();
  const component = componentsData.find((comp) => comp.id === parseInt(id));
  const listStyle = {
    listStyleType: "disc", 
    paddingLeft: "1.5em",
    marginBottom: "1em",
  };

  if (!component) {
    return <div>Componente no encontrado</div>;
  }

  return (
    <div className="section">
      <h1 className="title">{component.title}</h1>
      <p>
        <strong>Descripción:</strong> {component.description}
      </p>
      <p>
        <strong>Posición:</strong> {component.position}
      </p>

      <h4 className="title is-5 mt-4">Imágenes:</h4>
      <div className="image-gallery">
        {component.images.map((imgSrc, i) => (
          <figure key={i} className="image">
            <img className="mt-5" src={imgSrc} alt={`Imagen ${i + 1}`} />
          </figure>
        ))}
      </div>

      <h2 className="title is-3 has-text-white mt-4">Elementos:</h2>
      <div className="elements">
        {component.elements.map((element, index) => (
          <div key={index} className="box">
            <h3 className="title is-4">{element.element_name}</h3>
            <p>
              <strong>Descripción:</strong> {element.element_desc}
            </p>
            <h4 className="title is-5 mt-4">Funcionalidades:</h4>
            <ul className="list pl-4" style={listStyle}>
              {element.functional.map((func, i) => (
                <li key={i} className="is-size-6">
                  {func}
                </li>
              ))}
            </ul>
            <h4 className="title is-5 mt-5">Criterios de Aceptación:</h4>
            <ul style={listStyle}>
              {element.aceptation.map((accept, i) => (
                <li key={i}>{accept}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <h2 className="title mt-5">Tareas para el Backlog:</h2>
      <div>
        {component.tasks.map((task, index) => (
          <div key={index} className="box">
            <h3 className="title is-4">{task.task_name}</h3>
            <p>
              <strong>Prioridad:</strong> {task.priority}
            </p>
            <p>
              <strong>Estimación:</strong> {task.estimate}
            </p>
            <p>
              <strong>Dependencias:</strong> {task.dependencies}
            </p>
            <p>
              <strong>Criterios de Aceptación:</strong>{" "}
              {task.acceptation_criteria}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ComponentDetail;
