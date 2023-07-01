import React from "react";
import { useState } from "react";

import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  const [alert, setAlert] = useState(false);
  return (
    <React.Fragment>
      {alert ? <div className="alert">Zapisano do newslettera!</div> : null}
      <div className="contact">
        <div className="wrapper">
          <span>Bądź z nami w kontakcie</span>
          <div className="mail">
            <input type="text" placeholder="Wpisz swój email..." />
            <button
              onClick={() => {
                console.log("dolaczona");
                setAlert(true);
                // setTimeout(() => {
                //   setAlert(false);
                // }, 3000);
              }}
            >
              Dołącz do nas
            </button>
          </div>
          <div className="icons">
            <a href="https://www.instagram.com/wakacyjnatorba/" target="-blank">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/wakacyjnatorba/" target="-blank">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/WakacyjnaTorba" target="-blank">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
