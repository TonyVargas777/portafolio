import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Portafolio_ds } from "../components/Portafolio_ds";
import { Servicios } from "../components/Servicios";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio_ds" element={<Portafolio_ds />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/*"
            element={
              <div className="error-404">
                <div className="error-container">
                  <img
                    className="error-img light-error"
                    src="/img/error_404_light.jpeg"
                    alt="Página no encontrada - modo claro"
                  />
                  <img
                    className="error-img dark-error"
                    src="/img/error_404.jpeg"
                    alt="Página no encontrada - modo oscuro"
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
};
