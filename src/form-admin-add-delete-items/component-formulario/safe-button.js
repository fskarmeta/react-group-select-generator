export const SafeButton = ({ updateObject }) => {
  return (
    <div className="d-flex justify-content-center">
      <span
        className="btn btn-success text-center"
        role="button"
        onClick={updateObject}
      >
        Guardar Cambios
      </span>
    </div>
  );
};
