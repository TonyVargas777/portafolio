import React from "react";
import TVDA1 from "/TVDA1.avif";
import LINKEDIN from "/img/linked-in-alt.svg";
import GITHUB from "/img/github.svg";
import WHATSAPP from "/img/whatsapp.svg";
import EMAIL from "/img/email.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Portfolio Tony Vargas &copy;</p>
      <img
        src={TVDA1}
        alt="Tony Vargas Development"
        WIDTH="150px"
        HEIGHT="150px"
      />
      <section>
        <div className="redes_footer">
          <div>
            <a
              href="https://www.linkedin.com/in/tony-vargas-777/"
              target="_blank"
              loading="lazy"
            >
              <img
                className="red"
                align="center"
                src={LINKEDIN}
                alt="LinkedIn"
                target="_blank"
                loading="lazy"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/TonyVargas777"
              target="_blank"
              loading="lazy"
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src={GITHUB}
                alt="github"
                target="_blank"
                loading="lazy"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
          <div>
            <a href="https://wa.me/34661871759" target="blank" title="WhatsApp">
              <img
                className="red"
                align="center"
                src={WHATSAPP}
                alt="WhatsApp"
                target="_blank"
                loading="lazy"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="mailto:tonacovargas@gmail.com"
              target="_blank"
              loading="lazy"
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src={EMAIL}
                alt="email"
                target="_blank"
                loading="lazy"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};
