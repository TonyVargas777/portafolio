import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [t, i18n] = useTranslation("global");
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
    <>
    <div className="education">
        <h2 className="heading">{t("Contacto.title")}</h2>
      </div>
    <section className="education">   
      <br />
      <div align="center" className="redes_contacto">
        <article>
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
        </article>
        <a
          href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
          alt="linkedin"
          target="blank"
          className="contacto_a"
        >
          LinkedIn <br />Tony_Vargas_García
        </a>

        <article>
          <a href="https://wa.me/34661871759" target="blank" title="WhatsApp">
            <img
              className="red"
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg"
              alt="WhatsApp"
              height="40px"
              width="40px"
            ></img>
          </a>
        </article>
        <a href="https://wa.me/34661871759" alt="WhatsApp" target="blank" className="contacto_a">
          WhatsApp
        </a>

        <article>
          <a
            href="https://github.com/TonyVargas777"
            alt="github"
            height="40px"
            width="40px"
            target="blank"
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
        </article>
        <a href="https://github.com/TonyVargas777" alt="github" target="blank" className="contacto_a">
          Github <br />TonyVargas777
        </a>

        <article>
          <a href="mailto:tonacovargas@gmail.com" target="blank" alt="email">
            <img
              className="red"
              align="center"
              src="img/email.png"
              alt="email"
              height="40"
              width="40"
            ></img>
          </a>
        </article>
        <a href="mailto:tonacovargas@gmail.com" target="blank" alt="email" className="contacto_a">
          tonacovargas@gmail.com
        </a>
      </div>
      <div className="home">
        <article className="work-item2">
          <div className="cv">
            <h3>{t("Inicio.know")}</h3>

            <br />
            <a
              href={obtenerEnlaceCV()}
              download
              target="_blank"
              title="Descargar Currículum Vitae"
              alt="CV"
            >
              {t("Inicio.download")}
            </a>
          </div>
        </article>
      </div>
    </section>
    </>
  );
};
