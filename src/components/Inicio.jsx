
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image_html from "./img/html_css_js1.avif";
import image_react from "./img/reactjs-ar21.avif";
import image_node from "./img/nodejs-ar21.avif";
import image_mongo from "./img/Mongo-db-logo.avif";
import image_express from "./img/express.avif";
import image_photo from "./img/perfil_avatar2.avif";
import image_python from "./img/Python.svg.png";
import image_numpy from "./img/numpy.png";
import image_pandas from "./img/pandas.jpeg";
import image_sql from "./img/sql.png";
import image_docker from "./img/docker.webp";
import image_cassandra from "./img/cassandra.svg";
import image_apache from "./img/apache.jpg";
import image_matplotlib from "./img/matplot.png";
import image_plotly from "./img/plotly.png";
import image_seaborn from "./img/seaborn.svg";
import { useTranslation } from "react-i18next";

export const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");
  const [randomIndexDS, setRandomIndexDS] = useState(null);
  const [randomIndexDAW, setRandomIndexDAW] = useState(null);

  // Obtiene las frases del archivo de traducción global según el idioma actual seleccionado
  const phrases_ds = t("Inicio.phrases_ds", { returnObjects: true });
  const phrases_daw = t("Inicio.phrases_daw", { returnObjects: true });

  // Ejecuta solo una vez después de que las frases estén disponibles
  useEffect(() => {
    if (phrases_ds.length && phrases_daw.length && randomIndexDS === null && randomIndexDAW === null) {
      const newRandomIndexDS = Math.floor(Math.random() * phrases_ds.length);
      const newRandomIndexDAW = Math.floor(Math.random() * phrases_daw.length);
      setRandomIndexDS(newRandomIndexDS);
      setRandomIndexDAW(newRandomIndexDAW);
    }
  }, [phrases_ds, phrases_daw, i18n.language]);  // Solo ejecuta cuando las frases cambian o el idioma

  const obtenerEnlaceCV = () => {
    const idioma = i18n.language;
    switch (idioma) {
      case "es":
        return "/cv/tony_vargas_cv_esp.pdf";
      case "cat":
        return "/cv/tony_vargas_cv_cat.pdf";
      case "en":
        return "/cv/tony_vargas_cv_eng.pdf";
      default:
        return "/cv/tony_vargas_cv_esp.pdf";
    }
  };

  return (
    <div className="home">
      <div className="my_self">
        <div className="container">
          <img className="avatar" src={image_photo} alt="Foto de perfil de Tony Vargas" />
        </div>
        <div className="my_self_type">
          <h1 className="ancho_home">
            {t("Inicio.hi1")}
            <strong className="type">Tony Vargas</strong>
            {t("Inicio.hi2")}
          </h1>
        </div>
      </div>
      <br />
      <h2 className="texts">{t("Inicio.text")}</h2>
      <div className="cajas">
        <Link to="/portafolio_dS">
          <div className="work-item-skills">
            <h4 className="heading">DATA SCIENCE</h4>
            <h4 className="heading">& ANALYTICS</h4>

            <br />
            <img
              fetchpriority="high"
              className="skills"
              src={image_python}
              alt="Logo de Python"
            />
            <div className="skills1_caja">
              <img className="skills1" src={image_numpy} alt="Logo de NumPy" />
              <img className="skills1" src={image_pandas} alt="Logo de Pandas" />
              <img className="skills1" src={image_docker} alt="Logo de Docker" />
            </div>
            <div className="skills1_caja">
              <img className="skills1" src={image_sql} alt="Logo de SQL" />
              <img className="skills1" src={image_cassandra} alt="Logo de Cassandra" />
              <img className="skills1" src={image_apache} alt="Logo de Apache Spark" />
            </div>
            <div className="skills1_caja">
              <img className="skills1" src={image_plotly} alt="Logo de Plotly" />
              <img
                className="skills1"
                src={image_matplotlib}
                alt="Logo de Matplotlib"
              />
              <img className="skills1" src={image_seaborn} alt="Logo de Seaborn" />
            </div>
            {randomIndexDS !== null && <h3>{phrases_ds[randomIndexDS]}</h3>}
          </div>
        </Link>
        <Link to="/portafolio">
          <div className="work-item-skills">
            <h4 className="heading">WEB DEVELOPMENT</h4>
            <br />
            <h2 className="heading">(MERN STACK)</h2>
            <br />

            <img
              fetchpriority="high"
              className="skills2"
              src={image_html}
              alt="Logos de HTML, CSS y JavaScript"
            />
            <div className="skills1_caja">
              <img className="skills1" src={image_mongo} alt="Logo de MongoDB" />
              <img className="skills1" src={image_express} alt="Logo de ExpressJS" />
              <img className="skills1" src={image_react} alt="Logo de React" />
              <img className="skills1" src={image_node} alt="Logo de NodeJS" />
            </div>
            {randomIndexDAW !== null && <h3>{phrases_daw[randomIndexDAW]}</h3>}
          </div>
        </Link>
      </div>
      <article className="work-item2">
        <h2>
          <Link to="/contacto" align="center">
            {t("Inicio.contact")}
          </Link>
        </h2>
        <div className="redes">
          <div>
            <a
              href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
              target="blank"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="LinkedIn"
                height="40px"
                width="40px"
              ></img>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/TonyVargas777"
              height="40px"
              width="40px"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                alt="github"
                height="40px"
                width="40px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/34661871759"
              target="blank"
              title="WhatsApp"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg"
                alt="WhatsApp"
                height="40px"
                width="40px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="mailto:tonacovargas@gmail.com"
              target="blank"
            >
              <img
                className="red"
                align="center"
                src="img/email.jpg"
                alt="Enviar correo electrónico de contacto"
                src="img/email.png"
                alt="email"
                height="40"
                width="40"
              ></img>
            </a>
          </div>
        </div>
        <div className="cv">
          <h3>{t("Inicio.know")}</h3>

          <br />
          <a
            href={obtenerEnlaceCV()}
            download
            target="_blank"
            title="Descargar Currículum Vitae"
          >
            {t("Inicio.download")}
          </a>
        </div>
      </article>
    </div>
  );
};