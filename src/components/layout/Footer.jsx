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
          {/* <div>
            <a
              href="https://twitter.com/tonaco777"
              alt="tony777."
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                alt="twitter"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div> */}
          {/* <div>
            <a
              href="https://www.instagram.com/tonaco777/"
              alt="instagram"
              height="20px"
              width="20px"
            >
              <img
                className="red"
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                alt="instagram"
                height="20px"
                width="20px"
              ></img>
            </a>
          </div> */}
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
            <a
              href="mailto:tonacovargas@hotmail.com"
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
