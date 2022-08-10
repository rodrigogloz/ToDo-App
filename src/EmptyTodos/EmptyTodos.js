import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
  return (
    <p className="textEmptyTodos">
      Actualmente no existen tareas en la lista. Pulsa el botón inferior derecho
      "+" para añadir una nueva tarea.
    </p>
  );
}

export { EmptyTodos };
