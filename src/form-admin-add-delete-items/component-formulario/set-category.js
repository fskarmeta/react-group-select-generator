import React, { useState } from "react";

export const SetCategory = ({ addCategory }) => {
  const [category, setCategory] = useState(null);

  //atrapamos la cateogría que inserto el usuario y le iniciamos un array vació con el key "options"
  function categorySetter(e) {
    setCategory({
      label: e.target.value,
      options: [],
    });
  }

  //pasamos la funcion categorySetter al onChange para atrapar el texto
  //llamamos la funcion addCategory del padre (formulario) al hacer click
  return (
    <div className="form-group">
      <p className="font-weight-bold">Agregar Categorias</p>
      <label htmlFor="categoria">Crear Categoria</label>
      <div>
        <input
          type="text"
          className="form-control"
          name="categoria"
          aria-describedby="helpId"
          placeholder=""
          onChange={(e) => categorySetter(e)}
        />
      </div>
      <span
        name="addcategory"
        className="btn btn-primary mt-1"
        role="button"
        onClick={() => addCategory(category)}
      >
        Agregar Categoria
      </span>
    </div>
  );
};
