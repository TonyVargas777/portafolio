import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>Portafolio Tony Vargas &copy; Máster en React</div>
      <section>
        <div className="redes_footer">
          <div>
            <a
              href="https://linkedin.com/in/tony-vargas-garcía-122b1424b"
              target="blank"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="LinkedIn"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/TonyVargas777"
              alt="github"
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                alt="github"
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
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/whatsapp.svg"
                alt="WhatsApp"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="mailto:tonacovargas@gmail.com"
              target="blank"
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src="img/email.jpg"
                alt="email"
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
