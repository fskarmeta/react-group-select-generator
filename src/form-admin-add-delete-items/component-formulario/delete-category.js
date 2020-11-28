import React, { useState, useEffect } from "react";
import Select from "react-select";

export const DeleteCategory = ({ object, getCategory }) => {
  const [category, onChange] = useState("");

  //almacenamos todas las categorías existentes del objecto original acá
  const options = [];

  // cada re render llamamos en el formato pedido por react-select las categorías { value: nombre_categoria, label:  nombre_categoria }
  // y las pusheamos al array de opciones
  useEffect(() => {
    for (let element of object) {
      let newObj = { value: element.label, label: element.label };
      if (!options.some((el) => el.value === newObj.value)) {
        options.push(newObj);
      }
    }
  });

  //click al boton le mandamos la información con la categoría como string al padre
  function infoToParent() {
    getCategory(category.label);
  }

  return (
    <div className="form-group">
      <p className="font-weight-bold">Borrar Elementos</p>
      <label htmlFor="categorias">Borrar Categoria</label>
      <div>
        <div>
          <Select options={options} onChange={onChange} />
        </div>
      </div>
      <span
        name="addcategory"
        className="btn btn-primary mt-1"
        role="button"
        onClick={() => infoToParent()}
      >
        Borrar Categoria
      </span>
    </div>
  );
};
