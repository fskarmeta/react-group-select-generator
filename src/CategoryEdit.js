import React from "react";
import { EditCategories } from "./form-admin-add-delete-items/form-edit-categorias-admin";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDY2OTA4NTEsIm5iZiI6MTYwNjY5MDg1MSwianRpIjoiOTM5ZDY4YmMtMGMyMC00OWQxLTgxNDItMDY3YzhmZmUyNTQzIiwiZXhwIjoxNjA2OTUwMDUxLCJpZGVudGl0eSI6ImFkbWluIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.ZkuiuFkkwTlYucdPgw1Hj-GpTwchk1_KVZE_BH29uGU";
const fetchEquipos = "http://localhost:5000/objetoglobal/equipos/admin";
const fetchEscenario = "http://localhost:5000/objetoglobal/escenario/admin";
const fetchFoodAndDrinks =
  "http://localhost:5000/objetoglobal/foodanddrinks/admin";

function CategoryEditForm() {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <EditCategories
              titulo={"Equipos"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              fetchURL={fetchEquipos}
              token={token}
            />
          </div>
          <div className="col-md-4">
            <EditCategories
              titulo={"Escenario"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              fetchURL={fetchEscenario}
              token={token}
            />
          </div>
          <div className="col-md-4">
            <EditCategories
              titulo={"Food & Drinks"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              fetchURL={fetchFoodAndDrinks}
              token={token}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryEditForm;
