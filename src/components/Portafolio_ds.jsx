import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Portafolio_ds = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");

  const openVideoWindow = (videoSrc) => {
    window.open(videoSrc, "VideoWindow", "width=800,height=600");
  };

  return (
    <div className="page">
      <div className="education">
        <h1 className="heading">Data Science</h1>
      </div>
      <div className="services">
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/animales/python.jpg`}
              alt="PYTHON"
              onClick={() => openVideoWindow("/img/animales/Python.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">PYTHON</h2>
            <p className="">{t("Portafolio_DS.python_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/animales/fusion.png`}
              alt="PYTHON"
              onClick={() => openVideoWindow("/img/animales/Imágenes.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">{t("Portafolio_DS.python_image_title")}</h2>
            <p className="">{t("Portafolio_DS.python_image_text")}</p>
            <a
              href="https://github.com/TonyVargas777/portafolio/blob/main/public/ipynb/fusion.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.python_ipynb_link")}
            </a>
            <a
              href="https://github.com/TonyVargas777/portafolio/blob/main/public/ipynb/dog_green.ipynb"
              target="_blank"
              className="no-format-link"
            >
              {t("Portafolio_DS.python_ipynb_link2")}
            </a>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/MySQL/mysql_inicio.jpg`}
              alt="mysql"
              onClick={() => openVideoWindow("/img/MySQL/My_SQL.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">MY_SQL</h2>
            <p className="">{t("Portafolio_DS.mysql_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/MongoDB/MongoDB.png`}
              alt="mongodb"
              onClick={() => openVideoWindow("/img/MongoDB/MongoDB.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">MONGODB</h2>
            <p className="">{t("Portafolio_DS.mongoDB_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img src={`/img/Spark/spark_inicio.jpg`} alt="" />
            <img
              src={`/img/Spark/spark_inicio.jpg`}
              alt="mongodb"
              onClick={() => openVideoWindow("/img/Spark/PySpark.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">SPARK</h2>
            <p className="">{t("Portafolio_DS.spark_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img
              src={`/img/Airflow/Airflow_inicio.jpg`}
              alt="airflow"
              onClick={() => openVideoWindow("/img/Airflow/Airflow.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">AIRFLOW</h2>
            <p className="">{t("Portafolio_DS.airflow_text")}</p>
          </div>
        </div>
        <div className="service">
          <div className="mask2">
            <img src={`/img/Docker/docker_inicio.png`} alt="" />
            <img
              src={`/img/Docker/docker_inicio.png`}
              alt="airflow"
              onClick={() => openVideoWindow("/img/Docker/Docker.mp4")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="datos">
            <h2 className="">DOCKER</h2>
            <p className="">{t("Portafolio_DS.docker_text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
