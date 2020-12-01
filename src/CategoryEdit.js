import React, { useState, useRef } from "react";
import { EditCategories } from "./form-admin-add-delete-items/form-edit-categorias-admin";
import { objetosGlobales } from "./testitem";

const token = "";
const fetchURL = "";

function CategoryEditForm() {
  const [global, setGlobal] = useState(objetosGlobales);

  function updateGlobalState(attr, obj) {
    let globalCopy = { ...global };
    globalCopy[attr] = obj;
    //aqui realmente deberíamos mandar la actualización del fetch (here comes the PUT)
    setGlobal(globalCopy);
  }

  // fetch de los objetos
  // useEffect(() => {
  //   getObject.current();
  // }, []);

  const getObject = useRef(() => {});

  getObject.current = () => {
    fetch(`${fetchURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setGlobal(data);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  // fetch actualizar array en el back

  const updateObject = () => {
    fetch(`${fetchURL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(global),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <EditCategories
              titulo={"Equipos"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              global={global.equipos}
              updateGlobalState={updateGlobalState}
              objectAttr={"equipos"}
            />
          </div>
          <div className="col-md-4">
            <EditCategories
              titulo={"Escenario"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              global={global.escenario}
              updateGlobalState={updateGlobalState}
              objectAttr="escenario"
            />
          </div>
          <div className="col-md-4">
            <EditCategories
              titulo={"Food & Drinks"}
              colorDeFondo={"rgba(224,224,224,0.2)"}
              global={global.foodanddrinks}
              objectAttr={"foodanddrinks"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryEditForm;
