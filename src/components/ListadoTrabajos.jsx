import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";

export const ListadoTrabajos = ({ limite }) => {
  return (
    <section className="works">
      {trabajos.slice(0, limite).map((trabajo) => {
        return (
          <article key={trabajo.id} className="work-item">
            <Link to={trabajo.url} target="blank" className="work-item">
              <div className="mask">
                <img src={"/img/" + trabajo.id + ".avif"} alt={trabajo.id} />
              </div>
            </Link>
            <div className="datos">
              <span>{trabajo.categorias}</span>
              <h2>
                <Link to={trabajo.url} target="blank">
                  {trabajo.nombre}
                </Link>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </div>
          </article>
        );
      })}
    </section>
  );
};
