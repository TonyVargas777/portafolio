import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";
import image_html from "./img/html_css_js1.avif";
import image_react from "./img/reactjs-ar21.avif";
import image_node from "./img/nodejs-ar21.avif";
import image_mongo from "./img/Mongo-db-logo.avif";
import image_express from "./img/express.avif";
import image_photo from "./img/perfil_avatar2.avif";

export const Inicio = () => {
  return (
    <div className="home">
      <div className="my_self">
        <div className="container">
          <img className="avatar" src={image_photo} alt="photo" />
        </div>
        <div className="my_self_type">
          <h1 className="ancho_home">
            Hola, soy <strong className="type">Tony Vargas</strong> y soy
            Desarrollador Web Full Stack
          </h1>
        </div>
      </div>
      <h2 className="texts">
        Vivo en Barcelona, y ofrezco mis servicios de programación y desarrollo
        en todo tipo de proyectos web.
      </h2>

      <article className="last-works">
        <h2 className="heading">Mi último proyecto:</h2>
        <div className="works">
          <ListadoTrabajos limite="1" />
        </div>
        <h2>
        <Link to="/portafolio" align="center">
          Acceso al Resto de Proyectos
        </Link>
        </h2>
      </article>

      <div className="work-item-skills">
        <h2  className="heading">MERN STACK</h2>
        <br />
        <img
          fetchpriority="high"
          className="skills"
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
          Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
          relevancia en internet.
        </h3>
      </div>
      <article className="work-item2">
        <h2>
          <Link to="/contacto" align="center">
            Contacta conmigo
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
            Si quieres saber más de mi puedes descargarte mi Curriculum Vitae:
          </h3>

          <br />
          <a
            href="/cv/Tony_Vargas_CV.pdf"
            download="Tony_Vargas_CV.pdf"
            target="_blank"
            title="Descargar Currículum Vitae"
            alt="CV"
          >
            Descargar CV
          </a>
        </div>
      </article>
    </div>
  );
};
