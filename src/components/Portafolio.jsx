import React from "react";
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Portafolio = () => {
  return (
    <section className="page">
      <div className="education">
      <h2 className="heading">Proyectos:</h2>
      </div>
      <ListadoTrabajos />
    </section>
  );
};
