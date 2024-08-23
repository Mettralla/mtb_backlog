import "../styles/Home.css";
import ProjectList from "./ProjectList";
import ResumePage from "./ResumePage";
import FormPage from "./FormPage";
import LoginPage from "./LoginPage";
import DataPage from "./DataPage";
import ConfigPage from "./ConfigPage";
import NewForm from "./NewForm";
import UseForm from "./UseForm";

function Home() {
  return (
    <div className="section">
      <h1 className="title">Paginas & Componentes</h1>

      <LoginPage />
      <ProjectList />
      <div className="mt-5"></div>
      <ResumePage />
      <FormPage />
      <DataPage />
      <ConfigPage />
      <NewForm />
      <UseForm />
    </div>
  );
}

export default Home;
