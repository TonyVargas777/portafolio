import React from "react";
import image_html from "./img/html_css_js1.png";
import image_react from "./img/reactjs-ar21.png";
import image_node from "./img/nodejs-ar21.png";
import image_mongo from "./img/Mongo-db-logo.png";
import image_express from "./img/express.png";

export const Curriculum = () => {
  return (
    <div className="page">
      <div className="education">
        <h1>Conocimientos</h1>
        <h1>MERN STACK</h1>
        <div>
          <img className="skills" src={image_html} alt="" />
        </div>
        <div>
          <img className="skills1" src={image_mongo} alt="MONGO" />
          <img className="skills1" src={image_express} alt="EXPRESS" />
          <img className="skills1" src={image_react} alt="REACT" />
          <img className="skills1" src={image_node} alt="NODE" />
        </div>
        <div>
          <hr/>
          Si quieres saber más de mi puedes descargarte mi Curriculum Vitae:
          <hr/>
          <a
            href="/cv/Tony_Vargas_CV.pdf" 
            download="Tony_Vargas_CV.pdf"
            target="_blank"
            title="Descargar Currículum Vitae"
          >
            Descargar CV
          </a>
        </div>
      </div>
      <div className="education">
        <h1>Educación</h1>
        <div className="education1">
          <h2>
            Certificado de Profesionalidad DESARROLLO DE APLICACIONES CON
            TECNOLOGÍAS WEB
          </h2>
          <h4>CONSORCI PER LA FORMACIÓ CONTINUA DE CATALUNYA (CONFORCAT)</h4>          
        </div>
        <div className="education1">
          <h2>
            Programa Especializado - Data Science Fundamentals with Python and
            SQL.
          </h2>
          <h4>Certificado a cargo de IBM en Coursera</h4>
        </div>
        <div className="education1">
          <h2>C2 - PROFICIENT ENGLISH CERTIFICATE (CEFR)</h2>
          <h4> EF Standard English Test (EF SET) (2023)</h4>
        </div>
      </div>
    </div>
  );
};
