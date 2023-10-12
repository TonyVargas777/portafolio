import React from "react";
import { Link } from "react-router-dom";
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Inicio = () => {
  return (
    <div className="home">
      <h1 className="ancho_home">
        Hola, soy <strong className="type">Tony Vargas</strong> y soy
        Desarrollador Web.
      </h1>
      <h2>
        Vivo en Barcelona, y ofrezco mis servicios de{" "}
        <strong> programación</strong> y <strong>desarrollo </strong>
        en todo tipo de proyectos web.
      </h2>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet.
      </h2>
      <h2>
        <Link to="/contacto" align="center">Contacta conmigo</Link>
      </h2>

      <p align="center" className="redes">
        <a
          href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/tonaco777/"
          alt="tony777."
          height="40px"
          width="40px"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
          ></img>
        </a>
        <a
          href="https://twitter.com/tonaco777"
          alt="tony777."
          height="40px"
          width="40px"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="LinkedIn"
            height="40px"
            width="40px"
          >            
          </img>
        </a>
        <a href="mailto:tonacovargas@hotmail.com" target="blank">
          <img
            align="center"
            src="https://us.123rf.com/450wm/mamanamsai/mamanamsai1501/mamanamsai150100386/35929070-email-icono-en-el-fondo-azul-limpio-vector.jpg"
            alt="tony777."
            height="40"
            width="40"
          ></img>{" "}
        </a>
      </p>

      <section className="lasts-works">
        <h2 className="heading">Mis últimos proyectos:</h2>
        <p className="heading2">
          Estos son algunos de mis trabajos de desarrollo web:
        </p>
        <div className="works">
          <ListadoTrabajos limite="2" />
        </div>
      </section>
    </div>
  );
};
