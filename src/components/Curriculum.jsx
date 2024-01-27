import React from "react";
import image_html from "./img/html_css_js1.png";
import image_react from "./img/reactjs-ar21.png";
import image_node from "./img/nodejs-ar21.png";
import image_mongo from "./img/Mongo-db-logo.png";
import image_express from "./img/express.png";
import { useTranslation } from "react-i18next";

export const Curriculum = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="page">
      <div className="education">
        <h2 className="heading">{t("Curriculum.title")}</h2>
      </div>
      <div className="education">
        
        <br />
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
          <hr />
          {t("Curriculum.cv")}
          <hr />
          <a
            href="/cv/Tony_Vargas_CV.pdf"
            download="Tony_Vargas_CV.pdf"
            target="_blank"
            title="Descargar Currículum Vitae"
          >
            {t("Curriculum.download")}
          </a>
        </div>
      </div>
      <div className="education">
        <h2>{t("Curriculum.education")}</h2>
        <div className="education1">
          <h2>
          {t("Curriculum.daw")}
          </h2>
          <h3>{t("Curriculum.consorci")}</h3>
        </div>
        <div className="education1">
          <h2>
          {t("Curriculum.ds")}
          </h2>
          <h3>{t("Curriculum.ds")}</h3>
        </div>
        <div className="education1">
          <h2>C2 - PROFICIENT ENGLISH CERTIFICATE (CEFR)</h2>
          <h3> EF Standard English Test (EF SET) (2023)</h3>
        </div>
      </div>
    </div>
  );
};
