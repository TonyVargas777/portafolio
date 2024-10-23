import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Es_Flag from "/public/spain_c.png";
import Cat_Flag from "/public/catalonia_c.png";
import En_Flag from "/public/usa_c.png";

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false); // Para mostrar/ocultar el menú

  // Obtener el idioma actual guardado en localStorage o español por defecto
  const currentLanguage = localStorage.getItem("language") || "es";

  // Función para obtener la bandera correspondiente al idioma actual
  const getCurrentFlag = () => {
    switch (currentLanguage) {
      case "es":
        return Es_Flag;
      case "cat":
        return Cat_Flag;
      case "en":
        return En_Flag;
      default:
        return Es_Flag;
    }
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setShowDropdown(false); // Cerrar el menú después de seleccionar el idioma
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Alternar el estado del menú
  };

  return (
    <header className="header">
      <li>
        <NavLink to="/inicio" className="port">
          {t("HeaderNav.portfolio")}
        </NavLink>
      </li>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/portafolio_dS"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {"DATA"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portafolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {"WEB"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("Curriculum.education")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.contact")}
            </NavLink>
          </li>

          {/* Menú desplegable de idiomas */}
          <div className="language-selector">
            <button onClick={toggleDropdown} className="dropdown-btn">
              {/* Mostrar la bandera del idioma actual como botón */}
              <img
                src={getCurrentFlag()} // Obtener la bandera actual
                alt="Current Language"
                width="24"
                height="24"
              />
            </button>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange("es")}>
                  <img
                    width="24"
                    height="24"
                    src={Es_Flag}
                    alt="Spanish Flag"
                  />{" "}
                </li>
                <li onClick={() => handleLanguageChange("cat")}>
                  <img
                    width="24"
                    height="24"
                    src={Cat_Flag}
                    alt="Catalan Flag"
                  />{" "}
                </li>
                <li onClick={() => handleLanguageChange("en")}>
                  <img width="24" height="24" src={En_Flag} alt="US Flag" />{" "}
                </li>
              </ul>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};
