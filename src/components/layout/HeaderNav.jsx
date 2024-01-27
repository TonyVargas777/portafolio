import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
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
        </ul>
      </nav>
    </header>
  );
};
