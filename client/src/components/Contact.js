import React from "react";
import RSVP from "./RSVP";
import ProgramPoint from "./SubmitProgramPoint";
import { isMobileView } from "../utils/MobileView";
import bild1 from "../images/bild1.jpg";
import bild2 from "../images/bild2.jpg";
import bild3 from "../images/bild3.jpg";
import bild4 from "../images/bild4.jpg";
import bild5 from "../images/bild5.jpg";
import bild6 from "../images/bild6.jpg";
import bild7 from "../images/bild7.jpg";

const Contact  = () => {

    return (
      <div style={{}} >
      <h1
          className={isMobileView() ? "mobileFormHeader" : "desktopFormHeader"}
          style={{display:"block"}}>
          O.S.A
        </h1>
        <h4 className={isMobileView() ? "rsvph4Mobile" : "rsvph4Desktop"}>
        Här anmäler du dig till bröllopsmiddagen. 
        Anmälan är personlig så tänk på att samtliga i sällskapet gör en egen anmälan.</h4>
        <br/>
        <h4 className={isMobileView() ? "rsvph4Mobile" : "rsvph4Desktop"}>Om du önskar att framföra tal eller spex dagen till ära, gör du det under fliken "Anmäl programpunkt". Sista anmälningsdag för detta är 14 juni 2021.</h4>
        <RSVP/>
        <div className={isMobileView() ? "mobileGallery" : "desktopGallery"}>
          <img src={bild1} style={{width:"20vw"}}/>
          <img src={bild2} style={{width:"20vw"}}/>
          <img src={bild3} style={{width:"20vw"}}/>
        </div>
          <br/>
        <div className={isMobileView() ? "mobileGallery" : "desktopGallery"}>
          <img src={bild4} style={{width:"20vw"}}/>
          <img src={bild7} style={{width:"20vw"}}/>
          <img src={bild6} style={{width:"20vw"}}/>
        </div>
      </div>
    );
}

export default Contact;