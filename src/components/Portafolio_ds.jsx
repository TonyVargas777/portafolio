import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";


    export const Portafolio_ds = () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        const [t, i18n] = useTranslation("global");
      
        return (
            <div className="page">
                <div className="education">
                    <h1 className="heading">Data Science</h1>
                </div> 
            <div className="services">
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/animales/fusion.png`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">PYTHON</h2>
                        <p className="">{t("Portafolio_DS.python_text")}</p>
                    </div>
                </div>
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/MySQL/mysql_inicio.jpg`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">MY_SQL</h2>
                        <p className="">{t("Portafolio_DS.mysql_text")}</p>
                    </div>
                </div>
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/MongoDB/MongoDB.png`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">MONGODB</h2>
                        <p className="">{t("Portafolio_DS.mongoDB_text")}</p>
                    </div>
                </div>
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/Spark/spark_inicio.jpg`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">SPARK</h2>
                        <p className="">{t("Portafolio_DS.spark_text")}</p>
                    </div>
                </div>
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/Airflow/Airflow_inicio.jpg`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">AIRFLOW</h2>
                        <p className="">{t("Portafolio_DS.airflow_text")}</p>
                    </div>
                </div>
                <div className="service">
                    <div className="mask2">
                    <img src={`/img/Docker/docker_inicio.png`} alt="" />
                    </div>
                    <div className="datos">
                        <h2 className="">DOCKER</h2>
                        <p className="">{t("Portafolio_DS.docker_text")}</p>
                    </div>
                </div>
            </div>
            
            </div>
          )
        }