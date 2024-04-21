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
        <h2 className="heading">{t("Curriculum.education")}</h2>
      </div>
      {/* <div className="education">
        <br />
        <div>
          <img className="skills" src={image_html} alt="" />
        </div>
        {<div>
          <img className="skills1" src={image_mongo} alt="MONGO" />
          <img className="skills1" src={image_express} alt="EXPRESS" />
          <img className="skills1" src={image_react} alt="REACT" />
          <img className="skills1" src={image_node} alt="NODE" />
        </div>}
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
      </div> */}
      <div className="education">
        {/* <h2>{t("Curriculum.education")}</h2> */}
        <div className="education1">
          <h2>{t("Curriculum.boot_camp_ds")}</h2>
          <h2>(IFCD66)</h2>
          <ul >
            <li>{t("Curriculum.boot_camp_m1")}</li>
            <li>{t("Curriculum.boot_camp_m2")}</li>
            <li>{t("Curriculum.boot_camp_m3")}</li>
          </ul>
          <h2>{t("Curriculum.boot_camp_school")}</h2>
        </div>
        <div className="education1">
          <h2>{t("Curriculum.dam")}</h2>
          <ul>
            <li>{t("Curriculum.dam_m1")}</li>
            <li>{t("Curriculum.dam_m2")}</li>
            <li>{t("Curriculum.dam_m3")}</li>
            <li>{t("Curriculum.dam_m4")}</li>
            <li>{t("Curriculum.dam_m5")}</li>
            <li>{t("Curriculum.dam_m6")}</li>
            <li>{t("Curriculum.dam_m7")}</li>
            <li>{t("Curriculum.dam_m8")}</li>
          </ul>
          <h2>{t("Curriculum.unicas")}</h2>
        </div>
        <div className="education1">
          <h2>{t("Curriculum.daw")}</h2>
          <h2>(IFCD0210)</h2>
          <ul>
            <li>{t("Curriculum.daw_m1")}</li>
            <li>{t("Curriculum.daw_m2")}</li>
            <li>{t("Curriculum.daw_m3")}</li>
          </ul>
          <h2>{t("Curriculum.consorci")}</h2>
        </div>        
        <div className="education1">
          <h2>{t("Curriculum.ds")}</h2>
          <ul>
            <li>{t("Curriculum.ds_1")}</li>
            <li>{t("Curriculum.ds_2")}</li>
            <li>{t("Curriculum.ds_3")}</li>
            <li>{t("Curriculum.ds_4")}</li>
            <li>{t("Curriculum.ds_5")}</li>
          </ul>
          <h2>{t("Curriculum.coursera")}</h2>
        </div>
        <div className="education1">
          <h2>C2 - PROFICIENT ENGLISH CERTIFICATE (CEFR)</h2>
          <h2> EF Standard English Test (EF SET) (2023)</h2>
        </div>
        <div className="education1">
        <h2>{t("Curriculum.bd2")}</h2>
          <ul>
            <li>{t("Curriculum.bd2_1")}</li>
            <li>{t("Curriculum.bd2_2")}</li>
            <li>{t("Curriculum.bd2_3")}</li>
            <li>{t("Curriculum.bd2_4")}</li>
            <li>{t("Curriculum.bd2_5")}</li>
          </ul>
          <h2>{t("Curriculum.ioe")}</h2>
        </div>
        <div className="education1">
          <h2>{t("Curriculum.bd1")}</h2>
          <ul>
            <li>{t("Curriculum.bd1_1")}</li>
            <li>{t("Curriculum.bd1_2")}</li>
            <li>{t("Curriculum.bd1_3")}</li>
            <li>{t("Curriculum.bd1_4")}</li>
            <li>{t("Curriculum.bd1_5")}</li>
            <li>{t("Curriculum.bd1_6")}</li>
          </ul>
          <h2>{t("Curriculum.ioe")}</h2>
        </div>
        <div className="work-item">
        <div>
          <h2 className="cv">Curriculum Vitae</h2>
          <hr />
          {t("Curriculum.cv")}
          <hr />
          <br />
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
      </div>
      
    </div>
  );
};
