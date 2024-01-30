import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Es_Flag from "/public/spain_c.png";
import Cat_Flag from "/public/catalonia_c.png";
import En_Flag from "/public/usa_c.png";

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const handleLanguageChange = (language) => {
    // Cambiar el idioma y almacenarlo en localStorage
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <header className="header">
      <div>
        <h1 className="port">{t("HeaderNav.portfolio")}</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portafolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("HeaderNav.portfolio")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curriculum
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
          <div>
            <button
              className="button_trans"
              onClick={() => handleLanguageChange("es")}
            >
              {" "}
              <img width="24" height="24" src={Es_Flag} alt="Spanish Flag" />
            </button>
            <button
              className="button_trans"
              onClick={() => handleLanguageChange("cat")}
            >
              {" "}
              <img width="25" height="25" src={Cat_Flag} alt="Catalan Flag" />
            </button>
            <button
              className="button_trans"
              onClick={() => handleLanguageChange("en")}
            >
              {" "}
              <img width="24" height="24" src={En_Flag} alt="US Flag" />
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};
