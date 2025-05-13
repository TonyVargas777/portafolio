import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Es_Flag from "/public/spain_c.png";
import Cat_Flag from "/public/catalonia_c.png";
import En_Flag from "/public/usa_c.png";
import IdiomaIcon from "/public/idioma.png"; // Icono principal

export const HeaderNav = () => {
  const [t, i18n] = useTranslation("global");
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const currentLanguage = localStorage.getItem("language") || "es";

  const languages = [
    { code: "es",  flag: Es_Flag },
    { code: "cat",  flag: Cat_Flag },
    { code: "en",  flag: En_Flag },
  ];

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setShowPopup(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
            <NavLink to="/portafolio_dS" className={({ isActive }) => (isActive ? "active" : "")}>
              {"DATA"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" className={({ isActive }) => (isActive ? "active" : "")}>
              {"WEB"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("Curriculum.education")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("HeaderNav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
              {t("HeaderNav.contact")}
            </NavLink>
          </li>

          {/* Botón para mostrar popup de idiomas */}
          <li>
            <button onClick={togglePopup} className="popup-btn">
              <img src={IdiomaIcon} alt="Idioma" width="24" height="24" />
            </button>
          </li>

          {/* Botón cambio de tema */}
          <li>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="popup-btn">
              <img src="/cambiar.png" alt="Theme Toggle" width="24" height="24" />
            </button>
          </li>
        </ul>
      </nav>

      {/* Popup para selector de idioma */}
      {showPopup && (
        <div className="language-popup">
          <div className="popup-content">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className="language-option"
                onClick={() => handleLanguageChange(lang.code)}
              >
                <img src={lang.flag} alt={lang.label} width="30" height="30" />
                <span>{lang.label}</span>
              </button>
            ))}
            <button className="close-popup" onClick={() => setShowPopup(false)}>✖</button>
          </div>
        </div>
      )}
    </header>
  );
};
