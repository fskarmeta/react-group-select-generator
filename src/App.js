import { Formulario } from "./form-admin-add-delete-items/form-edit-categorias-admin";

function App() {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <Formulario
              titulo={"Equipos"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
            />
          </div>
          <div className="col-md-4">
            <Formulario
              titulo={"Escenario"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
            />
          </div>
          <div className="col-md-4">
            <Formulario
              titulo={"Food & Drinks"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
