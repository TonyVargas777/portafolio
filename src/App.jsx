import "./App.css";
import { MisRutas } from "./Router/MisRutas";
import BotonSubir from "../src/components/BotonSubir";
import { useTranslation } from "react-i18next";
import Es_Flag from "../public/spain_c.png";
import Cat_Flag from "../public/catalonia_c.png";
import En_Flag from "../public/usa_c.png";

function App() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="layout2">
        
        <div className="translator">
          
          <button className="button_trans" onClick={() => i18n.changeLanguage("es")}>
            {" "}
            <img width="24" height="24" src={Es_Flag} alt="Spanish Flag" />
          </button>
          <button className="button_trans" onClick={() => i18n.changeLanguage("cat")}>
            {" "}
            <img width="25" height="25" src={Cat_Flag} alt="Catalan Flag" />
          </button>
          <button className="button_trans" onClick={() => i18n.changeLanguage("en")}>
            {" "}
            <img width="24" height="24" src={En_Flag} alt="US Flag" />
          </button>
        </div>
        <div className="layout">
          <MisRutas />
          <BotonSubir />
        </div>
      </div>
    </>
  );
}

export default App;
