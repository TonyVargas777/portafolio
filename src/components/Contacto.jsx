import { React, useEffect } from "react";

export const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="education">
        <h2 className="heading">Contacto:</h2>
        <br />
      </div>
      
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
          https://linkedin.com/in/tony-vargas-garcía-122b1424b
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
          WhatsApp number: +34 ### ## ## ##
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
          https://github.com/TonyVargas777
        </a>

        <article>
          <a href="mailto:tonacovargas@hotmail.com" target="blank" alt="email">
            <img
              className="red"
              align="center"
              src="img/email.jpg"
              alt="email"
              height="40"
              width="40"
            ></img>
          </a>
        </article>
        <a href="mailto:tonacovargas@hotmail.com" target="blank" alt="email" className="contacto_a">
          tonacovargas@hotmail.com
        </a>
      </div>
    </section>
  );
};
