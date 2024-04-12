import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";
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
  const [t, i18n] = useTranslation("global");
  const [randomIndex, setRandomIndex] = useState(0);

  // Obtiene las frases del archivo de traducción global según el idioma actual seleccionado
  const phrases = t("Inicio.phrases", { returnObjects: true });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomIndex(randomIndex);
  }, [phrases]);

  return (
    <div className="home">
      <div className="my_self">
        <div className="container">
          <img className="avatar" src={image_photo} alt="photo" />
        </div>
        <div className="my_self_type">
          <h1 className="ancho_home">{t("Inicio.hi1")}<strong className="type">Tony Vargas</strong>{t("Inicio.hi2")}
          </h1>
        </div>
      </div>
      <h2 className="texts">{t("Inicio.text")}
      </h2>

      {/* <article className="last-works">
        <h2 className="heading">{t("Inicio.last")}</h2>
        <div className="works">
          <ListadoTrabajos limite="2" />
        </div>
        <h2>
        <Link to="/portafolio" align="center">
        {t("Inicio.button1")}
        </Link>
        </h2>
      </article> */}

      <div className="work-item-skills">
        <h2  className="heading">DATA SCIENCE</h2>
        <br />
        <img
          fetchpriority="high"
          className="skills"
          src={image_python}
          alt="html_css_js"
        />
        <div className="skills1_caja">
          <img className="skills1" src={image_numpy} alt="NUMPY" />
          <img className="skills1" src={image_pandas} alt="PANDAS" />
          <img className="skills1" src={image_docker} alt="DOCKER" />
        </div>
        <div className="skills1_caja">
          <img className="skills1" src={image_sql} alt="SQL" />
          <img className="skills1" src={image_cassandra} alt="CASSANDRA" />
          <img className="skills1" src={image_apache} alt="APACHE" />
        </div>
        <div className="skills1_caja">
          <img className="skills1" src={image_plotly} alt="PLOTLY" />
          <img className="skills1" src={image_matplotlib} alt="MATPLOTLIB" />
          
          <img className="skills1" src={image_seaborn} alt="SEABORN" />
        </div>
        <h3>{phrases[randomIndex]}</h3>
      </div>
      <div className="work-item-skills">
        <h2  className="heading">MERN STACK</h2>
        <br />
        <img
          fetchpriority="high"
          className="skills2"
          src={image_html}
          alt="html_css_js"
        />
        <div className="skills1_caja">
          <img className="skills1" src={image_mongo} alt="MONGO" />
          <img className="skills1" src={image_express} alt="EXPRESS" />
          <img className="skills1" src={image_react} alt="REACT" />
          <img className="skills1" src={image_node} alt="NODE" />
        </div>
        <h3>
        {t("Inicio.help")}
        </h3>
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
              alt="LinkedIn"
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
              alt="github"
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
              alt="WhatsApp"
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
              href="mailto:tonacovargas@hotmail.com"
              target="blank"
              alt="email"
            >
              <img
                className="red"
                align="center"
                src="img/email.jpg"
                alt="email"
                height="40"
                width="40"
              ></img>
            </a>
          </div>
        </div>
        <div className="cv">
          <h3>
          {t("Inicio.know")}
          </h3>

          <br />
          <a
            href="/cv/Tony_Vargas_CV.pdf"
            download="Tony_Vargas_CV.pdf"
            target="_blank"
            title="Descargar Currículum Vitae"
            alt="CV"
          >
            {t("Inicio.download")}
          </a>
        </div>
      </article>
    </div>
  );
};
